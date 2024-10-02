import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ConfigProvider } from 'antd';
import globalSettings from './common/utils/globalSettings.js';
import Editor from './editor/Editor.jsx';
import AdminPanel from './admin/Admin.jsx';

ReactDOM.createRoot(document.getElementById('tsteam-admin')).render(
  <ConfigProvider theme={globalSettings}>
    <AdminPanel />
  </ConfigProvider>
);

const currentUrl = window.location.href;

if (currentUrl.includes(`&path=editor`)) {
  const RootComponent = () => {
    return (
      <React.StrictMode>
        <ConfigProvider theme={globalSettings}>
            <Editor />
        </ConfigProvider>
      </React.StrictMode>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('wpwrap')).render(
    <RootComponent />
  );
}


if (currentUrl.includes(`&path=admin`)) {
  const RootComponent = () => {
    return (
      <React.StrictMode>
        <AdminModal />
      </React.StrictMode>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('wpbody')).render(
    <ConfigProvider theme={globalSettings}>
        <RootComponent />
    </ConfigProvider>
  );
}