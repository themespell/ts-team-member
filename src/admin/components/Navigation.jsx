import globalSettings from "../../common/utils/globalSettings";

function Navigation() {
  // Extract the "page" query parameter from the current URL
  const currentParams = new URLSearchParams(window.location.search);
  const currentPage = currentParams.get('page'); // Will be 'tsteam-showcase' or 'team-member'

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <ul className="text-sm flex flex-col gap-2">
        {Object.keys(globalSettings.navigation).map((key) => {
          const navItem = globalSettings.navigation[key];

          // Extract the 'page' parameter from navItem.link using URLSearchParams
          const navItemParams = new URLSearchParams(navItem.link);
          const navPage = navItemParams.get('page'); // Get 'team-member' or 'tsteam-showcase'

          // Check if currentPage matches navPage
          const isActive = currentPage === navPage;

          return (
            <>
            <a href={navItem.link} 
            // className={`flex gap-2 items-center ${isActive ? 'active tsteam__color--text' : 'text-white'}`}
            className="flex gap-2 items-center tsteam__color--text"
            >
            <li key={key} className="p-3 flex gap-2 rounded-lg">
                <navItem.icon className="size-5" />
                {navItem.label}
            </li>
            </a>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;