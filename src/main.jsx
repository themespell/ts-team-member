import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CPT from './common/CPT.jsx';
import Editor from './editor/Editor.jsx';
import AdminModal from './admin/Admin.jsx';

// Load Blank Div using jQuery
jQuery(document).ready(function($) {
  var button = $('.page-title-action');

  var newDiv = $('<div></div>', {
      id: 'react-root', // Assign an id to the new div
      class: 'page-title-action-div'
  });

  // Replace the button with the new div
  button.replaceWith(newDiv);

  // Create a new React root for the new div
  const element = document.getElementById('react-root');
  if (element) {
      ReactDOM.createRoot(element).render(<CPT />);
  }
});

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
//   const element = document.querySelector('.page-title-action');
//   if (element) {
//     // const button = document.createElement('button');
//     // button.textContent = 'Click Me';
//     // button.className = 'add-team-button'; // Add your desired classes here
//     element.replaceWith(button);

//     // Create the div
//     const newDiv = document.createElement('div');
//     newDiv.textContent = 'New div content';
//     newDiv.id = 'root';
//     element.replaceWith(newDiv);

//     // button.insertAdjacentElement('afterend', newDiv);

//     // Create a new React root for the new div
//     // const NewRootComponent = () => {
//     //   return (
//     //     <AddModal />
//     //   );
//     // };

//     ReactDOM.createRoot(newDiv).render(<NewRootComponent />);
//   }
// });