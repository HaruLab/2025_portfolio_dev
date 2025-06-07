"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// セレクトフィールド（選択式の入力）コンポーネント
function SelectField({ id, label, options, description }) {
  return (
    <div className="mb-6">
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
        className="w-full py-6 px-4 mt-3 appearance-none rounded-full bg-[var(--select-menu-background)]"
      >
        {options.map((opt, index) => (
          <option key={`${id}-opt-${index}`} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* 説明表示（オプション） */}
      {description && (
        <details className="p-4 rounded-lg  mt-3 transition-all group">
          <summary className="cursor-pointer flex items-center justify-between">
            <span>{description.summary}</span>
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
          <p className="mt-2 text-sm text-gray-700">{description.text}</p>
        </details>
      )}
    </div>
  );
}

// 詳細表示コンポーネント
function DetailsInfo({ summary, children }) {
  return (
    <details className="p-4  mb-4 transition-all">
      <summary className="cursor-pointer  flex items-center justify-between">
        <span>{summary}</span>
        <svg
          className="ml-2 w-4 h-4 text-gray-500 transition-transform duration-300 group-open:rotate-180"
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
      <div className="mt-2 text-sm text-gray-700">{children}</div>
    </details>
  );
}

// メインページ
export default function Price() {
  return (
    <div>
      <Header />

      <main className="pt-30 flex-1 p-10 max-w-2xl mx-auto">
        <form id="mvForm">
          {/* 動画タイプの選択 */}
          <SelectField
            id="videoType"
            label="動画タイプ選択"
            options={[
              { value: "mv", label: "ミュージックビデオ (MV)" },
              { value: "pv", label: "プロモーションビデオ (PV)" },
            ]}
            description={{
              summary: "対応可能な制作内容",
              text: "MV、PV制作に対応。その他の場合もご相談ください。",
            }}
          />

          {/* プランの選択 */}
          <SelectField
            id="plan"
            label="プラン選択"
            options={[
              { value: "basic", label: "松" },
              { value: "normal", label: "竹 (一部3DCG OK)" },
              { value: "premium", label: "梅 (Full 3DCG OK)" },
            ]}
            description={{
              summary: "プランの詳細",
              text: "松は歌詞中心、竹は一部3DCG、梅は全編3DCGで演出の自由度が高いです。",
            }}
          />

          {/* 納期 */}
          <SelectField
            id="deadline"
            label="ご希望納期"
            options={[
              { value: "1", label: "1か月以内" },
              { value: "2", label: "2か月以上" },
              { value: "0", label: "指定なし" },
            ]}
            description={{
              summary: "納期について",
              text: "1か月以内は基本料金、2か月以上は割引あり。指定なしも可能。",
            }}
          />

          {/* イラスト枚数 */}
          <SelectField
            id="illustration"
            label="イラスト枚数"
            options={[
              { value: "1", label: "1~4枚" },
              { value: "2", label: "5枚" },
              { value: "3", label: "6枚" },
              { value: "4", label: "7枚" },
              { value: "5", label: "8枚" },
              { value: "6", label: "9枚" },
              { value: "10", label: "10枚以上" },
            ]}
            description={{
              summary: "イラスト枚数の選択",
              text: "1~4枚は基本料金内。5枚目からは1枚2000円追加。",
            }}
          />

          {/* 背景の有無 */}
          <SelectField
            id="background"
            label="背景有無"
            options={[
              { value: "yes", label: "背景あり" },
              { value: "no", label: "背景なし" },
            ]}
            description={{
              summary: "背景の選択",
              text: "背景ありは描き込み背景、背景なしは単色またはグラデーション。",
            }}
          />

          {/* 計算結果表示 */}
          <div className="mt-8">
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontSize: "var(--font-size-h1)" }}
            >
              計算結果
            </h2>
            <p>
              予算目安: <span id="estimated-budget">----</span>
            </p>
            <p>
              納期目安: <span id="estimated-delivery">----</span>
            </p>
          </div>

          {/* 計算ボタン */}
          <button
            type="button"
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            onClick={calculate} // ←ここに直接イベントをセット
          >
            計算
          </button>
        </form>

        {/* 補足説明 */}
        <aside className="mt-12">
          <h2 className="font-bold" style={{ fontSize: "var(--font-size-h1)" }}>
            詳細
          </h2>

          <DetailsInfo summary="価格改定のお知らせ">
            <p>2025年2月より料金を改定しました。</p>
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
              <li>希望予算</li>
              <li>活動名</li>
              <li>イラスト</li>
              <li>要望</li>
              <li>歌詞とクレジット情報</li>
              <li>参考動画</li>
            </ul>
          </DetailsInfo>

          <DetailsInfo summary="お問い合わせ先">
            <p>
              <a
                href="mailto:info@example.com"
                className="text-blue-600 underline"
              >
                info@example.com
              </a>
            </p>
          </DetailsInfo>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

// 計算ボタンのクリック処理
function calculate() {
  const videoType = document.getElementById("videoType").value;
  const plan = document.getElementById("plan").value;
  const deadline = document.getElementById("deadline").value;
  const illustration = document.getElementById("illustration").value;
  const background = document.getElementById("background").value;

  // ベース料金（動画タイプ + プラン）
  let basePrice = 0;
  if (videoType === "mv") {
    if (plan === "basic") basePrice = 5000;
    else if (plan === "normal") basePrice = 10000;
    else if (plan === "premium") basePrice = 30000;
  } else if (videoType === "pv") {
    if (plan === "basic") basePrice = 10000;
    else if (plan === "normal") basePrice = 20000;
    else if (plan === "premium") basePrice = 30000;
  }

  // 納期割引（2か月以上なら10%割引）
  let deadlineDiscount = 1;
  if (deadline === "2") deadlineDiscount = 0.9;

  // イラスト枚数追加料金
  const illustrationCount = parseInt(illustration, 10);
  let illustrationPrice = 0;
  if (illustrationCount > 4) {
    illustrationPrice = (illustrationCount - 4) * 2000;
  }

  // 背景追加料金
  const backgroundPrice = background === "yes" ? 10000 : 0;

  // 合計計算
  const totalPrice = Math.floor(
    (basePrice + illustrationPrice + backgroundPrice) * deadlineDiscount
  );

  // 納期目安の表示
  let deliveryEstimate = "約1ヶ月";
  if (deadline === "2") deliveryEstimate = "約2ヶ月以上";
  if (deadline === "0") deliveryEstimate = "指定なし";

  // 結果表示
  document.getElementById("estimated-budget").textContent =
    totalPrice.toLocaleString() + "円（税込）";
  document.getElementById("estimated-delivery").textContent = deliveryEstimate;
}
