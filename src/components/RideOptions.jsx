import React, { useState } from "react";

const RIDE_OPTIONS = [
  {
    id: "uberx",
    title: "UberX",
    desc: "Affordable, everyday rides",
    rate: 23,
    img: "https://img.icons8.com/ios-filled/50/000000/car--v1.png",
  },
  {
    id: "bike",
    title: "UberMoto",
    desc: "Quick rides on two wheels",
    rate: 13,
    img: "https://img.icons8.com/ios-filled/50/000000/motorcycle.png",
  },
  {
    id: "auto",
    title: "UberAuto",
    desc: "Budget-friendly auto rides",
    rate: 17,
    img: "https://img.icons8.com/ios-filled/50/000000/auto-rickshaw.png",
  },
];

function RideOptions({ distanceKm = 5, onSelect }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="bg-white shadow-md rounded-lg mt-6 p-4 space-y-6">
      <h3 className="text-xl font-bold mb-3">Choose your ride</h3>

      {RIDE_OPTIONS.map((option) => {
        const isSelected = option.id === selectedId;
        const totalPrice = (option.rate * distanceKm).toFixed(2);

        return (
          <div
            key={option.id}
            onClick={() => {
              setSelectedId(option.id);
              onSelect({ ...option, totalPrice });
            }}
            className={`flex items-center justify-between border p-3 rounded-md cursor-pointer transition ${
              isSelected ? "border-black bg-gray-100" : "border-gray-200"
            }`}
          >
            <div className="flex items-center space-x-3">
              <img src={option.img} className="w-10 h-10" alt={option.title} />
              <div>
                <h4 className="font-semibold text-lg">{option.title}</h4>
                <p className="text-gray-500 text-sm">{option.desc}</p>
                <p className="text-sm text-gray-600 mt-1">
                  ₹{option.rate} per km
                </p>
              </div>
            </div>
            <span className="font-bold text-gray-800">₹{totalPrice}</span>
          </div>
        );
      })}
    </div>
  );
}

export default RideOptions;
