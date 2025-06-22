import { PromptCard } from "@/components/ui/PromptCard";
import Link from "next/link";
import React from "react";
import MasonryGridCard from "@/components/ui/MasonryGridCard";
import { promptCards } from "../prompts";

// Dummy data
const items = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  title: `Item ${i + 1}`,
  image: `https://picsum.photos/300/200?random=${i + 1}`,
  height: 150 + Math.round(Math.random() * 150),
}));

// const promptCards = Array.from({ length: 20 }, (_, i) => ({
//   id: i,
//   beforeImg: "/Profile1.png",
//   afterImg: "/GeneratedImg1.png",
//   title: `Item ${i + 1}`,
//   prompt:
//     "A highly stylized portrait of same person in image with sharp features, flawless fair skin, wearing a black t-shirt, black sunglasses and standing against a bold red gradient background, confidently. The lighting is dramatic and cinematic, emphasizing his facial structure and giving a luxury fashion magazine vibe. Ultra-realistic, high-detail, editorial photography style. 4K resolution, symmetrical composition, minimal background elements. 4:3 ratio. ",
//   height: 400 + Math.round(Math.random() * 150),
// }));

// Masonry Grid Component
const MasonryGrid: React.FC = () => {
  return (
    <div
      style={{
        columnCount: 4,
        columnGap: "16px",
        maxWidth: 1200,
        margin: "40px auto",
      }}
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
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 shadow-lg bg-white rounded-lg">
          {promptCards.map((card, idx) => (
            <PromptCard
              key={idx}
              beforeImg={card.beforeImg}
              afterImg={card.afterImg}
              title={card.title}
              prompt={card.prompt}
            />
          ))}
        </div> */}
      </main>
    </div>
  );
}
