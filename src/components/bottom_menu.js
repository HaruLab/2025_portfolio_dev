import React from "react";
import { Home, Search, User } from "lucide-react"; // ← "User" を大文字で！
const menuItems = [
  { label: "ホーム", icon: <Home size={22} />, link: "/" },
  { label: "検索", icon: <Search size={22} />, link: "/search" },
  { label: "ユーザー", icon: <User size={22} />, link: "/user" }, // ←ここも "User"
];

const BottomMenu = () => (
  <>
    <nav style={styles.nav} className="bottom-menu">
      <div style={styles.glassEffect}></div>
      <div style={styles.tint}></div>
      <div style={styles.shine}></div>
      <div style={styles.content}>
        {menuItems.map((item) => (
          <a key={item.label} href={item.link} style={styles.link}>
            <span style={styles.icon}>{item.icon}</span>
          </a>
        ))}
      </div>
    </nav>

    {/* SVGフィルター */}
    <svg style={{ display: "none" }}>
      <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01 0.01"
          numOctaves="1"
          seed="5"
          result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="1" result="softMap" />
        <feSpecularLighting
          in="softMap"
          surfaceScale="10"
          specularConstant="10"
          specularExponent="100"
          lightingColor="white"
          result="white"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="200"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  </>
);

const styles = {
  nav: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "150px",
    maxWidth: "50%",
    height: "60px",
    padding: "0.5rem",
    borderRadius: "3rem",
    overflow: "hidden",
    zIndex: 1000,
    isolation: "isolate",
    boxShadow: "0 1px 70px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.01)",
  },
  glassEffect: {
    position: "absolute",
    inset: 0,
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(1px)",
    filter: "url(#glass-distortion)",
    zIndex: 0,
    borderRadius: "inherit",
  },
  tint: {
    position: "absolute",
    inset: 0,
    background: "color-mix(in srgb, var(--card-background) 40%, transparent)",
    zIndex: 1,
    borderRadius: "inherit",
    transition: "background 0.3s ease",
  },
  shine: {
    position: "absolute",
    inset: 0,
    boxShadow:
      "inset 2px 2px 1px 0 rgba(255,255,255,0.2), inset -1px -1px 1px 1px rgba(255,255,255,0.1)",
    zIndex: 2,
    borderRadius: "inherit",
  },
  content: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    justifyContent: "flex-start", // ← 左寄せに変更
    alignItems: "center",
    height: "100%",
  },
  link: {
    flex: 1,
    textAlign: "center",
    textDecoration: "none",
    color: "var(--foreground)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    fontSize: "22px",
    marginBottom: "2px",
  },
  label: {
    fontSize: "11px",
    color: "var(--foreground)",
  },
};

export default BottomMenu;
