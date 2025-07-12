import { useState } from "react";
import Link from "next/link";

const mainMenu = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
];

const subMenu = [
  { href: "/tools", label: "Web" },
  { href: "/price", label: "依頼について" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header>
      {/* ヘッダー本体 */}
      <div className="fixed z-5 top-0 left-0 w-full max-w-6xl mx-auto px-3 py-2 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/">
          <img
            src="/logo_black.png"
            alt="HARULAB ロゴ"
            className="h-17 w-auto"
          />
        </Link>

        {/* メニューボタン */}
        <button
          onClick={toggleMenu}
          className="p-1 rounded-md"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {/* ハンバーガーアイコン */}
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* メニュー表示 */}
      {isOpen && (
        <div className="fixed z-50 inset-0 bg-[var(--background)] p-11 pt-20">
          {/* 閉じるボタン */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6"
            aria-label="メニューを閉じる"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* ナビゲーション */}
          <nav>
            <ul>
              {mainMenu.map(({ href, label }, i) => (
                <li key={i}>
                  <Link href={href} className="block">
                    <p className="font-semibold font-montserrat text-5xl pt-2">
                      {label}
                    </p>
                  </Link>
                </li>
              ))}

              <hr className="my-5 border-[var(--foreground)]/10" />

              {subMenu.map(({ href, label }, i) => (
                <li key={`sub-${i}`}>
                  <Link
                    href={href}
                    className="block text-sm font-normal hover:text-blue-500"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
