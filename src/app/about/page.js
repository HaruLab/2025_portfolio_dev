"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/bottom_menu";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Aboutタイトル部分をmax-w-3xlにして中央揃えに */}
      <div className="flex items-center justify-between pt-20 pb-6 px-6 md:px-12 max-w-3xl mx-auto w-full">
        {/* 左側：大きなタイトル */}
        <h1 className="text-5xl font-bold font-montserrat">About</h1>

        {/* 右側：小さめのサブタイトル（右寄せ） */}
        <p
          className="font-montserrat text-right leading-relaxed max-w-xs"
          style={{ fontSize: "0.5rem" }}
        >
          My Profile & Contacts
        </p>
      </div>

      <BottomMenu />

      <main className="max-w-3xl mx-auto flex-grow px-6 md:px-12 pt-10 w-full">
        {/* ロゴ丸く囲い＆中央揃え */}
        <div className="mb-12 flex justify-center">
          <div
            className="rounded-full border-2 p-2 w-40 h-40 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500"
            style={{ borderColor: "var(--border-color)" }}
          >
            <img
              src="/logo_black.png"
              alt="ロゴ"
              className="w-40 h-auto rounded-full"
            />
          </div>
        </div>

        {/* 名前 */}
        <h1 className="text-3xl font-extrabold mb-5 text-left w-full">
          晴芽 (HARULAB)
        </h1>

        {/* 自己紹介 */}
        <section className="mt-5 mb-10 text-left text-sm leading-relaxed max-w-xl opacity-90">
          <p>作ること全般が好きです。映像・写真・音楽などを作っています。</p>
        </section>

        {/* SNSリンク */}
        <section className="mb-10 text-left w-full">
          <h2
            className="text-3xl font-semibold mb-6 tracking-wide"
            style={{
              color: "var(--text-color)",
              fontSize: "var(--font-size-h2)",
            }}
          >
            SNS
          </h2>
          <div className="flex gap-3 text-sm">
            <a
              href="https://twitter.com/your_x_account"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:underline"
            >
              <span
                className="font-mono text-sm px-2 py-1 rounded"
                style={{ backgroundColor: "var(--select-menu-background)" }}
              >
                Twitter（X）
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="https://discord.gg/yourdiscord"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:underline"
            >
              <span
                className="font-mono text-sm px-2 py-1 rounded"
                style={{ backgroundColor: "var(--select-menu-background)" }}
              >
                Discord
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"></span>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="text-left max-w-md mb-1 w-full">
          <h2
            className="text-3xl font-semibold mb-6 tracking-wide"
            style={{
              color: "var(--text-color)",
              fontSize: "var(--font-size-h)",
            }}
          >
            Contact
          </h2>

          <p className="mb-3 text-lg">
            <a href="mailto:harulablab@gmail.com" className="hover:underline">
              <span
                className="font-mono text-sm px-2 py-1 rounded"
                style={{ backgroundColor: "var(--select-menu-background)" }}
              >
                harulablab@gmail.com
              </span>
            </a>
          </p>

          <p>
            <span
              className="font-mono text-sm px-2 py-1 rounded"
              style={{ backgroundColor: "var(--select-menu-background)" }}
            >
              Discord: harulab
            </span>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
