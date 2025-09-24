import React from "react";
import { ChevronDown } from "lucide-react";

const SelectField = ({ id, label, options, description, onChange, value }) => {
  return (
    <div className="mb-5">
      <h2
        className="text-h1 font-bold mb-2"
      >
        {label}
      </h2>

      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <select
        id={id}
        name={id}
        className="w-full py-3 px-5 mt-3 appearance-none rounded-full bg-[var(--select-menu-background)]"
        onChange={onChange}
        value={value}
      >
        {options.map((opt, index) => (
          <option key={`${id}-opt-${index}`} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {description && (
        <details className="pt-2 pb-2 rounded-lg  mt-2 transition-all group">
          <summary
            className="text-h3 cursor-pointer flex items-center justify-between"
          >
            <span>{description.summary}</span>
            <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <p className="mt-5 text-sm text-left">{description.text}</p>
        </details>
      )}
    </div>
  );
};

export default SelectField;