"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import BottomMenu from "@/components/bottom_menu";

export default function ToolsPage() {
  const cards = [
    {
      imgSrc:
        "https://i.ytimg.com/vi/sSSP_BU-bDU/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvtxsQh06UeI4qfdvn4Jwfs8nO5w",
      title: "Realize",
      description: "MV",
      href: "https://www.youtube.com/watch?v=sSSP_BU-bDU&list=PL_IDDWCeMOvfUv5lD2VfvLX4TSVfLvrZv",
    },
    {
      imgSrc:
        "https://i.ytimg.com/vi/wrpKJBB3g6E/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAMbvpKJRXS7nJKDxvEwjJbLqIS1g",
      title: "オーバーレイワールド",
      description: "MV",
      href: "https://www.youtube.com/watch?v=wrpKJBB3g6E",
    },
    {
      imgSrc:
        "https://i.ytimg.com/vi/j498AxenKGQ/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCTEEyU3teme4P7TSz5L79LiJuM4g",
      title: "星集うこの場所で",
      description: "MV",
      href: "https://www.youtube.com/watch?v=j498AxenKGQ",
    },
    {
      imgSrc:
        "https://i.ytimg.com/vi/E79h8PnQX8o/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBgYZiYkgk6M1Zl6NIc-PldO_gSOQ",
      title: "プラム - てんのくる",
      description: "mv",
      href: "https://www.youtube.com/watch?v=E79h8PnQX8o&pp=0gcJCbIJAYcqIYzv",
    },
    {
      imgSrc:
        "https://i.ytimg.com/vi/1dA6v0ob6a8/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDkq8_qjdewGqPGIed33C2cMnoxZw",
      title: "文夜月",
      description: "MV",
      href: "https://www.youtube.com/watch?v=1dA6v0ob6a8",
    },
  ];

  return (
    <div>
      <Header />
      <BottomMenu />

      <main className="pt-30 flex-1 p-4">
        <ul
          className="
              grid
              gap-1
              grid-cols-1
              sm:grid-cols-2
              sm:px-10
              md:grid-cols-3
              md:px-10
              list-none
              p-0
              m-0
            "
        >
          {cards.map((card, index) => (
            <li key={index}>
              <Card
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                href={card.href}
              />
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
