import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Header />

      {/* メニューとカードを横並びにする部分 */}
      <div className="flex flex-col md:flex-row">
        {/* ⬇ ここを修正：PCのみ表示、幅も調整（例：w-60） */}
        <Menu className="hidden md:block md:w-30" />

        <main className="flex-1 p-4">
          <ul
            className="
              grid
              gap-4
              grid-cols-1
              sm:grid-cols-2
              sm:px-20
              md:grid-cols-3
              md:px-20

              list-none
              p-0
              m-0
            "
          >
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
          </ul>
        </main>
      </div>

      <Footer />
    </div>
  );
}
