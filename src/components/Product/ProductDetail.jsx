import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Common/Footer";
import ProductInformation from "./ProductInformation";

const ProductDetail = ({ products }) => {
  const [mainImage, setMainImage] = useState(products.image);
  const thumbnails = [
    "/images/cat.jpg",
    "/images/dog.jpg",
    "/images/cat.jpg",
    "/images/dog.jpg",
    "/images/cat.jpg",
    "/images/dog.jpg",
    "/images/cat.jpg",
    "/images/dog.jpg"
  ];
  useEffect(() => {
    if (!mainImage && (products.image || thumbnails[0])) {
      setMainImage(products.image || thumbnails[0]);
    }
  }, [products]);

  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <>
      <div className="px-4 md:px-[62px] my-10">
        <div className="product-details flex flex-wrap -mx-3">
          <div className="w-full lg:w-7/12 px-3">
            <div className="flex flex-col-reverse md:flex-row justify-between gap-3 overflow-hidden">
              {/* Thumbnail images */}
              <div className="w-full md:w-2/12 md:h-[625px] flex gap-3 flex-row md:flex-col justify-start md:justify-between overflow-x-auto md:overflow-y-auto">
                {thumbnails.map((src, index) => (
                  <div className="min-w-[80px] sm:min-w-[100px] md:w-full" key={index}>
                    <img
                      src={src}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setMainImage(src)}
                      className={`cursor-pointer w-full h-[80px] sm:h-[145px] bg-[#eee] rounded-md border-2
            ${mainImage === src ? "border-green-500" : "border-red-500"}
            hover:opacity-80`}
                    />
                  </div>
                ))}
              </div>

              {/* Main image display */}
              <div className="w-full md:w-10/12">
                <img
                  src={mainImage}
                  alt={products.name}
                  className="w-full h-[300px] sm:h-[625px] bg-[#eee] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-3 flex flex-col justify-between">
            <div className="mt-5 lg:mt-0">
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-[#ff6d1f] font-bold">Hearty</h3>
                <button>
                  <svg className="w-7 h-7" width="50px" height="50px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" /></svg>
                </button>
              </div>
              <h1 className="text-xl sm:text-[28px] font-bold mt-2">{product.name}</h1>
              <div className="flex gap-3 mt-4">
                <span className="bg-gray-300 text-black px-2 py-1 rounded-sm font-semibold">High Protien</span>
                <span className="bg-gray-300 text-black px-2 py-1 rounded-sm font-semibold">High Protien</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <span className="border border-black bg-gray-100 px-2 py-1 rounded-md">250 g</span>
                <span className="border border-black bg-gray-100 px-2 py-1 rounded-md">2 kg</span>
                <span className="border border-black bg-gray-100 px-2 py-1 rounded-md">5 kg</span>
                <span className="border border-black bg-gray-100 px-2 py-1 rounded-md">10 kg</span>
              </div>
            </div>
            <div className="border-y-2 mt-10 py-3 flex justify-between items-center">
              <div className="">
                <p className="price text-2xl text-[#424242] font-bold">MRP: ₹{product.price}</p>
                <p className="text-[#5397e2] text-sm">incl. of all taxes</p>
              </div>
              <button className="text-xl bg-[#ff6d1f] text-white px-10 py-2 rounded-md font-semibold">ADD</button>
            </div>
            <div className="bg-[#f3f5f9] p-5 rounded-md mt-8">
              <h3 className="text-base text-[#121212] font-bold">Delivery & Service Information</h3>
              <div className="bg-white border border-black rounded-md flex justify-between items-center py-1 ps-3 pe-1 mt-5">
                <input className="outline-none border-hidden placeholder:text-black w-full" type="number" placeholder="110001" />
                <button className="text-base bg-[#ff6d1f] text-white px-4 sm:px-10 py-2 rounded-md font-semibold capitalize">check</button>
              </div>
              <p className="text-[#151515] text-sm mt-5">Expected delivery date - <span className="font-semibold">Fri Apr 25 2025</span></p>
              <p className="text-[#151515] text-sm mt-3">No Exchange & Returns</p>
              <p className="text-[#151515] text-sm mt-3">Enjoy Free Delivery above  <span className="font-semibold">₹699</span></p>
            </div>
            {/* ⭐ Display Rating */}
            {/* <p className="rating text-orange-300 text-lg my-1 mx-0">
              {renderStars(product.rating)}
            </p>
            <p>{product.description}</p> */}
          </div>
        </div>
      </div>
      <ProductInformation />
      <Footer />
    </>

  );
};

export default ProductDetail;
