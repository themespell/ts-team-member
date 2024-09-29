import { useState, useEffect } from 'react';
import useStore from '../store.js';
import { Spin } from 'antd';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Frontend from '../frontend/Frontend.jsx';
import { hideAdminElements } from './utils/utils.js';
import './components/assets/editorStyle.css';

import editorStore from './states/editorStore.js';

function Editor() {
  const { layout } = editorStore();

  const { selectedAnimation } = useStore();
  const [theme, setTheme] = useState('Theme One');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    hideAdminElements();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10); // 2 seconds

    return () => clearTimeout(timer);
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
      <div className='editor-hover editor-container'>
        <Frontend layout={layout} />
        <Frontend layout={layout} />
        <Frontend layout={layout} />
      </div>
    </>
  );
}

export default Editor;