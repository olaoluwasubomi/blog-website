// app/blog/BlogFilters.tsx
"use client";
import { useState } from "react";

interface BlogFiltersProps {
  categories: string[];
  onFilter: (category: string | null) => void;
}

export default function BlogFilters({ categories, onFilter }: BlogFiltersProps) {
  const [active, setActive] = useState<string | null>(null);

  const handleFilter = (cat: string | null) => {
    setActive(cat);
    onFilter(cat);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mt-6">
      <button
        onClick={() => handleFilter(null)}
        className={`px-3 py-1 rounded-md text-sm transition ${
          active === null
            ? "bg-gray-900 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={`px-3 py-1 rounded-md text-sm transition ${
            active === cat
              ? "bg-gray-900 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
