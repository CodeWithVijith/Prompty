"use client";

import Image from "next/image";
import React from "react";
import { toast } from "sonner";

interface MasonryGridCardProps {
  card: {
    id: number;
    beforeImg: string;
    afterImg: string;
    title: string;
    prompt: string;
    height: number;
  };
}

const MasonryGridCard: React.FC<MasonryGridCardProps> = ({ card }) => {
  return (
    <div
      key={card.id}
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
      {/* Image swap on hover */}
      <Image
        src={card.beforeImg}
        alt={card.title}
        style={{
          width: "100%",
          height: card.height,
          minHeight: "300px",
          objectFit: "cover",
          display: "block",
          transition: "opacity 0.3s",
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
        className="group-hover:opacity-0"
      />
      <Image
        src={card.afterImg}
        alt={card.title + " after"}
        style={{
          width: "100%",
          height: card.height,
          minHeight: "300px",
          objectFit: "cover",
          display: "block",
          transition: "opacity 0.3s",
          position: "relative",
          zIndex: 2,
        }}
        className="opacity-0 group-hover:opacity-100"
      />
      {/* Prompt at the bottom, only on hover */}
      <div
        className="absolute left-0 right-0 bottom-0 flex flex-col justify-end bg-black/70 transition-opacity opacity-0 group-hover:opacity-100"
        style={{
          padding: "16px",
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <div className="text-xs text-white mb-2 text-justify line-clamp-5 pointer-events-auto">
          {card.prompt}
        </div>
        {card.prompt.split("\n").length > 4 && (
          <div className="text-xs text-white text-center mt-1 pointer-events-none">
            ...
          </div>
        )}
      </div>
      {/* Copy icon at top right, only on hover */}
      <button
        className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-purple-600 hover:text-purple-800 rounded-full p-2 shadow transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
        style={{ pointerEvents: "auto" }}
        title="Copy Prompt"
        onClick={() => {
          navigator.clipboard.writeText(card.prompt);
          toast("Prompt copied to clipboard!");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <rect x="3" y="3" width="13" height="13" rx="2" />
        </svg>
      </button>
    </div>
  );
};

export default MasonryGridCard;
