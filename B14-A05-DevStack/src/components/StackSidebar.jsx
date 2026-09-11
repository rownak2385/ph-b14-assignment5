function StackSidebar({ selectedStack, removeFromStack, removeAllStack }) {
  const selectedCount = selectedStack.length
  const selectionLabel =
    selectedCount === 0
      ? 'No technologies selected yet.'
      : `${selectedCount} ${selectedCount === 1 ? 'Technology' : 'Technologies'} Selected`

  return (
    <aside className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.035)] lg:sticky lg:top-24 lg:w-[16.5rem] xl:w-72">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="mt-0.5 text-xs text-slate-400">{selectionLabel}</p>

      {selectedCount === 0 ? (
        <div className="mt-5 grid min-h-20 place-items-center rounded-xl border border-dashed border-slate-200 bg-slate-50/30 px-5 py-5 text-center text-xs text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div>
          <ul className="mt-4 space-y-2">
            {selectedStack.map((technology) => (
              <li
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50/50"
              >
                <img
                  src={technology.icon}
                  alt=""
                  className="size-8 shrink-0 object-contain"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">{technology.name}</p>
                  <p className="text-xs text-slate-400">{technology.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromStack(technology.id)}
                  className="grid size-8 shrink-0 place-items-center rounded-md text-2xl font-light leading-none text-slate-400 transition-colors duration-200 hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${technology.name} from stack`}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={removeAllStack}
            className="mt-12 w-full rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-500 transition-colors duration-200 hover:border-red-400 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  )
}

export default StackSidebar
