import { useContext, useMemo } from "react";
import SectionHeader from "../components/SectionHeader";
import { IssuesContext } from "../context/IssuesContext";

const VerificationPage = () => {
  const { issues, updateIssue } = useContext(IssuesContext);

  const fixedIssues = useMemo(
    () => issues.filter((issue) => issue.status === "Fixed"),
    [issues]
  );

  return (
    <section className="app-container section-pad">
      <SectionHeader
        title="Citizen Verification"
        subtitle="Confirm fixes to keep civic updates accurate."
      />
      {fixedIssues.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-500">
          No issues awaiting verification.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {fixedIssues.map((issue) => (
            <div key={issue.id} className="card p-5">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {issue.title}
                </h3>
                <p className="text-sm text-slate-500">{issue.location}</p>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Before
                  </p>
                  <div className="mt-2 aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={issue.image}
                      alt={`${issue.title} before`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    After
                  </p>
                  <div className="mt-2 aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={issue.afterImage || issue.image}
                      alt={`${issue.title} after`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={() => updateIssue(issue.id, { status: "Verified" })}
                  className="flex-1 rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200"
                >
                  Confirm Fixed
                </button>
                <button
                  onClick={() => updateIssue(issue.id, { status: "Reported" })}
                  className="btn-quiet flex-1"
                >
                  Not Fixed
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default VerificationPage;
