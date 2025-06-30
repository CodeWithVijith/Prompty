import { ChatGPTIcon } from "@/components/icons/ChatGPTIcon";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { CopyIcon } from "@/components/icons/CopyIcon";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, List } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Use Prompt – Prompty",
  description:
    "Follow this step-by-step guide to use AI image prompts effectively with ChatGPT or WhatsApp and get the perfect image output.",
};

export default function PromptDetailsPage() {
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
        <main className="min-h-screen bg-transparent sm:bg-purple-600/10 p-0 sm:p-12 font-[family-name:var(--font-geist-sans)]">
          <div className="max-w-5xl mx-auto bg-white/80 dark:bg-black/60 shadow-xl rounded-xl p-6 sm:p-10 flex flex-col gap-10">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-center leading-tight bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              How to Use This Prompt Effectively
            </h1>

            {/* Before/After Images */}
            <div className="grid md:grid-cols-2 gap-6 items-center justify-center">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">
                  Before
                </h2>
                <Image
                  src="https://n8n-github-files.s3.eu-north-1.amazonaws.com/Profile.webp"
                  alt="Before"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">
                  After
                </h2>
                <Image
                  src="https://n8n-github-files.s3.eu-north-1.amazonaws.com/GeneratedImg31.webp"
                  alt="After"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Prompt */}
            <div className="bg-black/80 text-white rounded-md p-6 text-sm sm:text-base">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                Prompt:
              </h3>
              <p>
                A highly stylized portrait of the same person in image with
                sharp features, flawless fair skin, wearing a black t-shirt,
                black sunglasses and standing against a bold red gradient
                background, confidently.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Steps to Use:
              </h2>

              <ul className="space-y-4 list-decimal list-inside text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                <li>
                  Head to{" "}
                  <Link
                    href="https://www.prompty.in/"
                    className="text-purple-600 underline"
                  >
                    prompty.in
                  </Link>{" "}
                  using Chrome browser.
                </li>
                <li>
                  Navigate to{" "}
                  <Link
                    href="https://www.prompty.in/prompts"
                    className="text-orange-600 underline"
                  >
                    /prompts
                  </Link>{" "}
                  to explore our collection of viral prompts.
                </li>
                <li>
                  Click on your preferred prompt card. You&apos;ll see three icons:
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                      <strong className="inline-flex items-center gap-1">
                        ChatGPT: (<ChatGPTIcon className="w-5 h-5 inline" />)
                      </strong>{" "}
                      Opens ChatGPT with the prompt pasted automatically. Upload
                      your image and get the result.
                    </li>
                    <li>
                      <strong>
                        WhatsApp: ( <WhatsappIcon className="w-5 h-5 inline" />{" "}
                        )
                      </strong>{" "}
                      Opens WhatsApp with the prompt text. Send it to yourself
                      or a friend, upload your image, and see the output.
                    </li>
                    <li>
                      <strong>
                        Copy: ( <CopyIcon className="w-5 h-5 inline" /> )
                      </strong>{" "}
                      Copies the prompt to clipboard. You can paste it manually
                      in ChatGPT and upload your image.
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="bg-yellow-100 dark:bg-yellow-900/40 border-l-4 border-yellow-500 p-4 rounded-md text-yellow-900 dark:text-yellow-100">
                <strong>Bonus Tip:</strong> If the generated image doesn’t match
                your face, use{" "}
                <Link
                  href="https://remaker.ai/face-swap-free/"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Remaker.ai Face Swap
                </Link>{" "}
                to upload both the original and generated images for a perfect
                face swap!
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <Link href="/prompts">
                <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-lg px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform">
                  Back to Prompts
                </Button>
              </Link>
            </div>
          </div>
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
