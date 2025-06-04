import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <p>これは本文エリアです！</p>
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
      <Footer />
    </div>
  );
}
