"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/bottom_menu";
import SelectField from "@/components/SelectField";
import DetailsInfo from "@/components/DetailsInfo";

export default function Price() {
  const [videoType, setVideoType] = useState("mv");
  const [plan, setPlan] = useState("basic");
  const [deadline, setDeadline] = useState("0");
  const [background, setBackground] = useState("yes");
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryText, setDeliveryText] = useState("指定なし");

  useEffect(() => {
    calculateEstimatedPrice();
  }, [videoType, plan, deadline, background]);

  const calculateEstimatedPrice = () => {
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

    const backgroundExtra = background === "yes" ? 0 : 5000;

    let currentDeadlineExtra = 0;
    let currentDeliveryText = "指定なし";
    if (deadline === "1") {
      currentDeadlineExtra = 5000;
      currentDeliveryText = "1か月以内";
    } else if (deadline === "2") {
      currentDeadlineExtra = 2000;
      currentDeliveryText = "2か月以上";
    }

    setTotalPrice(basePrice + backgroundExtra + currentDeadlineExtra);
    setDeliveryText(currentDeliveryText);
  };

  return (
    <div>
      <Header />
      <BottomMenu />

      <main className="pt-25 flex-1 p-10 max-w-2xl mx-auto">
        <form id="mvForm">
          <SelectField
            id="videoType"
            label="動画タイプ選択"
            options={[
              { value: "mv", label: "ミュージックビデオ (MV)" },
              { value: "pv", label: "プロモーションビデオ (PV)" },
            ]}
            value={videoType}
            onChange={(e) => setVideoType(e.target.value)}
          />
          <SelectField
            id="plan"
            label="プラン選択"
            options={[
              { value: "basic", label: "松 (simple,fast)" },
              { value: "normal", label: "竹 (一部3DCG OK)" },
              { value: "premium", label: "梅 (Full 3DCG OK)" },
            ]}
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          />
          <SelectField
            id="deadline"
            label="納期まで"
            options={[
              { value: "1", label: "1か月以内" },
              { value: "2", label: "2か月以上" },
              { value: "0", label: "指定なし" },
            ]}
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <SelectField
            id="background"
            label="背景イラスト"
            options={[
              { value: "yes", label: "背景あり" },
              { value: "no", label: "背景なし" },
            ]}
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
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
                  ¥{totalPrice.toLocaleString()}
                </span>
              </p>
              <p className="">
                納期{" "}
                <span
                  id="estimated-delivery"
                  className=""
                  style={{ fontSize: "var(--font-size-h2)" }}
                >
                  {deliveryText}
                </span>
              </p>
            </div>
          </div>
        </form>

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
              <p>
                最終的な料金を決定するものではありません。実際には動画の長さ、イラストの枚数等によって価格は変動します。
              </p>
            </DetailsInfo>

            <DetailsInfo summary="注意事項">
              <p>映像制作は本業ではないため、納期に遅延の可能性があります。</p>
            </DetailsInfo>

            <DetailsInfo summary="お支払い方法について">
              <p>
                PayPal、Kyash、Amazonギフト券に対応。誠に勝手ながら銀行振込は対応しておりません。
              </p>
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
