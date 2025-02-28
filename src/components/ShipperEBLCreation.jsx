import React, { useState } from 'react';

const ShipperEBLCreation = () => {
    const [activeTab, setActiveTab] = useState('details');
    const [invoices, setInvoices] = useState([
        { date: '12-Feb', number: '11244A', amount: 1234, buyer: 'Kain Agro' },
        { date: '13-Feb', number: '12244A', amount: 896, buyer: 'Kain Agro' }
    ]);
    const [formData, setFormData] = useState({
        // Initialize form fields with empty values
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    const calculateTotal = () => {
        return invoices.reduce((total, invoice) => total + invoice.amount, 0);
    };

    const addInvoice = () => {
        // This would typically open a modal or add a new row
        console.log('Add invoice');
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
            <h1 className="text-2xl font-bold text-center mb-8">Shipper eBL Creation</h1>

            <form onSubmit={handleSubmit}>
                {/* Details Tab */}
                {activeTab === 'details' && (
                    <div>
                        {/* Shipping Details Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold border-b pb-2 mb-4">Shipping Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Shipper Name</label>
                                    <input
                                        type="text"
                                        name="shipperName"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Consignee Name</label>
                                    <input
                                        type="text"
                                        name="consigneeName"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Notify Party Name</label>
                                    <input
                                        type="text"
                                        name="notifyPartyName"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Shipper Address</label>
                                    <input
                                        type="text"
                                        name="shipperAddress"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Consignee Address</label>
                                    <input
                                        type="text"
                                        name="consigneeAddress"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Notify Party Address</label>
                                    <input
                                        type="text"
                                        name="notifyPartyAddress"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Port of Loading</label>
                                    <input
                                        type="text"
                                        name="portOfLoading"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Port of Discharge</label>
                                    <input
                                        type="text"
                                        name="portOfDischarge"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Place of Delivery</label>
                                    <input
                                        type="text"
                                        name="placeOfDelivery"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Good Details Section */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold border-b pb-2 mb-4">Good Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Description of Goods</label>
                                    <input
                                        type="text"
                                        name="goodsDescription"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Gross Weight</label>
                                    <input
                                        type="number"
                                        name="grossWeight"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Date of Issue</label>
                                    <input
                                        type="date"
                                        name="dateOfIssue"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Number of Packages</label>
                                    <input
                                        type="number"
                                        name="numberOfPackages"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Measurement</label>
                                    <input
                                        type="number"
                                        name="measurement"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Package Type</label>
                                    <select
                                        name="packageType"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Package Type</option>
                                        <option value="Pallet">Pallet</option>
                                        <option value="Container">Container</option>
                                        <option value="Box">Box</option>
                                        <option value="Carton">Carton</option>
                                        <option value="Bag">Bag</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Invoice Details Table */}
                        <div className="mb-8 overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Invoice Date</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Invoice Number</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Buyer Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map((invoice, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-2">{invoice.date}</td>
                                            <td className="border border-gray-300 px-4 py-2">{invoice.number}</td>
                                            <td className="border border-gray-300 px-4 py-2">${invoice.amount}</td>
                                            <td className="border border-gray-300 px-4 py-2">{invoice.buyer}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Total</td>
                                        <td className="border border-gray-300 px-4 py-2"></td>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">${calculateTotal()}</td>
                                        <td className="border border-gray-300 px-4 py-2"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex justify-end mt-2">
                                <button
                                    type="button"
                                    onClick={addInvoice}
                                    className="text-2xl font-bold text-green-500"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Others Section */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold border-b pb-2 mb-4">Others</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Bill of Lading Number</label>
                            <input
                                type="text"
                                name="billOfLadingNumber"
                                placeholder="Fetch/Input"
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Vessel Name</label>
                            <input
                                type="text"
                                name="vesselName"
                                placeholder="Vessel Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Shipping Instructions</label>
                            <textarea
                                name="shippingInstructions"
                                placeholder="Provide Shipping Instructions"
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Freight Charges</label>
                            <select
                                name="freightCharges"
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                onChange={handleChange}
                            >
                                <option value="">Dropdown Selection</option>
                                <option value="Paid">Paid</option>
                                <option value="Unpaid">Unpaid</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Voyage Number</label>
                            <input
                                type="text"
                                name="voyageNumber"
                                placeholder="Voyage Number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Carrier Name</label>
                            <input
                                type="text"
                                name="carrierName"
                                placeholder="Carrier Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">ETA (Estimated Time of Arrival)</label>
                            <input
                                type="date"
                                name="eta"
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>




                {/* Action Buttons */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button
                        type="submit"
                        className="px-6 py-3 w-48 bg-green-500 text-white font-medium rounded-sm hover:bg-green-600 focus:outline-none"
                    >
                        {activeTab === 'details' ? 'Request eBL' : 'Send to Shipper'}
                    </button>

                    <button
                        type="button"
                        className="px-6 py-3 w-48 bg-white text-red-500 border border-red-500 font-medium rounded-sm hover:bg-red-50 focus:outline-none"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ShipperEBLCreation;