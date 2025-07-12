"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import BottomMenu from "@/components/bottom_menu";

export default function WorksPage() {
  const cards = [
    {
      imgSrc: "https://i.ytimg.com/vi/sSSP_BU-bDU/hqdefault.jpg",
      title: "Realize",
      description: "MV",
      href: "https://www.youtube.com/watch?v=sSSP_BU-bDU&list=PL_IDDWCeMOvfUv5lD2VfvLX4TSVfLvrZv",
    },
    {
      imgSrc: "https://i.ytimg.com/vi/wrpKJBB3g6E/hqdefault.jpg",
      title: "オーバーレイワールド",
      description: "MV",
      href: "https://www.youtube.com/watch?v=wrpKJBB3g6E",
    },
    {
      imgSrc: "https://i.ytimg.com/vi/j498AxenKGQ/hqdefault.jpg",
      title: "星集うこの場所で",
      description: "MV",
      href: "https://www.youtube.com/watch?v=j498AxenKGQ",
    },
    {
      imgSrc: "https://i.ytimg.com/vi/E79h8PnQX8o/hqdefault.jpg",
      title: "プラム - てんのくる",
      description: "MV",
      href: "https://www.youtube.com/watch?v=E79h8PnQX8o&pp=0gcJCbIJAYcqIYzv",
    },
    {
      imgSrc: "https://i.ytimg.com/vi/1dA6v0ob6a8/hqdefault.jpg",
      title: "文夜月",
      description: "MV",
      href: "https://www.youtube.com/watch?v=1dA6v0ob6a8",
    },
  ];

  return (
    <div>
      <Header />

      {/* タイトル＋サブタイトル：横幅固定 */}
      <section className="max-w-3xl mx-auto w-full pt-20 pb-6 px-6 md:px-12 flex items-center justify-between">
        <h1 className="text-5xl font-bold font-montserrat">WORKS</h1>
        <p className="font-montserrat text-right leading-relaxed max-w-xs text-[0.5rem]">
          Creative works <br />
          from 2022 to 2025.
        </p>
      </section>

      {/* メイン：カード一覧 */}
      <main className="max-w-3xl mx-auto w-full flex-1 px-6 md:px-12 pt-5">
        <ul className="grid gap-2 sm:grid-cols-2 list-none p-0 m-0">
          {cards.map((card, index) => (
            <li key={index}>
              <Card {...card} />
            </li>
          ))}
        </ul>
      </main>

      <BottomMenu />
      <Footer />
    </div>
  );
}
