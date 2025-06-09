"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// セレクトフィールド（選択式の入力）コンポーネント
function SelectField({ id, label, options, description, onChange }) {
  return (
    <div className="mb-5">
      {/* 見出し */}
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontSize: "var(--font-size-h1)" }}
      >
        {label}
      </h2>

      {/* 視覚的には見えないが、アクセシビリティのためにラベルを残す */}
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      {/* セレクトボックス */}
      <select
        id={id}
        name={id}
        className="w-full py-3 px-5 mt-3 appearance-none rounded-full bg-[var(--select-menu-background)]"
        onChange={onChange}
      >
        {options.map((opt, index) => (
          <option key={`${id}-opt-${index}`} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* 説明表示（オプション） */}
      {description && (
        <details className="pt-2 pb-2 rounded-lg  mt-2 transition-all group">
          <summary
            className="cursor-pointer flex items-center justify-between"
            style={{ fontSize: "var(--font-size-h3)" }}
          >
            <span>{description.summary}</span>
            <svg
              className="ml-2 w-4 h-10 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="mt-5 text-sm text-left">{description.text}</p>
        </details>
      )}
    </div>
  );
}

function DetailsInfo({ summary, children }) {
  return (
    <details
      className="border-t last:border-b pt-5 pb-5 transition-all"
      style={{ borderColor: "var(--border-color)" }}
    >
      <summary
        className="text-md cursor-pointer flex items-center justify-between font-semibold"
        style={{ fontSize: "var(--font-size-h2)" }}
      >
        <span>{summary}</span>
        <svg
          className="ml-2 w-4 h-4 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="mt-5  text-sm text-left">{children}</div>
    </details>
  );
}

export default function Price() {
  function calculate() {
    const videoType = document.getElementById("videoType").value;
    const plan = document.getElementById("plan").value;
    const deadline = document.getElementById("deadline").value;
    const background = document.getElementById("background").value;

    // ベース料金（動画タイプ + プラン）
    let basePrice = 0;
    if (videoType === "mv") {
      if (plan === "basic") basePrice = 5000;
      else if (plan === "normal") basePrice = 10000;
      else if (plan === "premium") basePrice = 30000;
    } else if (videoType === "pv") {
      if (plan === "basic") basePrice = 10000;
      else if (plan === "normal") basePrice = 15000;
      else if (plan === "premium") basePrice = 35000;
    }

    // 背景の追加料金（なしなら +5000）
    const backgroundExtra = background === "yes" ? 0 : 5000;

    // 納期の追加料金（指定なし＝0、1か月以内=+5000、2か月以上=+2000、3か月以上=0）
    let deadlineExtra = 0;
    let deliveryText = "指定なし";
    if (deadline === "1") {
      deadlineExtra = 5000;
      deliveryText = "1か月以内";
    } else if (deadline === "2") {
      deadlineExtra = 2000;
      deliveryText = "2か月以上";
    }

    const totalPrice = basePrice + backgroundExtra + deadlineExtra;

    // 表示更新
    document.getElementById(
      "estimated-budget"
    ).textContent = `¥${totalPrice.toLocaleString()}`;
    document.getElementById("estimated-delivery").textContent = deliveryText;
  }

  useEffect(() => {
    calculate();

    const ids = ["videoType", "plan", "deadline", "background"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("change", calculate);
      }
    });

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.removeEventListener("change", calculate);
        }
      });
    };
  }, []);

  return (
    <div>
      <Header />

      <main className="pt-25 flex-1 p-10 max-w-2xl mx-auto">
        <form id="mvForm">
          {/* 動画タイプの選択 */}
          <SelectField
            id="videoType"
            label="動画タイプ選択"
            options={[
              { value: "mv", label: "ミュージックビデオ (MV)" },
              { value: "pv", label: "プロモーションビデオ (PV)" },
            ]}
          />
          {/* プランの選択 */}
          <SelectField
            id="plan"
            label="プラン選択"
            options={[
              { value: "basic", label: "松 (simple,fast)" },
              { value: "normal", label: "竹 (一部3DCG OK)" },
              { value: "premium", label: "梅 (Full 3DCG OK)" },
            ]}
          />
          {/* 納期 */}
          <SelectField
            id="deadline"
            label="納期まで"
            options={[
              { value: "1", label: "1か月以内" },
              { value: "2", label: "2か月以上" },
              { value: "0", label: "指定なし" },
            ]}
          />
          {/* 背景の有無 */}
          <SelectField
            id="background"
            label="背景イラスト"
            options={[
              { value: "yes", label: "背景あり" },
              { value: "no", label: "背景なし" },
            ]}
            onChange={calculate}
          />
          {/* 計算結果表示 */}
          <div className="">
            <h2
              className="text-2xl font-bold mb-5 pt-5"
              style={{ fontSize: "var(--font-size-h1)" }}
            >
              計算結果
            </h2>

            <div className="pt-2 pb-2 ">
              <p className="">
                金額{" "}
                <span
                  id="estimated-budget"
                  className=""
                  style={{ fontSize: "var(--font-size-h2)" }}
                >
                  ----
                </span>
              </p>
              <p className="">
                納期{" "}
                <span
                  id="estimated-delivery"
                  className=""
                  style={{ fontSize: "var(--font-size-h2)" }}
                >
                  ----
                </span>
              </p>
            </div>
          </div>
        </form>

        {/* 補足説明 */}

        <aside className="mt-10">
          <h2
            className="mb-5 font-bold"
            style={{ fontSize: "var(--font-size-h1)" }}
          ></h2>

          <div>
            <DetailsInfo summary="価格改定のお知らせ">
              <p>2025年2月より料金を改定しました。</p>
            </DetailsInfo>
            <DetailsInfo summary="この計算機について">
              <p>最終的な料金を決定するものではありません</p>
            </DetailsInfo>

            <DetailsInfo summary="注意事項">
              <p>映像制作は本業ではないため、納期に遅延の可能性があります。</p>
            </DetailsInfo>

            <DetailsInfo summary="お支払い方法について">
              <p>PayPal、Kyash、Amazonギフト券に対応。銀行振込は非対応。</p>
            </DetailsInfo>

            <DetailsInfo summary="事前に伝えてほしいこと">
              <ul className="list-disc list-inside">
                <li>希望納期</li>
                <li>参考資料</li>
                <li>希望予算</li>
                <li>活動名</li>
                <li>連絡先</li>
              </ul>
            </DetailsInfo>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
