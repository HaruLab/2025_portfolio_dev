"use client";

import Link from "next/link";

export default function Menu() {
  return (
    <nav
      aria-label="サイトナビゲーション"
      className="bg-[var(--background)] text-[var(--foreground)] p-6 -lg"
    >
      <ul>
        <li>
          <Link
            href="/price"
            className="block text-xl font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          ></Link>
        </li>
      </ul>
    </nav>
  );
}
