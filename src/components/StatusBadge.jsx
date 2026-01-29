const statusStyles = {
  Reported: "bg-yellow-50 text-yellow-800 border-yellow-200",
  Fixed: "bg-blue-50 text-blue-700 border-blue-200",
  Verified: "bg-green-50 text-green-700 border-green-200",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
