type CategoriesProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export function Categories({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoriesProps) {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
        Categories
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
        Topic filters
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => onSelectCategory("All")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            selectedCategory === "All"
              ? "bg-slate-900 text-white shadow"
              : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-slate-900 text-white shadow"
                : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
