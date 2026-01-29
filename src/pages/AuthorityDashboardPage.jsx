import { useContext, useMemo, useState } from "react";
import IssueCard from "../components/IssueCard";
import ImageUploader from "../components/ImageUploader";
import SectionHeader from "../components/SectionHeader";
import { IssuesContext } from "../context/IssuesContext";

const AuthorityDashboardPage = () => {
  const { issues, updateIssue } = useContext(IssuesContext);
  const [proofImages, setProofImages] = useState({});

  const reportedIssues = useMemo(
    () => issues.filter((issue) => issue.status === "Reported"),
    [issues]
  );

  const handleProofChange = (id, value) => {
    setProofImages((prev) => ({ ...prev, [id]: value }));
  };

  const handleMarkFixed = (issue) => {
    const afterImage =
      proofImages[issue.id] ||
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80";
    updateIssue(issue.id, { status: "Fixed", afterImage });
  };

  return (
    <section className="app-container section-pad">
      <SectionHeader
        title="Authority Dashboard"
        subtitle="Review reported issues and update resolution status."
      />
      {reportedIssues.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-500">
          No reported issues right now.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {reportedIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              actionSlot={
                <div className="space-y-4">
                  <ImageUploader
                    label="Upload proof image"
                    value={proofImages[issue.id] || ""}
                    onChange={(value) => handleProofChange(issue.id, value)}
                  />
                  <button
                    onClick={() => handleMarkFixed(issue)}
                    className="btn-primary w-full rounded-xl"
                  >
                    Mark as Fixed
                  </button>
                </div>
              }
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default AuthorityDashboardPage;
