import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import productData from "../../data/productData";
import ProductCard from "./ProductCard";
import FiltersSidebar from "./FiltersSidebar";
import "../../assets/styles/Product.css";

// const ProductList = () => {
//     const { category } = useParams(); // Get category from URL
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     useEffect(() => {
//         const filtered = productData.filter((product) => product.category === category);
//         setFilteredProducts(filtered);
//     }, [category]);

//     return (
//         <div>
//             <h2>Products for {category.replace("-", " ")}</h2>
//             <ul>
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map((product) => (
//                         <li key={product.id}>{product.name} - ₹{product.price}</li>
//                     ))
//                 ) : (
//                     <p>No products found</p>
//                 )}
//             </ul>
//         </div>
//     );
// };

const ProductList = ({ products }) => {
  // const { category } = useParams(); // Get category from URL
  const [selectedFilter, setSelectedFilter] = useState(null);

  const { petType, subCategory } = useParams();
  const location = useLocation();
  const category = location.state?.category;
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortOrder, setSortOrder] = useState("price-asc"); // Default sorting by price (ascending)

  // Sorting handler
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  const handleFilterChange = (title, value, checked) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (!updated[title]) updated[title] = [];

      if (checked) {
        updated[title] = [...updated[title], value];
      } else {
        updated[title] = updated[title].filter((v) => v !== value);
      }

      return updated;
    });
  };
  // useEffect(() => {
  //     document.title = `${category ? category.toUpperCase() : "Food Products"} | HULF`;
  // }, []);

  return (
    <div className="product-page flex gap-5 p-5">
      {/* Left Sidebar - Filters */}
      <aside className="filters w-[250px] p-4 bg-[#f8f8f8] rounded-lg shadow-2xl">
        <h2 className="text-lg mb-[10px]">Filters</h2>
        {/* {filters.map((filter, index) => (
                    <label key={index} className="filter-item block mb-2 text-sm">
                        <input className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base mr-[5px]" type="checkbox" value={filter} onChange={() => setSelectedFilter(filter)} />
                        {filter}
                    </label>
                ))} */}

        <FiltersSidebar
          filters={category.filters}
          onFilterChange={handleFilterChange}
        />
      </aside>

      {/* Right Section - Product List */}
      <section className="product-list grid justify-center gap-5 p-5 [grid-template-columns:repeat(auto-fill,_minmax(280px,_1fr))]">
        <h2 className="product-list-title text-2xl font-bold mb-5">
          {category?.name || subCategory.replace("-", " ")}
        </h2>
        {/* Sorting Dropdown */}
        <div className="sorting">
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="sorting-dropdown"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
        {(productData || [])
          .filter((product) =>
            selectedFilter ? product.tags.includes(selectedFilter) : true
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </div>
  );
};

export default ProductList;
