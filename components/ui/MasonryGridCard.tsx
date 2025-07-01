"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { ChatGPTIcon } from "../icons/ChatGPTIcon";
import { CopyIcon } from "../icons/CopyIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";

interface MasonryGridCardProps {
  card: {
    id: number;
    afterImg: string;
    title: string;
    prompt: string;
    height: number;
  };
}

const MasonryGridCard: React.FC<MasonryGridCardProps> = ({
  card: { id, afterImg, title, prompt, height },
}) => {
  const router = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    toast("Prompt copied to clipboard!");
  };

  const handleChatGpt = () => {
    const encodedPrompt = encodeURIComponent(prompt);
    const webUrl = `https://chat.openai.com/?prompt=${encodedPrompt}`;
    window.open(webUrl, "_blank", "noopener,noreferrer");
    toast("Opening ChatGPT with your prompt...");
  };

  const handleClick = () => {
    router.push(`/prompts/${id}`);
  };

  return (
    <>
      <div
        key={id}
        style={{
          breakInside: "avoid",
          marginBottom: "16px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          minHeight: "300px",
        }}
        className="group"
      >
        {/* Copy icon always at top right */}
        <button
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-purple-600 hover:text-purple-800 rounded-full p-2 shadow cursor-pointer"
          style={{ pointerEvents: "auto" }}
          title="Copy Prompt"
          onClick={handleCopy}
        >
          <CopyIcon />
        </button>
        <a
          href={`https://wa.me/18002428478?text=${encodeURIComponent(prompt)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-13 z-10 bg-white/80 hover:bg-white text-green-600 hover:text-green-800 rounded-full p-2 shadow cursor-pointer"
          style={{ pointerEvents: "auto" }}
          title="Chat on WhatsApp"
        >
          <WhatsappIcon />
        </a>
        <button
          type="button"
          className="absolute top-3 right-23 z-10 bg-white/80 hover:bg-white text-teal-600 hover:text-teal-800 rounded-full p-2 shadow cursor-pointer"
          style={{ pointerEvents: "auto" }}
          title="Open in ChatGPT with prompt"
          onClick={handleChatGpt}
        >
          <ChatGPTIcon />
        </button>

        {/* Only after image */}
        <Image
          src={afterImg}
          alt={title + " after"}
          width={400}
          height={height || 300}
          priority
          style={{
            width: "100%",
            minHeight: "300px",
            objectFit: "cover",
            display: "block",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
        {/* Title, prompt, and copy icon */}
        <div
          className="absolute left-0 right-0 bottom-0 flex flex-col justify-end bg-black/70"
          style={{
            padding: "16px",
            zIndex: 3,
          }}
        >
          <div className="text-base font-semibold text-white mb-2">{title}</div>
          <div className="text-xs text-white mb-2 text-justify line-clamp-5">
            {prompt}
          </div>
          {prompt.split("\n").length > 4 && (
            <div className="text-xs text-white text-center mt-1">...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MasonryGridCard;
