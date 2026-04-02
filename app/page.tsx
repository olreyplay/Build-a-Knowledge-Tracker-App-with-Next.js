import { DailyCard } from "@/components/daily-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f6fb] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-4xl border border-white/70 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(168,85,247,0.12),transparent_28%)]" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Knowledge Tracker
            </span>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Build a habit of learning one small thing every day
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              A simple and modern app for bite-sized learning, focused
              consistency, and visible progress.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <DailyCard
            title="Why spaced repetition works better than cramming"
            description="Reviewing information in smaller sessions over time helps your brain store knowledge more effectively and remember it longer."
            readTime="2 min read"
          />

          <div className="grid gap-6">
            <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                Progress
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                Learning summary
              </h2>

              <div className="mt-6 h-28 rounded-[20px] bg-slate-50" />
            </div>

            <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                Categories
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                Topic filters
              </h2>

              <div className="mt-6 h-28 rounded-[20px] bg-slate-50" />
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
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
              0 cards
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="h-40 rounded-[22px] bg-slate-50" />
            <div className="h-40 rounded-[22px] bg-slate-50" />
            <div className="h-40 rounded-[22px] bg-slate-50" />
          </div>
        </section>
      </div>
    </main>
  );
}
