import { Link } from "react-router-dom";
import {
  CameraIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-blue-50/80 via-white to-white">
        <div className="app-container section-pad text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Verified Civic Issue Resolution Platform
            </p>
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
              CiviTrack
            </h1>
            <p className="text-lg text-slate-600 sm:text-xl">
              A trusted civic-tech platform where citizens report local issues,
              authorities respond with updates, and communities verify
              resolutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/report" className="btn-primary text-base">
                Report an Issue
              </Link>
              <Link
                to="/issues"
                className="rounded-full border border-blue-600 bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
              >
                View Public Issues
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="app-container section-pad">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Simple, transparent steps that keep civic resolution accountable.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Report",
              description: "Citizens submit issues with photo & location.",
              icon: CameraIcon,
            },
            {
              title: "Review",
              description: "Authorities review and prioritize quickly.",
              icon: ClipboardDocumentCheckIcon,
            },
            {
              title: "Fix",
              description: "Teams resolve issues and upload proof.",
              icon: WrenchScrewdriverIcon,
            },
            {
              title: "Verify",
              description: "Citizens confirm that fixes are complete.",
              icon: CheckBadgeIcon,
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50/60">
        <div className="app-container section-pad text-center">
          <div className="mx-auto max-w-2xl rounded-3xl border border-blue-100 bg-white px-8 py-10">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Join citizens and officials working together to improve local
              communities.
            </p>
            <div className="mt-6 flex justify-center">
              <Link to="/report" className="btn-primary text-base">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
