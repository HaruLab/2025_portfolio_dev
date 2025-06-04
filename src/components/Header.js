// components/Header.tsx
export default function Header() {
  return (
    <header>
      <div className="header__menu">
        <button id="menu-toggle" aria-label="メニューを開く">
          <img src="/img/logo_black.png" alt="メニューアイコン" />
        </button>
      </div>

      <nav className="header__nav">
        {/* メインナビゲーション */}
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/index.html" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/works.html" className="nav__link">
              Works
            </a>
          </li>
          <li className="nav__item">
            <a href="/about.html" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="/contact.html" className="nav__link">
              Contact
            </a>
          </li>
        </ul>

        {/* フッター的な追加リンク */}
        <section className="header__info-links" aria-label="追加情報リンク">
          <ul className="info-links__list">
            <li className="info-links__item">
              <a href="/sitemap.html" className="info-links__link">
                サイトマップ
              </a>
            </li>
            <li className="info-links__item">
              <a href="/tools.html" className="info-links__link">
                Webツール
              </a>
            </li>
            <li className="info-links__item">
              <a href="/price.html" className="info-links__link">
                依頼について
              </a>
            </li>
            <li className="info-links__item">
              <a href="/devices.html" className="info-links__link">
                使用デバイス
              </a>
            </li>
            <li className="info-links__item">
              <a href="/blog.html" className="info-links__link">
                ブログ
              </a>
            </li>
            <li className="info-links__item">
              <a href="/news.html" className="info-links__link">
                お知らせ
              </a>
            </li>
            <li className="info-links__item">
              <a href="/privacy_policy.html" className="info-links__link">
                プライバシーポリシー
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}
