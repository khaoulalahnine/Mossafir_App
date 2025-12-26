import product1 from "../../assets/artisan1.jpg";
import product2 from "../../assets/artisan2.jpg";
import product3 from "../../assets/artisan3.jpg";
import product4 from "../../assets/artisan4.jpg";

const productsData = [
  {
    id: 1,
    img: product1,
    title: "Handmade Vase",
    price: "120 MAD",
    info: "Made with traditional Safi pottery techniques.",
  },
  {
    id: 2,
    img: product2,
    title: "Moroccan Carpet",
    price: "800 MAD",
    info: "Handwoven in Marrakech with natural dyes.",
  },
  {
    id: 3,
    img: product3,
    title: "Leather Bag",
    price: "450 MAD",
    info: "Crafted in Fez using traditional leatherwork.",
  },
  {
    id: 4,
    img: product4,
    title: "Ceramic Plate",
    price: "90 MAD",
    info: "Decorative handmade ceramic plate.",
  },
];

const ProductsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 p-6">
      {productsData.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
        >
          {/* Product Image */}
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-48 object-cover"
          />

          {/* Info */}
          <div className="px-4 py-3 flex flex-col flex-grow justify-between">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700 mt-1">{product.price}</p>
            <p className="text-gray-500 text-sm mt-1">{product.info}</p>

            {/* Order button */}
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;
