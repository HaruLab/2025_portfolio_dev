import React from "react";
import Link from "next/link";
import { Home, Twitter, User } from "lucide-react";
import styles from "./bottom_menu.module.css";

const menuItems = [
  { label: "ホーム", icon: <Home size={19} />, link: "/" },
  {
    label: "Twitter",
    icon: <Twitter size={19} />,
    link: "https://x.com/harulablab",
  },
  { label: "ユーザー", icon: <User size={19} />, link: "/about" },
];

const BottomMenu = () => {
  return (
    <>
      <nav className={`${styles.nav} bottom-menu`}>
        <div className={styles.glassEffect}></div>
        <div className={styles.tint}></div>
        <div className={styles.shine}></div>
        <div className={styles.content}>
          {menuItems.map((item) => {
            const isExternal = item.link.startsWith("http");
            const linkContent = <span className={styles.icon}>{item.icon}</span>;

            if (isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.link}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkContent}
                </a>
              );
            }

            return (
              <Link key={item.label} href={item.link} className={styles.link}>
                {linkContent}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default BottomMenu;
