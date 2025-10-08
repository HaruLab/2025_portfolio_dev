"use client";

import { X } from "lucide-react";

export default function Modal({ card, onClose }) {
  if (!card) return null;

  const getYouTubeVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get("v");
    } catch (error) {
      console.error("Invalid URL for YouTube video:", error);
      return null;
    }
  };

  const videoId = getYouTubeVideoId(card.href);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[var(--background)] overflow-hidden w-full rounded-lg max-w-[700px] h-auto max-h-[90vh] m-4 sm:m-8 flex flex-col relative border-2 border-[var(--border-color)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-500/30 rounded-full p-2 hover:bg-gray-500/50 transition-colors z-10"
        >
          <X size={24} className="text-white" />
        </button>

        <div className="flex flex-col w-full h-full overflow-hidden">
          {/* Video Area */}
          <div className="w-full aspect-video bg-black flex-shrink-0">
            <div className="relative w-full h-full">
              {videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <p>動画の読み込みに失敗しました。</p>
                </div>
              )}
            </div>
          </div>

          {/* Details Area */}
          <div className="p-6 md:p-12 flex-grow overflow-y-auto min-h-0">
            <h2 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
              {card.title}
            </h2>
            <p className="text-sm opacity-80 mb-4 text-[var(--foreground)]">
              {card.description}
            </p>
            {card.credits && (
              <div>
                <h3 className="font-semibold mb-2 border-b border-[var(--border-color)] pb-1 text-[var(--foreground)]">
                  Credits
                </h3>
                <ul className="text-sm space-y-1 opacity-90 text-[var(--foreground)]">
                  {Object.entries(card.credits).map(([role, name]) => (
                    <li key={role} className="flex justify-between">
                      <span className="font-medium">{role}:</span>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
