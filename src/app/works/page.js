"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import BottomMenu from "@/components/bottom_menu";
import gsap from "gsap";

export default function WorksPage() {
  const cards = [
    {
      imgSrc: "https://i.ytimg.com/vi/sSSP_BU-bDU/hqdefault.jpg",
      title: "Realize",
      description: "MV",
      href: "https://www.youtube.com/watch?v=sSSP_BU-bDU&list=PL_IDDWCeMOvfUv5lD2VfvLX4TSVfLvrZv",
    },
    {
      imgSrc: "https://img.youtube.com/vi/Gy-CwCqOysY/maxresdefault.jpg",
      title: "学マス】メクルメ / poyu (cover)",
      description: "MV",
      href: "https://www.youtube.com/watch?v=Gy-CwCqOysY",
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

  // --- refs for animation ---
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  // タイトル文字を分割して span に変換
  const title = "WORKS";
  const titleChars = title.split("").map((char, index) => (
    <span key={index} className="title-char inline-block">
      {char}
    </span>
  ));

  useEffect(() => {
    // ヘッダータイトルの文字を1つずつ表示
    gsap.from(".title-char", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    // カードを順番にフェードイン
    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div>
      <Header />

      <section className="max-w-3xl mx-auto w-full pt-20 pb-6 px-6 md:px-12 flex items-center justify-between">
        <h1 className="text-5xl font-bold font-montserrat">{titleChars}</h1>
        <p className="font-montserrat text-right leading-relaxed max-w-xs text-[0.5rem]">
          Creative works <br />
          from 2022 to 2025.
        </p>
      </section>

      <main className="max-w-3xl mx-auto w-full flex-1 px-6 md:px-12 pt-5">
        <ul className="grid gap-2 sm:grid-cols-2 list-none p-0 m-0">
          {cards.map((card, index) => (
            <li key={index} ref={addToRefs}>
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
