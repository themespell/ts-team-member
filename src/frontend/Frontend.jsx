import { useEffect, useRef } from 'react';
import './assets/hover.css';
import './assets/style.css';
import Layout from './components/Layout.jsx';

function Frontend({ layout }) {
  return (
    <>
        <div className="tsteam-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-3/6">
          <Layout
              layoutType={layout}
              imageUrl="https://qodeinteractive.com/qi-addons-for-elementor/wp-content/uploads/2021/01/team-img-28.jpg"
              title="John Doe"
              subtitle="Managing Director"
              description="Experienced leader in managing teams across various industries."
              socialIcons={["<i class='fab fa-facebook'></i>", "<i class='fab fa-twitter'></i>"]}
          />
        </div>
    </>
  );
}

export default Frontend;