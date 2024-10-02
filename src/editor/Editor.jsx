import { useState, useEffect } from 'react';
import useStore from '../store.js';
import { Spin } from 'antd';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Frontend from '../frontend/Frontend.jsx';
import { hideAdminElements } from './utils/utils.js';
import './components/assets/editorStyle.css';
import { fetchData } from '../common/services/fetchData.js';

import editorStore from './states/editorStore.js';

function Editor() {
  const { layout } = editorStore();

  const { selectedAnimation } = useStore();
  const [theme, setTheme] = useState('Theme One');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    hideAdminElements();

    // Simulate loader until the post data is fetched
    setIsLoading(true);

    const queryParams = new URLSearchParams(window.location.search);
    const postIdFromUrl = queryParams.get('post_id');
    const postTypeFromUrl = queryParams.get('type');
  
    if (postIdFromUrl) {
      fetchData(`tsteam/${postTypeFromUrl}/fetch/single`, (response) => {
        console.log(response.data);
        if (response && response.success) {
          setPostData(response.data.meta_data);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        } else {
          console.error("Error fetching post data:", response);
          setIsLoading(false); // Stop loader even if data fetch fails
        }
      }, { post_id: postIdFromUrl });
  
    } else {
      console.error("No post_id found in the URL");
      setIsLoading(false); // Stop loader if no post ID found
    }
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

  // Show loader until postData is fetched
  if (isLoading || postData === null) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-700">
        <Spin
          fullscreen 
          tip="Loading Editor"
          size="large" 
        />
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
        <Frontend 
          layout={layout}
          data={postData}
        />
      </div>
    </>
  );
}

export default Editor;