"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PromptCardProps {
  beforeImg: string;
  afterImg: string;
  title: string;
  prompt: string;
}

export function PromptCard({
  beforeImg,
  afterImg,
  title,
  prompt,
}: PromptCardProps) {
  return (
    <div className="relative flex flex-col items-center bg-white dark:bg-black/40 rounded-xl shadow-lg w-full max-w-xs overflow-hidden group transition-transform hover:-translate-y-1 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative w-full aspect-[4/5] bg-gray-100 dark:bg-gray-800">
        {/* Before Image (default) */}
        <Image
          src={beforeImg}
          alt="Before"
          fill
          className="object-cover transition-opacity duration-400 group-hover:opacity-0"
          style={{ borderRadius: "inherit" }}
        />
        {/* After Image (shows on hover) */}
        <Image
          src={afterImg}
          alt="After"
          fill
          className="object-cover opacity-0 transition-opacity duration-400 group-hover:opacity-100"
          style={{ borderRadius: "inherit" }}
        />
        {/* Copy Button (top right, only on hover) */}
        <div className="absolute top-2 right-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <Button
            className="flex items-center gap-2 text-xs py-1 px-2 cursor-pointer transition-colors text-black rounded-md"
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(prompt);
              toast("Prompt copied to clipboard!");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="inline-block"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
          </Button>
        </div>
        {/* Overlay */}
        <div className="absolute left-0 bottom-0 w-full z-10">
          {/* Before State: show title */}
          <div className="group-hover:opacity-0 opacity-100 transition-opacity duration-400">
            <div className="bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white text-base font-semibold px-3 py-2 text-center rounded-b-xl">
              {title}
            </div>
          </div>
          {/* After State: show prompt, only on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/80 w-full flex flex-col justify-end items-center p-3 absolute left-0 bottom-0 z-20 rounded-b-xl">
            <p className="text-xs text-white mb-2 text-justify line-clamp-5">
              {prompt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
