import React from "react";

const SelectField = ({ id, label, options, description, onChange, value }) => {
  return (
    <div className="mb-5">
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontSize: "var(--font-size-h1)" }}
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
            className="cursor-pointer flex items-center justify-between"
            style={{ fontSize: "var(--font-size-h3)" }}
          >
            <span>{description.summary}</span>
            <svg
              className="ml-2 w-4 h-10 transition-transform duration-300 group-open:rotate-180"
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
          <p className="mt-5 text-sm text-left">{description.text}</p>
        </details>
      )}
    </div>
  );
};

export default SelectField;