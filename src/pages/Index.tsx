
import React from 'react';
import Calculator from '@/components/calculator/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 mb-2 animate-fade-in">
            Client-Server Architecture
          </span>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
            Scientific Calculator
          </h1>
          <p className="text-gray-500 max-w-sm mx-auto">
            A powerful scientific calculator with server-side processing for optimal precision and elegance.
          </p>
        </div>
        
        <div className="mb-8 animate-float">
          <Calculator />
        </div>
        
        <div className="text-xs text-center text-gray-400 mt-8 max-w-xs mx-auto">
          <p>This calculator supports basic operations (+, -, *, /), exponents (^), trigonometric functions (sin, cos, tan), logarithms (log, ln), square root (sqrt), and constants (π, e).</p>
          <p className="mt-2">All calculations are processed server-side.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
