"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/bottom_menu";
import gsap from "gsap";

export default function Home() {
  // --- refs for animation ---
  const section1Ref = useRef(null);
  const textRef = useRef(null);
  return (
    <div>
      <Header />
      <BottomMenu />

      <main className=" flex-1">
        <section
          ref={section1Ref}
          className="min-h-screen   flex flex-col items-center justify-center  bg-gray-50"
        ></section>
      </main>

      <Footer />
    </div>
  );
}
