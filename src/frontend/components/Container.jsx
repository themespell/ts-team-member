import { useEffect, useRef } from 'react';
import '../assets/hover.css';
import '../assets/style.css';
import CardLayout from './layouts/card';

function Container() {
  const editorPanelRef = useRef(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const editorPanel = editorPanelRef.current;
    if (currentPath === '/editor' && editorPanel && editorPanel.classList.contains('tsteam-container')) {
      editorPanel.id = 'editorPanel';
      editorPanel.classList.add('editor-hover');
    }
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div
          ref={editorPanelRef}
          className="tsteam-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/6"
        >
          <CardLayout />
        </div>
      </div>
    </>
  );
}

export default Container;
