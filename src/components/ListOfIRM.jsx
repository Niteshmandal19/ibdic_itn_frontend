import React from "react";
import { useNavigate } from "react-router-dom";

const ListOfIRM = () => {
  const irmData = [
    { irmNumber: "IRN18092024", amount: 12344, purposeCode: "P020103", buyer: "Kain Agro" },
    { irmNumber: "IRN12012024", amount: 54645, purposeCode: "P020103", buyer: "Kain Agro" },
    { irmNumber: "IRN18092025", amount: 46544, purposeCode: "P020103", buyer: "Kain Agro" },
    { irmNumber: "IRN18092025", amount: 885676, purposeCode: "P020103", buyer: "Kain Agro" }
  ];
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-center mb-4">List of IRM</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">IRM Number</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Purpose Code</th>
            <th className="border p-2">Buyer</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {irmData.map((irm, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{irm.irmNumber}</td>
              <td className="border p-2">{irm.amount}</td>
              <td className="border p-2">{irm.purposeCode}</td>
              <td className="border p-2">{irm.buyer}</td>
              <td className="border p-2 text-blue-500 cursor-pointer">
                <a href="#">Link Invoice</a> 🔗
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 space-x-4">
        <button
        onClick={() => navigate("/choose-IRP")}
        className="bg-green-500 text-white px-4 py-2 rounded">Create Invoice</button>
        <button 
        onClick={() => navigate("/")}
        className="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </div>
  );
};

export default ListOfIRM;
