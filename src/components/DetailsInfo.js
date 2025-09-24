import React from "react";
import { ChevronDown } from "lucide-react";

const DetailsInfo = ({ summary, children }) => {
  return (
    <details
      className="border-t last:border-b pt-5 pb-5 transition-all group"
      style={{ borderColor: "var(--border-color)" }}
    >
      <summary
        className="text-h2 cursor-pointer flex items-center justify-between font-semibold"
      >
        <span>{summary}</span>
        <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="mt-5  text-sm text-left">{children}</div>
    </details>
  );
};

export default DetailsInfo;