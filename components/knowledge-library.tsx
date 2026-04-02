type KnowledgeCard = {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
};

type KnowledgeLibraryProps = {
  cards: KnowledgeCard[];
};

export function KnowledgeLibrary({ cards }: KnowledgeLibraryProps) {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Knowledge Library
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            All learning cards
          </h2>
        </div>

        <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
          {cards.length} cards
        </div>
      </div>

      {cards.length === 0 ? (
        <div className="mt-6 rounded-[22px] border border-dashed border-slate-200 bg-slate-50 p-10 text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            No cards found
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Try selecting another category to see more knowledge cards.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">
                  {card.category}
                </span>

                <span className="text-sm text-slate-400">{card.readTime}</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-900">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
