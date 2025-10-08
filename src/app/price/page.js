"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/bottom_menu";
import SelectField from "@/components/SelectField";
import DetailsInfo from "@/components/DetailsInfo";
import PriceSummary from "@/components/PriceSummary";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 価格設定の定数
const PRICE_CONFIG = {
  mv: {
    basic: 5000,
    normal: 10000,
    premium: 40000,
  },
  pv: {
    basic: 10000,
    normal: 15000,
    premium: 35000,
  },
  background: 5000,
  deadline: {
    1: 5000, // 1か月以内
    2: 2000, // 2か月以上
    0: 0, // 指定なし
  },
};

const DEADLINE_TEXT = {
  1: "1か月以内",
  2: "2か月以上",
  0: "指定なし",
};

export default function Price() {
  const [videoType, setVideoType] = useState("mv");
  const [plan, setPlan] = useState("basic");
  const [deadline, setDeadline] = useState("0");
  const [background, setBackground] = useState("yes");

  const [totalPrice, setTotalPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [backgroundExtra, setBackgroundExtra] = useState(0);
  const [deadlineExtra, setDeadlineExtra] = useState(0);
  const [deliveryText, setDeliveryText] = useState("指定なし");

  const formRef = useRef(null);
  const asideRef = useRef(null);

  // ページロード時のアニメーション
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(formRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
      })
      .from(
        asideRef.current.children,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<0.5"
      );
  }, []);

  // 料金計算ロジック
  useEffect(() => {
    const calculateEstimatedPrice = () => {
      const newBasePrice = PRICE_CONFIG[videoType][plan] || 0;
      const newBackgroundExtra =
        background === "yes" ? 0 : PRICE_CONFIG.background;
      const newDeadlineExtra = PRICE_CONFIG.deadline[deadline] || 0;

      setBasePrice(newBasePrice);
      setBackgroundExtra(newBackgroundExtra);
      setDeadlineExtra(newDeadlineExtra);
      setTotalPrice(newBasePrice + newBackgroundExtra + newDeadlineExtra);
      setDeliveryText(DEADLINE_TEXT[deadline] || "指定なし");
    };

    calculateEstimatedPrice();
  }, [videoType, plan, deadline, background]);

  return (
    <div>
      <Header />
      <BottomMenu />

      <main className="pt-20 flex-1 p-20 max-w-2xl mx-auto">
        <form id="mvForm" ref={formRef}>
          <SelectField
            id="videoType"
            label="動画タイプ"
            options={[
              { value: "mv", label: "ミュージックビデオ (MV)" },
              { value: "pv", label: "プロモーションビデオ (PV)" },
            ]}
            value={videoType}
            onChange={(e) => setVideoType(e.target.value)}
          />
          <SelectField
            id="plan"
            label="プラン"
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
            label="納期"
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

          <PriceSummary
            basePrice={basePrice}
            backgroundExtra={backgroundExtra}
            deadlineExtra={deadlineExtra}
            totalPrice={totalPrice}
            deliveryText={deliveryText}
          />
        </form>

        <aside className="mt-5" ref={asideRef}>
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
              <p>納期まで１ヶ月を切っている場合受付できません。</p>
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
