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

const MasonryGridCard: React.FC<MasonryGridCardProps> = ({
  card: { id, afterImg, title, prompt, height },
}) => {
  const [showModal, setShowModal] = useState(false);

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
    navigator.clipboard.writeText(prompt);
    toast("Prompt copied to clipboard!");
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
        <a
          href={`https://wa.me/18002428478?text=${encodeURIComponent(prompt)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-14 z-10 bg-white/80 hover:bg-white text-green-600 hover:text-green-800 rounded-full p-2 shadow cursor-pointer"
          style={{ pointerEvents: "auto" }}
          title="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.366.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c0-5.444 4.423-9.867 9.868-9.867 2.636 0 5.112 1.027 6.988 2.896a9.825 9.825 0 012.881 6.979c-.003 5.444-4.426 9.866-9.871 9.866zm8.413-18.279A11.815 11.815 0 0011.968 0C5.364 0 0 5.364 0 11.967c0 2.114.553 4.174 1.601 5.981L.057 23.925a1.001 1.001 0 001.225 1.225l5.955-1.548A11.93 11.93 0 0011.969 24c6.603 0 11.967-5.364 11.967-11.967 0-3.193-1.246-6.197-3.502-8.313z" />
          </svg>
        </a>

        <a
          href={`https://wa.me/18002428478?text=${encodeURIComponent(prompt)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-14 z-10 bg-white/80 hover:bg-white text-green-600 hover:text-green-800 rounded-full p-2 shadow cursor-pointer"
          style={{ pointerEvents: "auto" }}
          title="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.366.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c0-5.444 4.423-9.867 9.868-9.867 2.636 0 5.112 1.027 6.988 2.896a9.825 9.825 0 012.881 6.979c-.003 5.444-4.426 9.866-9.871 9.866zm8.413-18.279A11.815 11.815 0 0011.968 0C5.364 0 0 5.364 0 11.967c0 2.114.553 4.174 1.601 5.981L.057 23.925a1.001 1.001 0 001.225 1.225l5.955-1.548A11.93 11.93 0 0011.969 24c6.603 0 11.967-5.364 11.967-11.967 0-3.193-1.246-6.197-3.502-8.313z" />
          </svg>
        </a>
        <button
          type="button"
          className="absolute top-3 right-24 z-10 bg-white/80 hover:bg-white text-teal-600 hover:text-teal-800 rounded-full p-2 shadow cursor-pointer"
          style={{ pointerEvents: "auto" }}
          title="Open in ChatGPT with prompt"
          onClick={() => {
            const encodedPrompt = encodeURIComponent(prompt);
            const webUrl = `https://chat.openai.com/?prompt=${encodedPrompt}`;
            window.open(webUrl, "_blank", "noopener,noreferrer");
            toast("Opening ChatGPT with your prompt...");
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
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 12h8M12 8v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Only after image */}
        <Image
          src={afterImg}
          alt={title + " after"}
          width={400}
          height={height || 300}
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
          <div className="text-base font-semibold text-white mb-2">{title}</div>
          <div className="text-xs text-white mb-2 text-justify line-clamp-5">
            {prompt}
          </div>
          {prompt.split("\n").length > 4 && (
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
              {title}
            </div>

            {/* Copy icon in modal */}
            <div style={{ position: "relative" }}>
              <Image
                src={afterImg}
                alt={title + " after"}
                width={600}
                height={height || 400}
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
              {prompt}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryGridCard;
