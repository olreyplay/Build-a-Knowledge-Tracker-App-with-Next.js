"use client";

import { useMemo, useState } from "react";
import { Categories } from "@/components/categories";
import { DailyCard } from "@/components/daily-card";
import { KnowledgeLibrary } from "@/components/knowledge-library";
import { ProgressCard } from "@/components/progress-card";
import { dailyKnowledge, knowledgeCards } from "@/data/knowledge-data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [...new Set(knowledgeCards.map((card) => card.category))];

  const filteredCards = useMemo(() => {
    if (selectedCategory === "All") {
      return knowledgeCards;
    }

    return knowledgeCards.filter((card) => card.category === selectedCategory);
  }, [selectedCategory]);

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
            title={dailyKnowledge.title}
            description={dailyKnowledge.description}
            readTime={dailyKnowledge.readTime}
          />

          <div className="grid gap-6">
            <ProgressCard
              totalCards={knowledgeCards.length}
              totalCategories={categories.length}
              selectedCategory={selectedCategory}
            />

            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </section>

        <div className="mt-6">
          <KnowledgeLibrary cards={filteredCards} />
        </div>
      </div>
    </main>
  );
}
