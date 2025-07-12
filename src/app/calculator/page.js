"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorForm from "@/components/CalculatorForm";

export default function CalculatorPage() {
  const [num1, setNum1] = useState(""); // 入力1
  const [num2, setNum2] = useState(""); // 入力2
  const [calculationResult, setCalculationResult] = useState(null); // 結果

  const calculateSum = () => {
    const sum = Number(num1) + Number(num2); // 足し算
    setCalculationResult(sum);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CalculatorForm
        num1={num1}
        setNum1={setNum1}
        num2={num2}
        setNum2={setNum2}
        calculateSum={calculateSum}
        calculationResult={calculationResult}
      />
      <Footer />
    </div>
  );
}
