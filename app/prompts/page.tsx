import MasonryGridCard from "@/components/ui/MasonryGridCard";
import Link from "next/link";
import React from "react";
import { promptCards } from "../prompts";

// Masonry Grid Component
const MasonryGrid: React.FC = () => {
  return (
    <div
      className="
                mx-auto my-10
                [column-count:1]
                sm:[column-count:2]
                md:[column-count:3]
                lg:[column-count:4]
                [column-gap:16px]
                max-w-[1200px]
            "
    >
      {promptCards.map((card) => (
        <MasonryGridCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pt-0 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-purple-600/10 ">
      <header className="sticky top-4 z-50 bg-white shadow-lg dark:bg-black/50 rounded-md px-8 py-6 flex items-center justify-between w-full max-w-[80vw]">
        {/* <h1>Prompty</h1> */}
        <Link href="/">
          <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-3xl sm:text-4xl font-bold tracking-tight">
            Prompty
          </h1>
        </Link>
        {/* <h3>Prompt. Pin. Inspire.</h3> */}
        <Link href="/prompts">
          <div className="cursor-pointer font-bold">Prompts</div>
        </Link>
      </header>

      <main style={{ minHeight: "100vh" }}>
        <MasonryGrid />
        <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-lg font-medium">
          Made with <span className="text-red-500">❤️</span> for creators
        </div>
        <div className="mt-8 text-center">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-4xl font-extrabold">
            Prompty
          </span>
        </div>
      </main>
    </div>
  );
}
