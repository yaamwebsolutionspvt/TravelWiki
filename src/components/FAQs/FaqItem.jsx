import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"
      >
        <span>{question}</span>
        <span className="text-sm">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-700 whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
