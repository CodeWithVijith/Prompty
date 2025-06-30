export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-8 py-16 bg-purple-600/10">
        <main className="flex flex-col gap-8 justify-center items-center text-center w-full max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col items-center">
            <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-6xl sm:text-8xl font-extrabold tracking-tighter leading-tight">
              Prompty
            </h1>
            <h2 className="text-lg sm:text-2xl font-medium text-gray-700 dark:text-gray-300">
              One stop solution for AI prompts
            </h2>
          </div>
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Coming Soon!!!
          </h4>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mt-4 mb-2 leading-relaxed max-w-xl mx-auto text-center">
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Prompty
            </span>{" "}
            is your go-to platform for discovering, sharing, and creating{" "}
            <span className="font-semibold text-orange-500 dark:text-orange-400">
              high-quality AI prompts
            </span>
            .
            <span className="block mt-2">
              Join a vibrant community of creators, explore{" "}
              <span className="font-semibold text-pink-600 dark:text-pink-400">
                trending prompts
              </span>
              , and supercharge your workflow.
            </span>
            <span className="block mt-2 italic text-gray-500 dark:text-gray-400">
              Stay tuned — we’re launching soon!!!
            </span>
          </p>
        </main>
      </div>

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
            <h2 className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] font-bold text-center tracking-tighter leading-none w-full mx-auto bg-gradient-to-b from-orange-500/80 to-orange-500/20 bg-clip-text text-transparent break-words block opacity-100">
              Prompty
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
}
