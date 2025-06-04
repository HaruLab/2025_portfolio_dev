export default function Card() {
  return (
    <div className="bg-[var(--card-background)] shadow rounded-2xl overflow-hidden transition hover:shadow-lg">
      <a href="#">
        <div className="aspect-video overflow-hidden rounded-t-2xl">
          <img
            src="https://placehold.jp/1920x1080.png"
            className="w-full h-full object-cover"
            alt="sample"
          />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold">カードタイトル</h3>
          <p className="mt-2 text-sm">
            ここに説明文が入ります。サンプルテキストです。
          </p>
        </div>
      </a>
    </div>
  );
}
