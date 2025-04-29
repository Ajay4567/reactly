import React from "react";

const FiltersSidebar = ({ filters, onFilterChange }) => {
  return (
    <div className="filters-sidebar">
      {Object.entries(filters).map(([title, values]) => (
        <div className="filter-group" key={title}>
          <div className="flex flex-col">
            <h4 className="filter-title text-base font-semibold mb-[10px]">{title}</h4>
            {values.map((value) => (
              <label className="filter-checkbox flex gap-2" key={value}>
                <input
                  className="p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base"
                  type="checkbox"
                  value={value}
                  onChange={(e) => onFilterChange(title, value, e.target.checked)}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FiltersSidebar;
