
import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeypad from './CalculatorKeypad';
import { useCalculator } from './useCalculator';

const Calculator: React.FC = () => {
  const { displayValue, expression, isCalculating, handleButtonClick } = useCalculator();

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-calculator-bg backdrop-blur-md rounded-3xl p-5 shadow-calculator animate-scale-in">
        <CalculatorDisplay 
          value={displayValue} 
          expression={expression} 
          className="mb-4" 
        />
        
        <CalculatorKeypad 
          onButtonClick={handleButtonClick}
          isCalculating={isCalculating}
        />
      </div>
    </div>
  );
};

export default Calculator;
