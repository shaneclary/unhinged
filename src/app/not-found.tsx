import Link from "next/link";
import { routes } from "@/content/site";

export default function NotFound() {
  return (
    <div className="page-head contours">
      <div className="wrap">
        <h1>Nothing at this address</h1>
        <p className="lede">The page may have moved. Start from one of these.</p>
        <div className="btn-row" style={{ marginTop: "1.5rem" }}>
          <Link className="btn" href={routes.home}>
            Home
          </Link>
          <Link className="btn btn-line" href={routes.services}>
            Services
          </Link>
          <Link className="btn btn-line" href={routes.learn}>
            Learn
          </Link>
        </div>
      </div>
    </div>
  );
}
