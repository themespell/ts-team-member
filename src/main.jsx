import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Editor from './editor/Editor.jsx';
import AdminPanel from './admin/Admin.jsx';

ReactDOM.createRoot(document.getElementById('tsteam-admin')).render(
  <AdminPanel />
);

const currentUrl = window.location.href;

// let componentToMount = App;

if (currentUrl.includes(`&path=editor`)) {
  const RootComponent = () => {
    return (
      <React.StrictMode>
        <Editor />
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
    <RootComponent />
  );
}

// if (currentUrl.includes('page=meetingwp-meeting')) {
//     componentToMount = MeetingMeta;
// }


// document.addEventListener('DOMContentLoaded', () => {
//   const element = document.querySelector('#adminmenu .wp-submenu');
//   if (element) {
//     console.log(element);
//     // const button = document.createElement('button');
//     // button.textContent = 'Click Me';
//     // button.className = 'add-team-button'; // Add your desired classes here
//     // element.replaceWith(button);

//     // // Create the div
//     // const newDiv = document.createElement('div');
//     // newDiv.textContent = 'New div content';
//     // newDiv.id = 'root';
//     // element.replaceWith(newDiv);

//     // button.insertAdjacentElement('afterend', newDiv);

//     // const NewRootComponent = () => {
//     //   return (
//     //     <NavMenu />
//     //   );
//     // };

//     // ReactDOM.createRoot(newDiv).render(<NewRootComponent />);
//   }
// });