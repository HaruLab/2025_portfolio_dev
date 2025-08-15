"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/bottom_menu";
import Image from "next/image";
import logo from "../../../public/logo_black.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const logoRef = useRef(null);
  const nameRef = useRef(null);
  const introRef = useRef(null);
  const snsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // スクロールトリガーの設定
    const sections = [
      { target: titleRef.current, stagger: 0.1, duration: 1, y: 20 },
      { target: descriptionRef.current, stagger: 0, duration: 1, y: 20 },
      { target: logoRef.current, stagger: 0, duration: 1.5, y: 0, scale: 0.8 },
      { target: nameRef.current, stagger: 0, duration: 1, y: 20 },
      { target: introRef.current, stagger: 0, duration: 1, y: 20 },
      { target: snsRef.current, stagger: 0, duration: 1, y: 20 },
      { target: contactRef.current, stagger: 0, duration: 1, y: 20 },
    ];

    sections.forEach((section) => {
      // staggerは文字を分割してアニメーションする場合に使うため、
      // 適切な処理に分岐
      if (section.target === titleRef.current) {
        gsap.from(section.target.querySelectorAll(".title-char"), {
          scrollTrigger: {
            trigger: section.target,
            start: "top 80%", // 画面の上から80%の位置でアニメーション開始
          },
          opacity: 0,
          y: section.y,
          duration: section.duration,
          stagger: section.stagger,
          ease: "power3.out",
        });
      } else {
        gsap.from(section.target, {
          scrollTrigger: {
            trigger: section.target,
            start: "top 80%",
          },
          opacity: 0,
          y: section.y,
          scale: section.scale,
          duration: section.duration,
          ease: "power3.out",
        });
      }
    });
  }, []);

  const titleChars = "About".split("").map((char, index) => (
    <span key={index} className="title-char inline-block">
      {char}
    </span>
  ));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="flex items-center justify-between pt-20 pb-6 px-6 md:px-12 max-w-3xl mx-auto w-full"
        ref={titleRef}
      >
        <h1 className="text-5xl font-bold font-montserrat">{titleChars}</h1>
        <p
          className="font-montserrat text-right leading-relaxed max-w-xs"
          style={{ fontSize: "0.5rem" }}
          ref={descriptionRef}
        >
          My Profile & Contacts
        </p>
      </div>

      <BottomMenu />

      <main className="max-w-3xl mx-auto flex-grow px-6 md:px-12 pt-10 w-full">
        <div className="mb-12 flex justify-center">
          <div
            className="rounded-full border-2 p-2 w-40 h-40 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500"
            style={{ borderColor: "var(--border-color)" }}
            ref={logoRef}
          >
            <Image
              src={logo}
              alt="ロゴ"
              width={160}
              height={160}
              className="w-40 h-auto rounded-full"
            />
          </div>
        </div>

        <h1
          className="text-3xl font-extrabold mb-5 mt-30 text-left w-full"
          ref={nameRef}
        >
          晴芽 (HARULAB)
        </h1>

        <section
          className="mt-5 mb-10 text-left text-sm leading-relaxed max-w-xl opacity-90"
          ref={introRef}
        >
          <p>作ること全般が好きです。映像・写真・音楽などを作っています。</p>
        </section>

        <section className="mb-10 text-left w-full" ref={snsRef}>
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

        <section className="text-left max-w-md mb-1 w-full" ref={contactRef}>
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
