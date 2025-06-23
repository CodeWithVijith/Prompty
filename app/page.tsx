import { Button } from "@/components/ui/button";
import MasonryGridCard from "@/components/ui/MasonryGridCard";
import Link from "next/link";
import { promptCards } from "./prompts";
import { Home as HomeIcon, List } from "lucide-react";

const stats = [
  { id: 1, label: "Prompts", value: "12.5k+" },
  { id: 2, label: "Creators", value: "50k+" },
  { id: 3, label: "Downloads", value: "2M+" },
];

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen pb-20 gap-16 pt-16 sm:pt-16 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-purple-600/10 ">
        <header className="sticky top-4 z-50 bg-white shadow-lg dark:bg-black/50 rounded-md px-8 py-6 flex items-center justify-between w-full max-w-[80vw] hidden lg:flex">
          <div className="flex flex-col items-start">
            <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-3xl sm:text-4xl font-bold tracking-tight">
              Prompty
            </h1>
          </div>
          <Link href="/prompts">
            <div className="cursor-pointer font-bold">Prompts</div>
          </Link>
        </header>

        <header className="flex items-center justify-center w-full py-6 px-4 lg:hidden">
          <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-6xl sm:text-7xl font-extrabold tracking-tight">
            Prompty
          </h1>
        </header>

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
          {/* Hero Section */}
          <section className="flex flex-col gap-[32px] items-center justify-center w-full w-[100%] h-[100%] rounded-md">
            <div className="flex flex-col gap-[16px] items-center justify-center text-center w-full dark:bg-black/50 rounded-md p-8">
              <div className="max-w-6xl mx-auto text-center relative">
                <div className="inline-flex items-center space-x-2 bg-white shadow-lg rounded-full px-4 py-2 mb-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap w-4 h-4 text-purple-600"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  <span className="text-sm font-medium text-purple-700 ">
                    12.5k+ Premium AI Prompts
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  The{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Pinterest
                  </span>{" "}
                  for{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI Prompts
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Discover and share the most viral AI image prompt—perfect for
                  stunning visuals, Reels, and creative projects.
                </p>
                <div className="flex justify-center mb-10">
                  <Link href="/prompts" passHref>
                    <Button
                      className="inline-flex items-center justify-center gap-2 font-semibold rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-10 py-4 text-xl shadow-lg hover:shadow-2xl transition-all focus:outline-none focus:ring-4 focus:ring-pink-300"
                      size="lg"
                    >
                      Explore
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {stats.map((stat) => (
                    <div key={stat.id} className="text-center">
                      <div className="text-lg font-bold text-gray-900 lg:text-3xl md:text-xl">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 md:text-sm lg:text-base">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Most Popular Prompts Section */}
          <section className="flex flex-col gap-[16px] items-center justify-center w-full bg-white/50 dark:bg-black/50 rounded-md p-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-4 py-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trending-up w-5 h-5 text-orange-600"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <span className="text-sm font-medium text-orange-700">
                Trending This Week
              </span>
            </div>
            <div className="text-center w-full">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Most Popular Prompts
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover what&apos;s trending in the AI community right now
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl justify-items-center">
              {promptCards.slice(0, 3).map((card, idx) => (
                <MasonryGridCard key={card.id} card={card} />
              ))}
            </div>
          </section>
        </main>
      </div>
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
      <footer className="w-full left-0 flex flex-col gap-2 items-center justify-between bg-black p-8 text-white relative">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400 gap-2 text-center">
          <span>© 2025 Prompty. All rights reserved.</span>
          <span>
            Made with&nbsp;
            <span className="text-red-500" role="img" aria-label="heart">
              ❤️
            </span>
            &nbsp;for creators
          </span>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative overflow-hidden w-full">
            <h2 className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] font-bold text-center tracking-tighter leading-none w-full mx-auto bg-gradient-to-b from-orange-500/80 to-orange-500/20 bg-clip-text text-transparent break-words block opacity-100 mb-12 lg:mb-0">
              Prompty
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
}
