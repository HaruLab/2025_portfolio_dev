"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/bottom_menu";

export default function Home() {
  return (
    <div>
      <Header />
      <BottomMenu />

      <main className="pt-30 flex-1 p-4">
        {/* カードなしのためulは不要、もし後で使うなら残してOK */}
        <p className="text-center text-xl font-semibold">Welcome to Home!</p>
      </main>

      <Footer />
    </div>
  );
}
