import { Button } from "@/components/ui/button";
import { PromptCard } from "@/components/ui/PromptCard";
import Link from "next/link";
import { promptCards } from "./prompts";

const stats = [
  { id: 1, label: "Prompts", value: "12.5k+" },
  { id: 2, label: "Creators", value: "50k+" },
  { id: 3, label: "Downloads", value: "2M+" },
];

// Add prompt data array
// const promptCards = [
//   {
//     beforeImg: "/Profile.png",
//     afterImg: "/GeneratedImg.png",
//     title: "Cyberpunk Street Style",
//     prompt:
//       "Ultra-detailed portrait of same person in image, dressed in cyberpunk attire with glowing neon accents, leather jacket, tech goggles, and vibrant blue-purple cityscape background. Futuristic lighting, cinematic composition, sci-fi fashion editorial. 4K, high-detail, dramatic shadows.",
//   },
//   {
//     beforeImg: "/Profile.png",
//     afterImg: "/GeneratedImg.png",
//     title: "Elegant Classic Look",
//     prompt:
//       "Portrait of the same person styled as a 1950s movie star, with vintage hairstyle, elegant white shirt, pearl earrings, soft lighting and beige satin backdrop. Graceful pose, timeless elegance, high-definition, soft-focus classic studio lighting. Vogue-style editorial.",
//   },
//   {
//     beforeImg: "/Profile.png",
//     afterImg: "/GeneratedImg.png",
//     title: "Warrior from Fantasy Realm",
//     prompt:
//       "Fantasy portrait of the same person as a battle-hardened warrior wearing a silver armor, holding a glowing sword, standing on a misty cliff with stormy skies. Cinematic mood, detailed textures, epic high-fantasy character shot, dramatic lighting, 4K game-art style.",
//   },
// ];

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pt-0 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-purple-600/10 ">
        <header className="sticky top-4 z-50 bg-white shadow-lg dark:bg-black/50 rounded-md px-8 py-6 flex items-center justify-between w-full max-w-[80vw]">
          {/* <h1>Prompty</h1> */}
          <div className="flex flex-col items-start">
            <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-3xl sm:text-4xl font-bold tracking-tight">
              Prompty
            </h1>
            {/* <h3 className="text-gray-600 text-sm font-medium ml-4">
              Prompt. Pin. Inspire.
            </h3> */}
          </div>
          {/* <h3>Prompt. Pin. Inspire.</h3> */}
          <Link href="/prompts">
            <div className="cursor-pointer font-bold">Prompts</div>
          </Link>
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
                      <div className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Most Popular Prompts Section */}
          <section className="flex flex-col gap-[16px] items-center justify-center w-full bg-white/50 dark:bg-black/50 rounded-md p-8">
            {/* trending this week tag with icon */}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Most Popular Prompts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what&apos;s trending in the AI community right now
            </p>
            {/* Prompt cards grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl justify-items-center">
              {promptCards.map((card, idx) => (
                <PromptCard
                  key={idx}
                  beforeImg={card.beforeImg}
                  afterImg={card.afterImg}
                  title={card.title}
                  prompt={card.prompt}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      <footer className="w-full left-0 flex flex-col gap-2 items-center justify-between bg-black p-8 text-white relative">
        <div className="w-full flex flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
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
          {/* <span className="font-bold text-lg">Prompty</span> */}
          <div className="relative overflow-hidden w-full">
            <h2 className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] font-bold text-center tracking-tighter leading-none w-full mx-auto bg-gradient-to-b from-orange-500/80 to-orange-500/20 bg-clip-text text-transparent break-words block opacity-100">
              Prompty
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
}
