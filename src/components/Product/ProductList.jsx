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

  const [filterSideBar, setFilterSideBar] = useState(false)
  const handleFilterSideBar = () => {
    if (window.innerWidth < 768) {
      setFilterSideBar((prev) => !prev);
    }
  };

  return (
    <div className="product-page md:flex gap-5 md:p-5">
      {/* Left Sidebar - Filters */}
      <div>
        <h2 onClick={handleFilterSideBar} className="text-lg mb-[10px] border-b-2 pb-2 px-4 font-bold text-[24px]">Filters</h2>

        <aside className={`filters w-[250px] bg-[#f8f8f8] rounded-lg shadow-2xl
  ${filterSideBar ? "block w-full" : "hidden"} 
  md:block 
  absolute md:static top-0 left-0 z-50`}>
          <button onClick={handleFilterSideBar} className="flex justify-end w-full p-4 md:hidden text-black">✖</button>
          {/* {filters.map((filter, index) => (
                      <label key={index} className="filter-item block mb-2 text-sm">
                          <input className="w-full p-[10px] my-[10px] border border-solid border-[#ddd] rounded-lg text-base mr-[5px]" type="checkbox" value={filter} onChange={() => setSelectedFilter(filter)} />
                          {filter}
                      </label>
                  ))} */}
          <div className="p-4">
            <FiltersSidebar
              filters={category.filters}
              onFilterChange={handleFilterChange}
            />
          </div>
        </aside>
      </div>

      {/* Right Section - Product List */}
      <section className="product-list px-4 md:px-5 pb-5 w-full">
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
        <div className="flex flex-wrap w-full mt-3">
          {(productData || [])
            .filter((product) =>
              selectedFilter ? product.tags.includes(selectedFilter) : true
            )
            .map((product) => (
              <div key={product.id} className="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 sm:px-2 md:px-3 mb-5">
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
