"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import BottomMenu from "@/components/bottom_menu";
import Modal from "@/components/Modal";
import gsap from "gsap";

export default function WorksPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const cards = [
    {
      imgSrc: "https://i.ytimg.com/vi/iXYENOW8KoM/hqdefault.jpg",
      title: "夏が僕らを呼ぶのなら",
      description:
        "PVSF2025S 参加作品。『夏が僕らを呼ぶのなら』の二次創作MVです。",
      href: "https://www.youtube.com/watch?v=iXYENOW8KoM",
      credits: {
        Song: "Luna",
        Movie: "HARUME(HARULAB)",
        Software: "AviUtl, Blender",
      },
    },
    {
      imgSrc: "https://i.ytimg.com/vi/zXk01gtdYuQ/hqdefault.jpg",
      title: "3D Behind the Scenes: Moon Base",
      description: "星を巡ればのカバーMVを制作しました。",
      href: "https://www.youtube.com/watch?v=zXk01gtdYuQ",
      credits: {
        Channel: "The Space Race",
        Note: "Members Only Video",
      },
    },
    {
      imgSrc: "https://i.ytimg.com/vi/sSSP_BU-bDU/hqdefault.jpg",
      title: "Realize",
      description:
        "未来へ向かって駆け抜ける、希望に満ちた楽曲のミュージックビデオ。",
      href: "https://www.youtube.com/watch?v=sSSP_BU-bDU&list=PL_IDDWCeMOvfUv5lD2VfvLX4TSVfLvrZv",
      credits: {
        Vocal: "夢前黎",
        Music: "T-POCKET",
        Movie: "harulab",
      },
    },
    {
      imgSrc: "https://img.youtube.com/vi/Gy-CwCqOysY/maxresdefault.jpg",
      title: "学マス】メクルメ / poyu (cover)",
      description:
        "poyu様による『メクルメ』のカバーソングMVを制作させていただきました。",
      href: "https://www.youtube.com/watch?v=Gy-CwCqOysY",
      credits: {
        Vocal: "poyu",
        Original: "Gakuen Idolmaster",
        Movie: "harulab",
      },
    },
    {
      imgSrc: "https://i.ytimg.com/vi/wrpKJBB3g6E/hqdefault.jpg",
      title: "オーバーレイワールド",
      description:
        "るる様による『オーバーレイ・ワールド』のカバーソングMVを制作させていただきました。",
      href: "https://www.youtube.com/watch?v=wrpKJBB3g6E",
      credits: {
        Vocal: "るる (Rull0ll)",
        Illustration: "T-yama",
        Mix: "Dios/SignalP",
        Movie: "HARULAB",
      },
    },
    {
      imgSrc: "https://i.ytimg.com/vi/j498AxenKGQ/hqdefault.jpg",
      title: "星集うこの場所で",
      description:
        "惑世いと様のオリジナル曲『星集うこの場所で』のMVを制作させていただきました。",
      href: "https://www.youtube.com/watch?v=j498AxenKGQ",
      credits: {
        Vocal: "惑世いと",
        "Music/Lyrics": "samo",
        "Illustration/Live2D": "UIIV◇",
        Movie: "HARULAB",
        Mixing: "よしけん",
      },
    },
    {
      imgSrc: "https://i.ytimg.com/vi/E79h8PnQX8o/hqdefault.jpg",
      title: "プラム - てんのくる",
      description:
        "てんのくる様の初のオリジナル曲『プラム』のMVを制作させていただきました。",
      href: "https://www.youtube.com/watch?v=E79h8PnQX8o&pp=0gcJCbIJAYcqIYzv",
      credits: {
        Vocal: "てんのくる",
        "Music/Lyric": "MIMI",
        Illustration: "ぱかちゃんぽんぽん",
        Movie: "HARULAB",
        Mix: "はっち",
      },
    },
    {
      imgSrc: "https://i.ytimg.com/vi/1dA6v0ob6a8/hqdefault.jpg",
      title: "文夜月",
      description:
        "VocaDuo2024参加作品。『文月夜』のMVを制作させていただきました。",
      href: "https://www.youtube.com/watch?v=1dA6v0ob6a8",
      credits: {
        Music: "Sug1",
        Mix: "SKII",
        Illustration: "キナリミホ",
        "Vocal/Lyrics": "Mecori",
        Movie: "HARULAB",
      },
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
              <Card {...card} onClick={() => openModal(card)} />
            </li>
          ))}
        </ul>
      </main>

      {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}

      <BottomMenu />
      <Footer />
    </div>
  );
}
