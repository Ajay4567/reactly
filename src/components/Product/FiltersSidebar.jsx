import React from "react";

const FiltersSidebar = ({ filters, onFilterChange }) => {
    return (
        <div className="filters-sidebar">
            {Object.entries(filters).map(([title, values]) => (
                <div className="filter-group" key={title}>
                    <h4 className="filter-title">{title}</h4>
                    {values.map((value) => (
                        <label className="filter-checkbox" key={value}>
                            <input
                                type="checkbox"
                                value={value}
                                onChange={(e) => onFilterChange(title, value, e.target.checked)}
                            />
                            {value}
                        </label>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FiltersSidebar;
