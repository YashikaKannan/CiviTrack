const SectionHeader = ({ title, subtitle, actionSlot }) => {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-base text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
      {actionSlot && <div className="flex items-center">{actionSlot}</div>}
    </div>
  );
};

export default SectionHeader;
