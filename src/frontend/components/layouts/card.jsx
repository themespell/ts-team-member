// src/components/ProfileCard.jsx
import React from 'react';
import useStore from '../../../store';

const CardLayout = ({ selectedAnimation, type, onModalOpen, onDrawerOpen, onPopoverOpen }) => {
  const { backgroundColor } = useStore();

  const divStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className={selectedAnimation}>
      <div style={divStyle} className={`${selectedAnimation}__wrapper max-w-sm bg-white rounded-lg shadow-lg overflow-hidden`}>
        {/* Image */}
        <div className="relative">
          <img
            className="w-full h-auto rounded-lg"
            src="https://www.fionabruce.co.uk/wp-content/uploads/2024/01/phil-porter.png.webp"
            alt="Phil Porter"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-xl font-bold text-gray-900">Philip Porter</p>
          <p className="text-sm font-medium text-gray-600">
            Managing Partner, Head of Family & Matrimonial Law
          </p>
          <div className="mt-4">
            <a
              className="inline-block bg-orange-200 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full"
              href="/specialised-in/family-law"
              target="_blank"
              rel="noopener noreferrer"
            >
              Family Law
            </a>
          </div>
          {type === 'modal' && (
            <button onClick={onModalOpen} className="mt-4 p-2 bg-black text-white rounded-lg">
              Show Details
            </button>
          )}
          {type === 'drawer' && (
            <button onClick={onDrawerOpen} className="mt-4 p-2 bg-black text-white rounded-lg">
              Show Details Drawer
            </button>
          )}
          {type === 'popover' && (
            <button onClick={onPopoverOpen} className="mt-4 p-2 bg-black text-white rounded-lg">
              Show Details Popover
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;