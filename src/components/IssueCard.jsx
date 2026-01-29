import StatusBadge from "./StatusBadge";

const IssueCard = ({ issue, actionSlot }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={issue.image}
        alt={issue.title}
        className="h-44 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {issue.title}
            </h3>
            <p className="text-sm text-slate-500">{issue.location}</p>
          </div>
          <StatusBadge status={issue.status} />
        </div>
        <div className="text-sm font-medium text-slate-600">
          Category:{" "}
          <span className="font-semibold text-slate-800">
            {issue.category}
          </span>
        </div>
        {actionSlot && <div className="mt-auto">{actionSlot}</div>}
      </div>
    </div>
  );
};

export default IssueCard;
