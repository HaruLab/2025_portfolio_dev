"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/bottom_menu";
import gsap from "gsap";

export default function Home() {
  const section1Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // セクションフェードイン
    gsap.fromTo(
      section1Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    );

    // 単語リスト
    const words = [
      "Creating MV",
      "3D Graphics",
      "Graphic Design",
      "Music Creation",
      "Coding",
      "Digital Art",
      "A Step Further",
    ];
    let i = 0;

    const showNextWord = () => {
      if (i >= words.length) return; // ループなしで終了

      // フェードインのみ
      textRef.current.textContent = words[i];
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0,
          ease: "power2.out",
          onComplete: () => {
            i++;
            setTimeout(showNextWord, 100); // 次の単語まで少し待つ
          },
        }
      );
    };

    showNextWord();
  }, []);

  return (
    <div>
      <Header />
      <BottomMenu />

      <main className=" flex-1">
        <section
          ref={section1Ref}
          className="min-h-screen   flex flex-col items-center justify-center  bg-gray-50"
        >
          <h1
            ref={textRef}
            className="text-4xl  font-medium uppercase tracking-wider text-gray-900"
          >
            A Step Further
          </h1>
          <p className=" text-sm  text-gray-500 tracking-widest">
            行こうもう一歩先へ
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
