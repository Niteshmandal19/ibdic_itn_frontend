import React, { useState } from 'react';

const IRMSettlement = () => {
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
                <h1 className="text-white text-2xl font-bold">IRM Settlement</h1>
                {/* <p className="text-blue-100 text-sm">Complete all required fields to process your transaction</p> */}
            </div>
            
            {/* Progress indicator */}
            <div className="bg-gray-100 px-6 py-2">
                <div className="flex items-center">
                    <div className={`flex items-center justify-center h-8 w-8 rounded-full ${currentSection === 0 ? 'bg-blue-600 text-white' : 'bg-gray-300'} mr-2`}>1</div>
                    <div className={`h-1 w-8 ${currentSection === 1 ? 'bg-blue-600' : 'bg-gray-300'} mx-1`}></div>
                    <div className={`flex items-center justify-center h-8 w-8 rounded-full ${currentSection === 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'} ml-2`}>2</div>
                    <div className="ml-4 text-sm font-medium text-gray-700">
                        {currentSection === 0 ? 'Transaction Details' : 'Document Upload'}
                    </div>
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="px-6 py-4">
                {currentSection === 0 ? (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">Party Details</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Basic Information */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Remitter Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="remitterName"
                                        required
                                        placeholder="Enter remitter name"
                                        value={formData.remitterName}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Remitter Bank Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="remitterBankName"
                                        required
                                        placeholder="Enter remitter bank name"
                                        value={formData.remitterBankName}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Customer Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="customerName"
                                        required
                                        placeholder="Enter customer name"
                                        value={formData.customerName}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                </div>
                            </div>

                            {/* Financial Details */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nostro Amount <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="nostroAmount"
                                        required
                                        placeholder="Enter amount"
                                        value={formData.nostroAmount}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nostro Reference Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="nostroRefNumber"
                                        required
                                        placeholder="Enter reference number"
                                        value={formData.nostroRefNumber}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Customer Account <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="customerAccount"
                                        required
                                        placeholder="Enter account number"
                                        value={formData.customerAccount}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Currency <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="currency"
                                    required
                                    value={formData.currency}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                                >
                                    <option value="">Select currency</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="INR">INR</option>
                                    <option value="JPY">JPY</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Value Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="valueDate"
                                    required
                                    value={formData.valueDate}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Buyer to Seller Info <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="buyerToSellerInfo"
                                    required
                                    placeholder="Enter info"
                                    value={formData.buyerToSellerInfo}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>
                        </div>

                        <h3 className="text-lg font-medium text-gray-800 pt-2 pb-2 border-b border-gray-200">Disposal Instructions</h3>
                        

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Remittance Against <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="remittanceAgainst"
                                    required
                                    placeholder="Enter details"
                                    value={formData.remittanceAgainst}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Purpose Code <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="purposeCode"
                                    required
                                    placeholder="Enter purpose code"
                                    value={formData.purposeCode}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Deal Available
                                </label>
                                <select
                                    name="dealAvailable"
                                    value={formData.dealAvailable}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                                >
                                    <option value="">Select option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Fee Account
                                </label>
                                <input
                                    type="text"
                                    name="feeAccount"
                                    placeholder="Enter fee account"
                                    value={formData.feeAccount}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    GSTN
                                </label>
                                <input
                                    type="text"
                                    name="gstn"
                                    placeholder="Enter GSTN"
                                    value={formData.gstn}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Credit To
                                </label>
                                <input
                                    type="text"
                                    name="creditTo"
                                    placeholder="Enter credit details"
                                    value={formData.creditTo}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Deal ID
                                </label>
                                <input
                                    type="text"
                                    name="dealId"
                                    placeholder="Enter deal ID"
                                    value={formData.dealId}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Issuing Branch
                                </label>
                                <input
                                    type="text"
                                    name="issuingBranch"
                                    placeholder="Enter branch details"
                                    value={formData.issuingBranch}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Service Country
                                </label>
                                <input
                                    type="text"
                                    name="countryProvidingService"
                                    placeholder="Enter country"
                                    value={formData.countryProvidingService}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Bank
                                </label>
                                <input
                                    type="text"
                                    name="bank"
                                    placeholder="Enter bank name"
                                    value={formData.bank}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Credit Account Number
                                </label>
                                <input
                                    type="text"
                                    name="creditAccountNumber"
                                    placeholder="Enter account number"
                                    value={formData.creditAccountNumber}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Comments for Banks
                            </label>
                            <textarea
                                name="commentsForBanks"
                                placeholder="Enter any additional comments or instructions"
                                value={formData.commentsForBanks}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition h-24 resize-none"
                            />
                        </div>

                        <div className="pt-4">
                            <button 
                                type="button" 
                                className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition flex items-center justify-center"
                                onClick={() => setCurrentSection(1)}
                            >
                                Continue to Document Upload
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">Document Upload</h2>
                        
                        <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-6">
                            <p className="text-sm text-blue-700">Please upload all required documents to process your remittance request.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                                <svg className="h-12 w-12 text-gray-400 mb-2" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Underlying Document <span className="text-red-500">*</span>
                                </label>
                                <p className="text-xs text-gray-500 mb-4">Invoice, purchase order, or contract</p>
                                <input
                                    type="file"
                                    name="underLyingDocument"
                                    onChange={handleChange}
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                            
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                                <svg className="h-12 w-12 text-gray-400 mb-2" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Supporting Document
                                </label>
                                <p className="text-xs text-gray-500 mb-4">Any additional documentation</p>
                                <input
                                    type="file"
                                    name="otherDocument"
                                    onChange={handleChange}
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row justify-between gap-4 pt-4">
                            <button 
                                type="button" 
                                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md transition flex items-center justify-center"
                                onClick={() => setCurrentSection(0)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                Back to Transaction Details
                            </button>
                            <button 
                                type="submit" 
                                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow transition flex items-center justify-center"
                            >
                                Submit
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default IRMSettlement;