import { useState } from 'react';
import './App.css';
import './assets/css/hover.css';
import { useDisclosure } from '@chakra-ui/react';
import DetailsModal from './frontend/components/details/modal.jsx';
import DetailsDrawer from './frontend/components/details/drawer.jsx';
import DetailsPopover from './frontend/components/details/popover.jsx';

function App() {
  const [selectedAnimation, setSelectedAnimation] = useState('tsh-3d-float');
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose
  } = useDisclosure();
  const {
    isOpen: isPopoverOpen,
    onOpen: onPopoverOpen,
    onClose: onPopoverClose
  } = useDisclosure();

  const handleSelectChange = (event) => {
    setSelectedAnimation(event.target.value);
  };

  const renderProfileCard = (type) => (
    <div className={selectedAnimation}>
      <div className={`${selectedAnimation}__wrapper max-w-sm bg-white rounded-lg shadow-lg overflow-hidden`}>
        
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
        {type === 'modal' && <DetailsModal isOpen={isModalOpen} onClose={onModalClose} />}
        {type === 'drawer' && <DetailsDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />}
        {type === 'popover' && <DetailsPopover isOpen={isPopoverOpen} onClose={onPopoverClose} />}
      </div>
    </div>
  );

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-8">Team Design 01</h1>
      
      <div className="text-center mb-4">
        <select onChange={handleSelectChange} className="p-2 border rounded">
          <option value="tsh-3d-float">3D Float</option>
          <option value="tsh-tilt">Tilt</option>
          <option value="tsh-slide-top">Slide Top</option>
          <option value="tsh-shadow-pop-tr">Shadow Pop</option>
          <option value="tsh-shadow-drop-center">Drop Shadow</option>
          <option value="tsh-shadow-drop-2-tr">Drop Shadow 2</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderProfileCard('modal')}
        {renderProfileCard('drawer')}
        {renderProfileCard('popover')}
      </div>
    </>
  );
}

export default App;