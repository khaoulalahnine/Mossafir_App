import reservation1 from "../../assets/resto1.jpg";
import reservation2 from "../../assets/resto2.jpg";
import reservation3 from "../../assets/resto3.jpg";

const reservationsData = [
  { id: 1, img: reservation1, table: "Table for 2", time: "7:00 PM - 9:00 PM", description: "Cozy corner table with a view." },
  { id: 2, img: reservation2, table: "Table for 4", time: "8:00 PM - 10:00 PM", description: "Perfect for family dinner." },
  { id: 3, img: reservation3, table: "Private Room", time: "6:00 PM - 9:00 PM", description: "Private room for meetings or events." },
];

const ReservationsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 p-6">
      {reservationsData.map((res) => (
        <div key={res.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
          <img src={res.img} alt={res.table} className="w-full h-48 object-cover" />
          <div className="px-4 py-3 flex flex-col flex-grow justify-between">
            <h3 className="text-lg font-semibold">{res.table}</h3>
            <p className="text-gray-500 text-sm mt-1">{res.time}</p>
            <p className="text-gray-700 mt-1">{res.description}</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              Book Table
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReservationsSection;
