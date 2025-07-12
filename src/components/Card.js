import Link from "next/link";
import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Card({ imgSrc, title, description, href }) {
  const CardContent = (
    <>
      <div className="aspect-video overflow-hidden">
        <Image src={imgSrc} width={500} height={300} className="w-full h-full object-cover" alt={title} />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full text-black p-3
                   opacity-0 group-hover:opacity-100 active:opacity-100
                   transition-opacity duration-300"
      >
        <h3
          className="font-semibold"
          style={{ fontSize: "var(--font-size-h3)" }}
        >
          {title}
        </h3>
        {/* <p className="mt-1" style={{ fontSize: "var(--font-size-p)" }}>
          {description}
        </p> */}
      </div>
    </>
  );

  return (
    <div className="bg-[var(--card-background)] rounded-sm overflow-hidden relative">
      {href ? (
        <Link href={href} className="group block relative">
          {CardContent}
        </Link>
      ) : (
        <div className="group block relative cursor-default">{CardContent}</div>
      )}
    </div>
  );
}
