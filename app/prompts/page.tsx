import MasonryGridCard from "@/components/ui/MasonryGridCard";
import Link from "next/link";
import React from "react";
import { promptCards } from "../prompts";
import { Home as HomeIcon, List } from "lucide-react";

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
      {/* Desktop header */}
      <header className="sticky top-4 z-50 bg-white shadow-lg dark:bg-black/50 rounded-md px-8 py-6 flex items-center justify-between w-full max-w-[80vw] hidden lg:flex">
        <Link href="/">
          <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-3xl sm:text-4xl font-bold tracking-tight">
            Prompty
          </h1>
        </Link>
        <Link href="/prompts">
          <div className="cursor-pointer font-bold">Prompts</div>
        </Link>
      </header>
      {/* Mobile/Tablet header */}
      <header className="flex items-center justify-center w-full py-6 px-4 mt-24 max-[639px]:mt-24 min-[640px]:mt-0 lg:hidden">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-6xl sm:text-7xl font-extrabold tracking-tight">
          Prompty
        </h1>
      </header>

      <main style={{ minHeight: "100vh" }}>
        <MasonryGrid />
        {/* Floating Bottom Bar: visible only on mobile/tablet (max-width: 1024px) */}
        <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/70 dark:bg-black/90 border-t border-gray-200 dark:border-gray-800 flex justify-around items-center py-2 shadow-lg lg:hidden">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 px-4 py-1 group"
          >
            <HomeIcon className="w-6 h-6 text-black dark:text-gray-200 group-hover:text-purple-600 transition-colors" />
            <span className="text-xs text-black dark:text-gray-200 group-hover:text-purple-600 font-bold">
              Home
            </span>
          </Link>
          <Link
            href="/prompts"
            className="flex flex-col items-center gap-1 px-4 py-1 group"
          >
            <List className="w-6 h-6 text-black dark:text-gray-200 group-hover:text-orange-600 transition-colors" />
            <span className="text-xs text-black dark:text-gray-200 group-hover:text-orange-600 font-bold">
              Prompts
            </span>
          </Link>
        </nav>
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
