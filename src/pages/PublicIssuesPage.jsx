import { useContext, useMemo, useState } from "react";
import IssueCard from "../components/IssueCard";
import SectionHeader from "../components/SectionHeader";
import { IssuesContext } from "../context/IssuesContext";

const categories = ["All", "Road", "Garbage", "Drainage", "Streetlight", "Water"];

const PublicIssuesPage = () => {
  const { issues } = useContext(IssuesContext);
  const [category, setCategory] = useState("All");

  const filteredIssues = useMemo(() => {
    if (category === "All") return issues;
    return issues.filter((issue) => issue.category === category);
  }, [issues, category]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeader
        title="Public Issue Tracker"
        subtitle="Track civic updates across the city in real time."
        actionSlot={
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        }
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredIssues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </section>
  );
};

export default PublicIssuesPage;
