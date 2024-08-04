import { useEffect, useRef } from 'react';
import '../assets/hover.css';
import '../assets/style.css';
import CardLayout from './layouts/card';

function Container() {
  const editorPanelRef = useRef(null);
  const editorContainerRef = useRef(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const editorPanel = editorPanelRef.current;
    const editorContainer = editorContainerRef.current;
    if (currentPath === '/editor' && editorPanel && editorPanel.classList.contains('tsteam-container')) {
      editorPanel.id = 'editorPanel';
      editorPanel.classList.add('editor-hover');
      editorContainer.classList.add('editor-container');
    }
  }, []);

  return (
    <>
      <div 
      ref={editorContainerRef}
      className="">
        <div
          ref={editorPanelRef}
          className="tsteam-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/6"
        >
          <CardLayout />
          <CardLayout />
        </div>
      </div>
    </>
  );
}

export default Container;
