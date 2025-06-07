"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="pt-30 flex-1 p-4">
        <ul
          className="
              grid
              gap-1
              grid-cols-1
              sm:grid-cols-2
              sm:px-10
              md:grid-cols-3
              md:px-10

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
