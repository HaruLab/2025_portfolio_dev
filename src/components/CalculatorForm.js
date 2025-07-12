import React from "react";

const CalculatorForm = ({ num1, setNum1, num2, setNum2, calculateSum, calculationResult }) => {
  return (
    <main className="flex-grow p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🧮 シンプル計算ツール</h1>

      <div className="mb-4">
        <label className="block mb-1">数字1:</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">数字2:</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        onClick={calculateSum}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        計算する
      </button>

      {calculationResult !== null && (
        <div className="mt-6 text-xl">
          ✅ 結果: <strong>{calculationResult}</strong>
        </div>
      )}
    </main>
  );
};

export default CalculatorForm;