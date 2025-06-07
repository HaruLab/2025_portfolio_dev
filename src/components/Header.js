import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mainMenu = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
  ];
  const subMenu = [
    { href: "/tools.html", label: "Webツール" },
    { href: "/price", label: "依頼について" },
  ];

  return (
    <header className="">
      <div className="fixed z-50 top-0 left-0 w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <img
            src="/logo_black.png"
            alt="HARULAB ロゴ"
            className="h-15 w-auto"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md"
          aria-label="メニューを開く"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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

      {isOpen && (
        <div className="fixed z-50 inset-0 bg-[var(--background)] p-10 pt-20">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 rounded-md p-2"
            aria-label="メニューを閉じる"
          >
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav>
            <ul>
              {mainMenu.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="block ">
                    <p
                      style={{ fontSize: "var(--font-size-h1)" }}
                      className="font-semibold pt-2 font-syne"
                    >
                      {item.label}
                    </p>
                  </Link>
                </li>
              ))}
              <hr className="my-5 border-[var(--foreground)]/10" />
              {subMenu.map((item, i) => (
                <li key={`sub-${i}`}>
                  <Link
                    href={item.href}
                    className="block text-sm font-normal hover:text-blue-500"
                  >
                    {item.label}
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
