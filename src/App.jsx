import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import ExporterHome from './components/Exporter/ExporterHome';
import BankHome from './components/Bank/BankHome';
import ShipperHome from './components/Shipper/ShipperHome';
import CustomsHome from './components/Customs/CustomsHome';
import IRMSettlement from './components/IRMSettlement';
import IRPeInvoiceWithIRN from './components/IRPeInvoiceWithIRN';
import EBLCreation from './components/EBLcreation';
import ShipperEBLCreation from './components/ShipperEBLCreation';
import ShippingBillCreation from './components/ShippingBillCreation';
import Header from './components/Header';
import ListOfIRM from './components/ListOfIRM';
import ChooseIRP from './components/ChooseIRP';
import ChooseShipper from './components/ChooseShipper';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        //Exporter Routes
        <Route path="/exporter" element={<ExporterHome />} />
        <Route path="/exporter/disposal-instruction" element={<IRMSettlement />} />
        <Route path="/exporter/create-invoice" element={<ListOfIRM />} />
        <Route path="/eBL-generation" element={<IRPeInvoiceWithIRN/>} />
        <Route path="/choose-IRP" element={<ChooseIRP />} />
        <Route path="/choose-shipper" element={<ChooseShipper />} />

        <Route path="/ebl-creation" element={<EBLCreation />} />


        <Route path="/shipper/ebl-creation" element={<ShipperEBLCreation />} />

        <Route path="/customs/shipping-bill-creation" element={<ShippingBillCreation />} />


        <Route path="/exporter/eBRC-generation" element={<ExporterHome />} />
        <Route path="/exporter/eBRC-download" element={<ExporterHome />} />
        
        <Route path="/bank" element={<BankHome />} />
        <Route path="/shipper" element={<ShipperHome />} />
        <Route path="/customs" element={<CustomsHome />} />
        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;