import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const LandingPage = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
            <CheckCircleIcon className="h-4 w-4" />
            Verified Civic Issue Resolution Platform
          </span>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
            CiviTrack
          </h1>
          <p className="text-lg text-slate-600 sm:text-xl">
            A citizen-friendly platform for reporting, tracking, and verifying
            civic issues with transparent updates from local authorities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/report"
              className="rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
            >
              Report an Issue
            </Link>
            <Link
              to="/issues"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
            >
              View Public Issues
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Live civic resolution flow
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Citizens report issues in seconds",
                "Authorities fix with photo proof",
                "Community verifies and builds trust",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Demo-ready for hackathons with a full civic issue workflow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
