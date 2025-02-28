import React, { useState } from 'react';

const ShippingBillCreation = () => {
    const [formData, setFormData] = useState({
        remitterName: '',
        remitterBankName: '',
        customerName: '',
        nostroAmount: '',
        nostroRefNumber: '',
        customerAccount: '',
        currency: '',
        valueDate: '',
        buyerToSellerInfo: '',
        remittanceAgainst: '',
        purposeCode: '',
        dealAvailable: '',
        feeAccount: '',
        gstn: '',
        creditTo: '',
        dealId: '',
        issuingBranch: '',
        countryProvidingService: '',
        bank: '',
        creditAccountNumber: '',
        commentsForBanks: '',
        underLyingDocument: null,
        otherDocument: null,
    });

    const [currentSection, setCurrentSection] = useState(0);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-blue-600 py-4 px-6">
                <h1 className="text-white text-2xl font-bold">Shipping Bill Creation</h1>
                {/* <p className="text-blue-100 text-sm">Complete all required fields to process your transaction</p> */}
            </div>



            <form onSubmit={handleSubmit} className="px-6 py-4">

                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">Shipping Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Basic Information */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Number of Shipping Bills
                            </label>
                            <input
                                type="text"
                                name="numberOfShippingBills"
                                placeholder="Enter number"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Record Indicator
                            </label>
                            <input
                                type="text"
                                name="recordIndicator"
                                placeholder="Enter record indicator"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                LEO (Let Export Order) Date
                            </label>
                            <input
                                type="date"
                                name="leoDate"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Number of Invoices
                            </label>
                            <input
                                type="text"
                                name="numberOfInvoices"
                                placeholder="Enter number"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Port Code
                            </label>
                            <input
                                type="text"
                                name="portCode"
                                placeholder="Enter port code"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Customer Number
                            </label>
                            <input
                                type="text"
                                name="customerNumber"
                                placeholder="Enter customer number"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Export Agency
                            </label>
                            <input
                                type="text"
                                name="exportAgency"
                                placeholder="Enter agency"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Shipping Bill Number
                            </label>
                            <input
                                type="text"
                                name="shippingBillNumber"
                                placeholder="Enter bill number"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Form Number
                            </label>
                            <input
                                type="text"
                                name="formNumber"
                                placeholder="Enter form number"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Export Type
                            </label>
                            <input
                                type="text"
                                name="exportType"
                                placeholder="Enter export type"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Shipping Bill Date
                            </label>
                            <input
                                type="date"
                                name="shippingBillDate"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Import Export Code (IEC)
                            </label>
                            <input
                                type="text"
                                name="importExportCode"
                                placeholder="Enter IEC"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                    </div>


                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Product Details</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                AD Code
                            </label>
                            <input
                                type="text"
                                name="adCode"
                                placeholder="Enter AD code"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Invoice Number
                            </label>
                            <input
                                type="text"
                                name="invoiceNumber"
                                placeholder="Enter invoice number"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Freight Currency Code
                            </label>
                            <input
                                type="text"
                                name="freightCurrencyCode"
                                placeholder="Enter currency code"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Country of Destination
                            </label>
                            <input
                                type="text"
                                name="countryOfDestination"
                                placeholder="Enter country"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Invoice Date
                            </label>
                            <input
                                type="date"
                                name="invoiceDate"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Freight Amount
                            </label>
                            <input
                                type="text"
                                name="freightAmount"
                                placeholder="Enter amount"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Data Source
                            </label>
                            <input
                                type="text"
                                name="dataSource"
                                placeholder="Enter data source"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                FOB Currency Code
                            </label>
                            <input
                                type="text"
                                name="fobCurrencyCode"
                                placeholder="Enter FOB currency code"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Insurance Currency Code
                            </label>
                            <input
                                type="text"
                                name="insuranceCurrencyCode"
                                placeholder="Enter currency code"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Invoice Serial Number
                            </label>
                            <input
                                type="text"
                                name="invoiceSerialNumber"
                                placeholder="Enter serial number"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                FOB Amount
                            </label>
                            <input
                                type="text"
                                name="fobAmount"
                                placeholder="Enter amount"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Insurance Amount
                            </label>
                            <input
                                type="text"
                                name="insuranceAmount"
                                placeholder="Enter amount"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                    </div>

                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Payment Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Commission Currency Code
                            </label>
                            <input
                                type="text"
                                name="commissionCurrencyCode"
                                placeholder="Enter currency code"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Deductions Currency Code
                            </label>
                            <input
                                type="text"
                                name="deductionsCurrencyCode"
                                placeholder="Enter currency code"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Commission Amount
                            </label>
                            <input
                                type="text"
                                name="commissionAmount"
                                placeholder="Enter amount"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Deductions Amount
                            </label>
                            <input
                                type="text"
                                name="deductionsAmount"
                                placeholder="Enter amount"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Discount Currency Code
                            </label>
                            <input
                                type="text"
                                name="discountCurrencyCode"
                                placeholder="Enter currency code"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Packaging Currency Code
                            </label>
                            <input
                                type="text"
                                name="packagingCurrencyCode"
                                placeholder="Enter currency code"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Discount Amount
                            </label>
                            <input
                                type="text"
                                name="discountAmount"
                                placeholder="Enter amount"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Packaging Charges Amount
                            </label>
                            <input
                                type="text"
                                name="packagingChargesAmount"
                                placeholder="Enter amount"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="button"
                            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition flex items-center justify-center"
                            onClick={handleSubmit}
                        >
                            Send to Parties
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ShippingBillCreation;