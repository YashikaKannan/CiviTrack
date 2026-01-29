import StatusBadge from "./StatusBadge";

const IssueCard = ({ issue, actionSlot }) => {
  return (
    <div className="card card-hover flex h-full flex-col overflow-hidden">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={issue.image}
          alt={issue.title}
          className="h-full w-full object-cover"
        />
      </div>
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
        {actionSlot && (
          <div className="mt-auto border-t border-slate-100 pt-4">
            {actionSlot}
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueCard;
