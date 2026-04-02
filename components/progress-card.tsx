type ProgressCardProps = {
  totalCards: number;
  totalCategories: number;
  selectedCategory: string;
};

export function ProgressCard({
  totalCards,
  totalCategories,
  selectedCategory,
}: ProgressCardProps) {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
        Progress
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
        Learning summary
      </h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
        <div className="rounded-[22px] bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Total cards</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            {totalCards}
          </p>
        </div>

        <div className="rounded-[22px] bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Categories</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            {totalCategories}
          </p>
        </div>

        <div className="rounded-[22px] bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Active filter</p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
            {selectedCategory}
          </p>
        </div>
      </div>
    </section>
  );
}
