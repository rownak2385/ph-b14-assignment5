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
    <article
      className={`flex h-full flex-col rounded-xl border bg-white p-4 transition duration-200 hover:-translate-y-0.5 md:min-h-[19rem] md:rounded-2xl md:p-6 lg:p-[1.375rem] xl:p-6 ${
        isSelected
          ? 'technology-card-selected'
          : 'border-slate-200 shadow-[0_4px_16px_rgba(15,23,42,0.035)] hover:border-slate-300 hover:shadow-[0_10px_28px_rgba(15,23,42,0.07)]'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 md:block">
          <img src={icon} alt={`${name} logo`} className="size-8 object-contain" loading="lazy" />
          <h3 className="text-sm font-bold text-slate-900 md:mt-5 md:text-lg">{name}</h3>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${badgeClassName}`}
        >
          {badge}
        </span>
      </div>

      <p className="mt-4 flex-1 text-xs leading-5 text-slate-600 md:mt-3 md:text-[0.9rem] md:leading-6">{description}</p>

      <div className="mt-4 flex items-center justify-between gap-1 border-t border-slate-100 pt-3 text-[9px] text-slate-500 md:mt-6 xl:text-[11px]">
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
        className={`mt-4 w-full rounded-lg px-4 py-2.5 text-xs font-medium transition-colors duration-200 ${
          isSelected
            ? 'cursor-not-allowed bg-pink-50 text-pink-600 ring-1 ring-inset ring-pink-100'
            : 'bg-slate-950 text-white hover:bg-slate-800'
        }`}
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

export default TechnologyCard
