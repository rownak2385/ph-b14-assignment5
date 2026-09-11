const badgeStyles = {
  Popular: 'bg-sky-50 text-sky-500 ring-sky-100',
  Versatile: 'bg-emerald-50 text-emerald-500 ring-emerald-100',
  Fast: 'bg-orange-50 text-orange-500 ring-orange-100',
  'Full Stack': 'bg-violet-50 text-violet-500 ring-violet-100',
  Standard: 'bg-emerald-50 text-emerald-500 ring-emerald-100',
  'Top SQL': 'bg-blue-50 text-blue-500 ring-blue-100',
  Cache: 'bg-red-50 text-red-500 ring-red-100',
  Ubiquitous: 'bg-amber-50 text-amber-500 ring-amber-100',
  Essential: 'bg-sky-50 text-sky-500 ring-sky-100',
  Robust: 'bg-sky-50 text-sky-500 ring-sky-100',
  Containers: 'bg-sky-50 text-sky-500 ring-sky-100',
  Modern: 'bg-cyan-50 text-cyan-500 ring-cyan-100',
}

function TechnologyCard({ technology, addToStack, selectedStack }) {
  const { name, category, description, icon, rating, difficulty, badge } = technology
  const badgeClassName = badgeStyles[badge] ?? 'bg-slate-50 text-slate-500 ring-slate-100'
  const isSelected = selectedStack.some((selectedTechnology) => selectedTechnology.id === technology.id)

  return (
    <article className="flex h-full min-h-[19rem] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.035)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_10px_28px_rgba(15,23,42,0.07)] lg:p-[1.375rem] xl:p-6">
      <div className="flex items-start justify-between gap-4">
        <img src={icon} alt={`${name} logo`} className="size-8 object-contain" loading="lazy" />
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${badgeClassName}`}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-3 flex-1 text-[0.9rem] leading-6 text-slate-600">{description}</p>

      <div className="mt-6 flex items-center justify-between gap-1 border-t border-slate-100 pt-3 text-[9px] text-slate-500 xl:text-[11px]">
        <span className="rounded bg-slate-100 px-2 py-1 font-medium text-slate-600">{category}</span>
        <span className="text-center">{difficulty}</span>
        <span className="flex items-center gap-1 font-medium text-slate-700">
          <span className="text-amber-400" aria-hidden="true">
            ★
          </span>
          {rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => addToStack(technology)}
        disabled={isSelected}
        className="mt-4 w-full rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

export default TechnologyCard
