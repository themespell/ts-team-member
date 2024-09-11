import { useState, useEffect } from 'react';
import useStore from '../store.js';
import { Spin } from 'antd';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Frontend from '../frontend/Frontend.jsx';
import { hideAdminElements } from './utils/utils.js';

function Editor() {
  const { selectedAnimation } = useStore();
  const [theme, setTheme] = useState('Theme One'); // New state for theme selection
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility
  const [isLoading, setIsLoading] = useState(true); // State for loading spinner

  useEffect(() => {
    hideAdminElements();

    // Simulate a loading delay of up to 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50); // 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-700">
        <Spin
        fullscreen 
        tip="Loading Editor"
        size="large" />
      </div>
    );
  }

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