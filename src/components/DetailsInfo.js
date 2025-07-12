import React from "react";

const DetailsInfo = ({ summary, children }) => {
  return (
    <details
      className="border-t last:border-b pt-5 pb-5 transition-all"
      style={{ borderColor: "var(--border-color)" }}
    >
      <summary
        className="text-md cursor-pointer flex items-center justify-between font-semibold"
        style={{ fontSize: "var(--font-size-h2)" }}
      >
        <span>{summary}</span>
        <svg
          className="ml-2 w-4 h-4 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="mt-5  text-sm text-left">{children}</div>
    </details>
  );
};

export default DetailsInfo;