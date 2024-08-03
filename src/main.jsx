import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Editor from './editor/Editor.jsx';
import './index.css'
import Frontend from './frontend/Frontend.jsx';

const RootComponent = () => {
  const currentPath = window.location.pathname;

  return (
    <React.StrictMode>
      {currentPath === '/editor' ? <Editor /> : <Frontend />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <RootComponent />
);
