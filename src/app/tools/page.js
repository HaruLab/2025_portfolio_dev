"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function works_page() {
  const [a, setA] = useState(""); // 入力1
  const [b, setB] = useState(""); // 入力2
  const [result, setResult] = useState(null); // 結果

  const handleCalculate = () => {
    const sum = Number(a) + Number(b); // 足し算
    setResult(sum);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🧮 シンプル計算ツール</h1>

        <div className="mb-4">
          <label className="block mb-1">数字1:</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">数字2:</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          計算する
        </button>

        {result !== null && (
          <div className="mt-6 text-xl">
            ✅ 結果: <strong>{result}</strong>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
