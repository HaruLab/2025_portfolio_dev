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
  const socialLinks = [
    { name: "Twitter（X）", url: "https://twitter.com/your_x_account" },
    { name: "Discord", url: "https://discord.gg/yourdiscord" },
  ];

  const contactInfo = {
    email: "harulablab@gmail.com",
    discord: "harulab",
  };

  const refs = {
    title: useRef(null),
    description: useRef(null),
    logo: useRef(null),
    name: useRef(null),
    intro: useRef(null),
    sns: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const animate = (target, vars) => {
      if (!target) return;
      gsap.from(target, {
        scrollTrigger: {
          trigger: target,
          start: "top 80%",
        },
        opacity: 0,
        ease: "power3.out",
        ...vars,
      });
    };

    animate(refs.title.current.querySelectorAll(".title-char"), {
      y: 20,
      duration: 1,
      stagger: 0.1,
    });
    animate(refs.description.current, { y: 20, duration: 1 });
    animate(refs.logo.current, { duration: 1.5, scale: 0.8 });

    ['name', 'intro', 'sns', 'contact'].forEach(key => {
      animate(refs[key].current, { y: 20, duration: 1 });
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
        ref={refs.title}
      >
        <h1 className="text-5xl font-bold font-montserrat">{titleChars}</h1>
        <p
          className="font-montserrat text-right leading-relaxed max-w-xs"
          style={{ fontSize: "0.5rem" }}
          ref={refs.description}
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
            ref={refs.logo}
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
          ref={refs.name}
        >
          晴芽 (HARULAB)
        </h1>

        <section
          className="mt-5 mb-10 text-left text-sm leading-relaxed max-w-xl opacity-90"
          ref={refs.intro}
        >
          <p>作ること全般が好きです。</p>
        </section>

        <section className="mb-10 text-left w-full" ref={refs.sns}>
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
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative hover:underline"
              >
                <span
                  className="font-mono text-sm px-2 py-1 rounded"
                  style={{ backgroundColor: "var(--select-menu-background)" }}
                >
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </section>

        <section className="text-left max-w-md mb-1 w-full" ref={refs.contact}>
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
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              <span
                className="font-mono text-sm px-2 py-1 rounded"
                style={{ backgroundColor: "var(--select-menu-background)" }}
              >
                {contactInfo.email}
              </span>
            </a>
          </p>

          <p>
            <span
              className="font-mono text-sm px-2 py-1 rounded"
              style={{ backgroundColor: "var(--select-menu-background)" }}
            >
              Discord: {contactInfo.discord}
            </span>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
