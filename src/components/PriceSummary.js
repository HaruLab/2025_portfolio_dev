'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const PriceSummary = ({ basePrice, backgroundExtra, deadlineExtra, totalPrice, deliveryText }) => {
    const budgetRef = useRef(null);
    const deliveryRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            budgetRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
        );
        gsap.fromTo(
            deliveryRef.current,
            { x: -10, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
    }, [totalPrice, deliveryText]);

    return (
        <div className="mt-10 p-6 bg-[var(--select-menu-background)] rounded-lg transition-colors duration-300">
            <h2 className="text-xl font-bold mb-4 text-left text-gray-800 dark:text-gray-200">
                料金
            </h2>
            <div className="border-t border-gray-300 dark:border-gray-700 pt-4 text-sm">
                <div className="flex justify-between items-center mb-1">
                    <p>基本料金</p>
                    <p>¥{basePrice.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p>背景イラスト</p>
                    <p>
                        {backgroundExtra > 0
                            ? `+ ¥${backgroundExtra.toLocaleString()}`
                            : "含まれる"}
                    </p>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <p>納期オプション</p>
                    <p>
                        {deadlineExtra > 0
                            ? `+ ¥${deadlineExtra.toLocaleString()}`
                            : "なし"}
                    </p>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-700 pt-3">
                    <div className="flex justify-between items-baseline mb-2">
                        <p className="text-base font-bold text-gray-700 dark:text-gray-300">
                            合計金額
                        </p>
                        <p
                            className="text-3xl font-extrabold text-black dark:text-white"
                            ref={budgetRef}
                        >
                            ¥{totalPrice.toLocaleString()}
                        </p>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            おおよその納期
                        </p>
                        <p
                            className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                            ref={deliveryRef}
                        >
                            {deliveryText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceSummary;
