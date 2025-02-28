import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Building, Ship, Building2, User } from 'lucide-react';

const ExporterHome = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Disposal Instructions',
      description: 'Manage your export documentation and transactions',
      icon: <User className="w-12 h-12 text-blue-600" />,
      path: '/exporter/disposal-instruction'
    },
    {
      title: 'Create Invoice',
      description: 'Handle letters of credit and financial transactions',
      icon: <Building className="w-12 h-12 text-green-600" />,
      path: '/exporter/create-invoice'
    },
    {
      title: 'eBL Generation',
      description: 'Track and manage shipping logistics',
      icon: <Ship className="w-12 h-12 text-purple-600" />,
      path: '/exporter/eBL-generation'
    },
    {
      title: 'eBRC Generation',
      description: 'Process customs documentation and clearance',
      icon: <Building2 className="w-12 h-12 text-red-600" />,
      path: '/exporter/eBRC-generation'
    },
    {
        title: 'eBRC Download',
        description: 'Process customs documentation and clearance',
        icon: <Building2 className="w-12 h-12 text-red-600" />,
        path: '/exporter/eBRC-download'
      },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Welcome to IBDIC
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16">
          Unified Platform for Export Transactions
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="mb-6 flex justify-center">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  {card.description}
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => navigate(card.path)}
                    className="group-hover:bg-blue-600 bg-blue-500 text-white rounded-full p-3 transition-colors duration-300"
                  >
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExporterHome;