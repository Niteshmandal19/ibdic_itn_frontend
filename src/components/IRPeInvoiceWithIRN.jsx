import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const IRPeInvoiceWithIRN = () => {
  const [formData, setFormData] = useState({
    // Initialize form fields with empty values
  });
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">IRP: e-invoice creation with IRN</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Supplier Details Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Supplier Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
              <input 
                type="text" 
                name="invoiceNumber" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Supplier GSTIN</label>
              <input 
                type="text" 
                name="supplierGSTIN" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-populated"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Supplier Place</label>
              <input 
                type="text" 
                name="supplierPlace" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Invoice Date</label>
              <input 
                type="date" 
                name="invoiceDate" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Supplier Legal Name</label>
              <input 
                type="text" 
                name="supplierLegalName" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-populated"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Supplier State Code</label>
              <select 
                name="supplierStateCode" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="01">01 - Jammu & Kashmir</option>
                <option value="02">02 - Himachal Pradesh</option>
                <option value="03">03 - Punjab</option>
                {/* Add other states as needed */}
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Supply Type Code</label>
              <select 
                name="supplyTypeCode" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="B2B">B2B</option>
                <option value="SEZWP">SEZ with payment</option>
                <option value="SEZWOP">SEZ without payment</option>
                <option value="EXPWP">Export with payment</option>
                <option value="EXPWOP">Export without payment</option>
                <option value="DEXP">Deemed Export</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Supplier Address</label>
              <input 
                type="text" 
                name="supplierAddress" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Supplier Pincode</label>
              <input 
                type="text" 
                name="supplierPincode" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        
        {/* Recipient Details Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Recipient Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Recipient GSTIN/URP</label>
              <input 
                type="text" 
                name="recipientGSTIN" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Recipient Country Code</label>
              <select 
                name="recipientCountryCode" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                {/* Add other countries as needed */}
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Recipient Legal Name</label>
              <input 
                type="text" 
                name="recipientLegalName" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2 md:col-span-3">
              <label className="block text-sm font-medium text-gray-700">Recipient Address</label>
              <input 
                type="text" 
                name="recipientAddress" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        
        {/* Item Details Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Item Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Item Description</label>
              <input 
                type="text" 
                name="itemDescription" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Unit Price</label>
              <input 
                type="number" 
                name="unitPrice" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">IGST Amount</label>
              <input 
                type="text" 
                name="igstAmount" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-calculated"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">HSN Code</label>
              <input 
                type="text" 
                name="hsnCode" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Gross Amount</label>
              <input 
                type="text" 
                name="grossAmount" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-calculated"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">CGST Amount</label>
              <input 
                type="text" 
                name="cgstAmount" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-calculated"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input 
                type="number" 
                name="quantity" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Discount Amount</label>
              <input 
                type="number" 
                name="discountAmount" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">SGST/UTGST Amount</label>
              <input 
                type="text" 
                name="sgstAmount" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-calculated"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Unit of Measurement</label>
              <select 
                name="unitOfMeasurement" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              >
                <option value="">Select UOM</option>
                <option value="PCS">PCS - Pieces</option>
                <option value="KGS">KGS - Kilograms</option>
                <option value="MTR">MTR - Meters</option>
                <option value="LTR">LTR - Liters</option>
                {/* Add other units as needed */}
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Taxable Value</label>
              <input 
                type="text" 
                name="taxableValue" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-calculated"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Cess Amount</label>
              <input 
                type="number" 
                name="cessAmount" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        
        {/* IRM Details Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">IRM Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Inward Remittance Number</label>
              <input 
                type="text" 
                name="inwardRemittanceNumber" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Advance Payment Date</label>
              <input 
                type="date" 
                name="advancePaymentDate" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Advance Payment Amount</label>
              <input 
                type="number" 
                name="advancePaymentAmount" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">QR Code</label>
              <input 
                type="text" 
                name="qrCode" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-populated"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Balance Invoice Amount</label>
              <input 
                type="text" 
                name="balanceInvoiceAmount" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-calculated"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Invoice Reference Number (IRN)</label>
              <input 
                type="text" 
                name="invoiceReferenceNumber" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" 
                readOnly
                value="Auto-populated"
              />
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-3">
    <button
      type="button"
      className="w-full md:w-auto px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      onClick={() => navigate("/choose-shipper")}
    >
      Create e-BL
    </button>
          
          <button 
            type="submit" 
            className="w-full md:w-auto px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Finish
          </button>
          
          <button 
            type="button" 
            className="w-full md:w-auto px-6 py-3 bg-white text-red-500 border border-red-500 font-medium rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default IRPeInvoiceWithIRN;