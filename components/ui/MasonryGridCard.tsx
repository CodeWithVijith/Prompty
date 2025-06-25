"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";

interface MasonryGridCardProps {
  card: {
    id: number;
    afterImg: string;
    title: string;
    prompt: string;
    height: number;
  };
}

const MasonryGridCard: React.FC<MasonryGridCardProps> = ({ card }) => {
  const [showModal, setShowModal] = useState(false);

  // Disable body scroll when modal is open, restore when closed
  useEffect(() => {
    if (showModal) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [showModal]);

  const handleCopy = () => {
    navigator.clipboard.writeText(card.prompt);
    toast("Prompt copied to clipboard!");
  };

  return (
    <>
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
        {/* Copy icon always at top right */}
        <button
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-purple-600 hover:text-purple-800 rounded-full p-2 shadow cursor-pointer"
          style={{ pointerEvents: "auto" }}
          title="Copy Prompt"
          onClick={handleCopy}
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
        {/* Only after image */}
        <Image
          src={card.afterImg}
          alt={card.title + " after"}
          width={400}
          height={card.height || 300}
          style={{
            width: "100%",
            minHeight: "300px",
            objectFit: "cover",
            display: "block",
            cursor: "pointer",
          }}
          onClick={() => setShowModal(true)}
        />
        {/* Title, prompt, and copy icon */}
        <div
          className="absolute left-0 right-0 bottom-0 flex flex-col justify-end bg-black/70"
          style={{
            padding: "16px",
            zIndex: 3,
          }}
        >
          <div className="text-base font-semibold text-white mb-2">
            {card.title}
          </div>
          <div className="text-xs text-white mb-2 text-justify line-clamp-5">
            {card.prompt}
          </div>
          {card.prompt.split("\n").length > 4 && (
            <div className="text-xs text-white text-center mt-1">...</div>
          )}
        </div>
      </div>

      {/* Modal for preview */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full flex flex-col"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => setShowModal(false)}
              title="Close"
            >
              <svg
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div
              className="text-lg font-semibold mb-2 text-center"
              style={{ marginTop: "10px" }}
            >
              {card.title}
            </div>

            {/* Copy icon in modal */}
            <div style={{ position: "relative" }}>
              <Image
                src={card.afterImg}
                alt={card.title + " after"}
                width={600}
                height={card.height || 400}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  display: "block",
                }}
              />
              <button
                className="absolute right-3 bottom-3 bg-white/80 hover:bg-white text-purple-600 hover:text-purple-800 rounded-full p-2 shadow-lg cursor-pointer"
                title="Copy Prompt"
                onClick={handleCopy}
                style={{
                  zIndex: 2,
                  boxShadow:
                    "0 4px 16px 0 rgba(80, 0, 120, 0.25), 0 1.5px 4px 0 rgba(0,0,0,0.10)",
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
            <div
              className="text-sm text-gray-700 whitespace-pre-line"
              style={{
                maxHeight: "250px",
                overflowY: "auto",
                marginTop: "8px",
                flex: "1 1 auto",
              }}
            >
              {card.prompt}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryGridCard;
