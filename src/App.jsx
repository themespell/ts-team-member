import { useState } from 'react';
import useStore from './store.js';
import './App.css';
import './assets/css/hover.css';
import { useDisclosure } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import Topbar from './editor/Topbar.jsx';
import Sidebar from './editor/Sidebar.jsx';
import DetailsModal from './frontend/components/details/modal.jsx';
import DetailsDrawer from './frontend/components/details/drawer.jsx';
import DetailsPopover from './frontend/components/details/popover.jsx';
import CardLayout from './frontend/components/layouts/card.jsx';
import ProfileCard from './frontend/components/layouts/ProfileCard.jsx';

function App() {
  const { selectedAnimation } = useStore();
  const [theme, setTheme] = useState('Theme One'); // New state for theme selection

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
  const {
    isOpen: isSidebarOpen,
    onOpen: onSidebarOpen,
    onClose: onSidebarClose
  } = useDisclosure();

  return (
    <>
      <Topbar />
      <Sidebar 
      isOpen={isSidebarOpen}
      onClose={onSidebarClose}
      theme={theme}
      setTheme={setTheme}
      />
      <h1 className="text-center text-3xl font-bold mb-8">Team Design 01</h1>
      
      <div className='flex justify-center'>
      <div 
      id="editorPanel"
      onClick={onSidebarOpen}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/6 p-2 border border-transparent hover:border-blue-500 transition duration-300">
        {theme === 'Theme One' && (
          <>
            <CardLayout 
              selectedAnimation={selectedAnimation}
              type="modal"
              onModalOpen={onModalOpen}
              onDrawerOpen={onDrawerOpen}
              onPopoverOpen={onPopoverOpen}
            />
            <CardLayout 
              selectedAnimation={selectedAnimation}
              type="drawer"
              onModalOpen={onModalOpen}
              onDrawerOpen={onDrawerOpen}
              onPopoverOpen={onPopoverOpen}
            />
            <CardLayout 
              selectedAnimation={selectedAnimation}
              type="popover"
              onModalOpen={onModalOpen}
              onDrawerOpen={onDrawerOpen}
              onPopoverOpen={onPopoverOpen}
            />
          </>
        )}
        {theme === 'Theme Two' && (
          <>
            {/* Render a different component or layout for Theme Two */}
            <div className={`${selectedAnimation}__wrapper max-w-sm bg-white rounded-lg shadow-lg overflow-hidden`}>
              <ProfileCard 
                selectedAnimation={selectedAnimation}
                type="modal"
                onModalOpen={onModalOpen}
                onDrawerOpen={onDrawerOpen}
                onPopoverOpen={onPopoverOpen}
              />
            </div>
            <div className={`${selectedAnimation}__wrapper max-w-sm bg-white rounded-lg shadow-lg overflow-hidden`}>
              <ProfileCard 
                selectedAnimation={selectedAnimation}
                type="drawer"
                onModalOpen={onModalOpen}
                onDrawerOpen={onDrawerOpen}
                onPopoverOpen={onPopoverOpen}
              />
            </div>
            <div className={`${selectedAnimation}__wrapper max-w-sm bg-white rounded-lg shadow-lg overflow-hidden`}>
              <ProfileCard 
                selectedAnimation={selectedAnimation}
                type="popover"
                onModalOpen={onModalOpen}
                onDrawerOpen={onDrawerOpen}
                onPopoverOpen={onPopoverOpen}
              />
            </div>
          </>
        )}
      </div>
      </div>

      {isModalOpen && <DetailsModal isOpen={isModalOpen} onClose={onModalClose} />}
      {isDrawerOpen && <DetailsDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />}
      {isPopoverOpen && <DetailsPopover isOpen={isPopoverOpen} onClose={onPopoverClose} />}
    </>
  );
}

export default App;