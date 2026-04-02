type DailyCardProps = {
  title: string;
  description: string;
  readTime: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
};

export function DailyCard({
  title,
  description,
  readTime,
  isCompleted,
  onToggleComplete,
}: DailyCardProps) {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Today&apos;s Card
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
        </div>

        <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
          {readTime}
        </div>
      </div>

      <div className="mt-6 rounded-3xl bg-slate-50 p-6">
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 h-px w-full bg-slate-200" />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            className={`inline-flex w-fit rounded-full px-4 py-2 text-sm font-medium ${
              isCompleted
                ? "bg-emerald-100 text-emerald-700"
                : "bg-white text-slate-500 shadow-sm"
            }`}
          >
            {isCompleted ? "Completed" : "Daily learning focus"}
          </div>

          <button
            onClick={onToggleComplete}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
              isCompleted
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            {isCompleted ? "Mark as unread" : "Mark as read"}
          </button>
        </div>
      </div>
    </section>
  );
}
