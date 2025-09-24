import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--foreground)]/20 mt-10">
      <div className="max-w-6xl mx-auto px-4 pt-10 py-4 flex flex-col items-center gap-2">
        {/* 下に小さめSNSアイコン */}
        <div className="flex gap-3 text-[var(--foreground)]/40">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter className="w-3 h-3" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram className="w-3 h-3" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            <FaGithub className="w-3 h-3" />
          </a>
        </div>
      </div>
      {/* コピーライト（中央） */}
      <div className="text-[6px] pb-8 text-[var(--foreground)]/60 text-center">
        © 2025 HARULAB. All rights reserved.
      </div>
    </footer>
  );
}
