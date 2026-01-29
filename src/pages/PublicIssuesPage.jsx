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
    <section className="app-container section-pad">
      <SectionHeader
        title="Public Issue Tracker"
        subtitle="Track civic updates across the city in real time."
        actionSlot={
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-500">
              Category
            </span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="select-field w-44"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
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
