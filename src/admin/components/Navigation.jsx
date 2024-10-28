import globalSettings from '../../common/utils/globalSettings.js';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

function Navigation() {
  const { navigation } = globalSettings;
  const currentUrl = new URL(window.location.href);
  const currentPath = currentUrl.search; // Gets the query string part like '?page=tsteam-showcase'

  return (
    <>
      <li className="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top toplevel_page_tsteam-admin">
        <a
          href="admin.php?page=tsteam-showcase"
          className="tsteam__color--bg wp-has-submenu wp-menu-open menu-top toplevel_page_tsteam-admin"
        >
          <div className="wp-menu-arrow">
            <div></div>
          </div>
          <div className="wp-menu-image dashicons-before" aria-hidden="true">
            <img
              src="http://localhost:10003/wp-content/plugins/ts-team-member/includes/assets/icon-16x16.png"
              alt=""
            />
          </div>
          <div className="wp-menu-name">TS Team</div>
        </a>

        <ul className="bg-white wp-submenu wp-submenu-wrap">
          <li className="wp-submenu-head" aria-hidden="true">TS Team</li>
          {Object.keys(navigation).map((key) => {
            const item = navigation[key];
            const IconComponent = item.icon;

            // Check if the current path matches the item link exactly
            const isActive = currentPath === item.link;

            return (
              <li
                key={key}
                className={`wp-first-item ${isActive ? 'current' : ''}`}
              >
                <a
                  href={`admin.php${item.link}`}
                  className={`wp-first-item ${isActive ? 'current' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className='flex gap-2'>
                  {IconComponent && <IconComponent className="icon-class size-5" />}
                  {item.label}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
}

export default Navigation;