const SectionHeader = ({ title, subtitle, actionSlot }) => {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          CiviTrack
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {title}
        </h2>
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
