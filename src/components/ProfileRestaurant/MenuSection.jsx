import dish1 from "../../assets/resto1.jpg";
import dish2 from "../../assets/resto2.jpg";
import dish3 from "../../assets/resto3.jpg";

const menuData = [
  { id: 1, img: dish1, name: "Tagine Chicken", price: "120 MAD", description: "Traditional Moroccan chicken tagine with olives." },
  { id: 2, img: dish2, name: "Couscous", price: "90 MAD", description: "Steamed couscous with vegetables and lamb." },
  { id: 3, img: dish3, name: "Pastilla", price: "150 MAD", description: "Sweet and savory pigeon pastilla with almonds." },
];

const MenuSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 p-6">
      {menuData.map((dish) => (
        <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
          <img src={dish.img} alt={dish.name} className="w-full h-48 object-cover" />
          <div className="px-4 py-3 flex flex-col flex-grow justify-between">
            <h3 className="text-lg font-semibold">{dish.name}</h3>
            <p className="text-gray-700 mt-1">{dish.price}</p>
            <p className="text-gray-500 text-sm mt-1">{dish.description}</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSection;
