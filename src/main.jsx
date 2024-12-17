import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ConfigProvider } from 'antd';
import globalSettings from './common/utils/globalSettings.js';
import Editor from './editor/Editor.jsx';
import AdminPanel from './admin/Admin.jsx';
import Navigation from './admin/components/Navigation.jsx';

const RootComponent = () => {
  const currentUrl = window.location.href;
  const isEditor = currentUrl.includes(`&path=editor`);

  return (
    <React.StrictMode>
      <ConfigProvider theme={globalSettings}>
        {isEditor ? <Editor /> : <AdminPanel />}
      </ConfigProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('tsteam-admin')).render(
  <RootComponent />
);

// ReactDOM.createRoot(document.getElementById('toplevel_page_tsteam-admin')).render(
//   <Navigation />
// );