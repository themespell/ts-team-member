import { useState, useEffect } from 'react';
import useStore from '../store.js';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Frontend from '../frontend/Frontend.jsx';

function Editor() {
  const { selectedAnimation } = useStore();
  const [theme, setTheme] = useState('Theme One'); // New state for theme selection
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  useEffect(() => {
    const handleClick = () => setIsSidebarOpen(true);
    const editorPanel = document.getElementById('editorPanel');
    if (editorPanel) {
      editorPanel.addEventListener('click', handleClick);
    }
    return () => {
      if (editorPanel) {
        editorPanel.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Topbar />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={handleCloseSidebar} 
        theme={theme} 
        setTheme={setTheme} 
      />
      <Frontend />
    </>
  );
}

export default Editor;