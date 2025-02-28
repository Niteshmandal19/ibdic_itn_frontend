import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const irpOptions = [
  { name: "Shipper A", logo: "/path/to/cygnet-logo.png" },
  { name: "Shipper B", logo: "/path/to/ey-logo.png" },
  { name: "Shipper C", logo: "/path/to/nic-logo.png" },
  { name: "Shipper D", logo: "/path/to/iris-logo.png" },
];

const ChooseShipper = () => {
  const [selectedIRP, setSelectedIRP] = useState(null);
  const navigate = useNavigate();

  const handleSelection = (irp) => {
    setSelectedIRP(irp);
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-8">Choose IRP</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {irpOptions.map((irp, index) => (
          <button
            key={index}
            onClick={() => handleSelection(irp.name)}
            className={`flex items-center justify-center border rounded-lg p-4 w-40 h-20 transition-all duration-300 ${
              selectedIRP === irp.name ? "border-blue-600" : "border-gray-300"
            }`}
          >
            <img src={irp.logo} alt={irp.name} className="h-10" />
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/eBL-creation")}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
        >
          Confirm Selection
        </button>
        <button
          onClick={() => navigate("/")}
          className="border border-red-500 text-red-500 px-6 py-2 rounded-md hover:bg-red-500 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ChooseShipper;