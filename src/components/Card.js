export default function Card() {
  return (
    <div className="bg-[var(--card-background)] rounded-sm overflow-hidden relative group">
      <a href="#">
        <div className="aspect-video overflow-hidden">
          <img
            src="https://placehold.jp/1920x1080.png"
            className="w-full h-full object-cover"
            alt="sample"
          />
        </div>
        <div
          className="absolute bottom-0 left-0 w-full text-[var(--foreground)] p-3
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
        >
          <h3
            className="font-semibold"
            style={{ fontSize: "var(--font-size-h3)" }}
          >
            カードタイトル
          </h3>
          <p className="mt-2" style={{ fontSize: "var(--font-size-p)" }}>
            ここに説明文が入ります。サンプルテキストです。
          </p>
        </div>
      </a>
    </div>
  );
}
