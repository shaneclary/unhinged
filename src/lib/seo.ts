import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Service } from "@/content/services";
import type { Topic } from "@/content/learn/types";
import { plain } from "@/content/learn/types";
import type { Term } from "@/content/glossary";

const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export const ORG_ID = `${site.url}/#organization`;
export const SITE_ID = `${site.url}/#website`;
export const PERSON_ID = `${site.url}/#liam-eades`;

/**
 * Page metadata with a canonical URL and the right robots setting.
 * A page is indexable only when the whole site is (NEXT_PUBLIC_INDEXABLE=true)
 * and the page itself is ready (index !== false).
 */
export function pageMeta(input: { title: string; description: string; path: string; index?: boolean }): Metadata {
  const indexable = site.indexable && input.index !== false;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: site.logo, alt: site.name }],
    },
    twitter: { card: "summary", title: input.title, description: input.description },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

/** Who the business is. Goes on every page so each one stands on its own for a crawler. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: site.logo,
        image: site.logo,
        description: site.description,
        address: postalAddress,
        areaServed: site.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
        knowsAbout: site.knowsAbout,
        founder: { "@id": PERSON_ID },
        sameAs: site.social.map((entry) => entry.url),
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.principal,
        jobTitle: "Exploration Geologist",
        worksFor: { "@id": ORG_ID },
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: site.url,
        name: site.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-US",
      },
    ],
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: abs(entry.path),
    })),
  };
}

export function servicesLd(services: Service[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${abs(path)}#${service.id}`,
        name: service.name,
        description: service.summary,
        serviceType: service.name,
        provider: { "@id": ORG_ID },
        areaServed: site.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
        url: `${abs(path)}#${service.id}`,
      },
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: { "@type": "Answer", text: entry.a },
    })),
  };
}

export function guideLd(topic: Topic, path: string, terms: Term[]) {
  return {
    "@context": "https://schema.org",
    "@type": ["Article", "LearningResource"],
    "@id": `${abs(path)}#article`,
    headline: topic.title,
    description: topic.description,
    abstract: plain(topic.answer),
    url: abs(path),
    mainEntityOfPage: abs(path),
    inLanguage: "en-US",
    dateModified: topic.updated,
    datePublished: topic.updated,
    learningResourceType: "Explainer",
    educationalLevel: ["Beginner", "Intermediate", "Advanced"],
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(topic.reviewed ? { reviewedBy: { "@id": PERSON_ID } } : {}),
    about: terms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term,
      description: term.plain,
      url: `${site.url}/glossary#${term.id}`,
    })),
    citation: topic.sources.map((source) => ({ "@type": "CreativeWork", name: source.label, url: source.url })),
  };
}

export function glossaryLd(terms: Term[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${abs(path)}#terms`,
    name: "Exploration geology glossary",
    url: abs(path),
    publisher: { "@id": ORG_ID },
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${abs(path)}#${term.id}`,
      name: term.term,
      alternateName: term.also,
      description: `${term.plain} ${term.technical}`,
      url: `${abs(path)}#${term.id}`,
      inDefinedTermSet: `${abs(path)}#terms`,
    })),
  };
}
