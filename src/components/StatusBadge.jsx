const statusStyles = {
  Reported: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Fixed: "bg-blue-100 text-blue-800 border-blue-200",
  Verified: "bg-green-100 text-green-800 border-green-200",
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
