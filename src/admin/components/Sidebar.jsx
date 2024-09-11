function Sidebar() {
  
    return (
      <aside className="w-64 bg-white shadow-md">
          <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-700">Help & Support</h2>
          </div>
          <nav className="mt-4">
          <ul>
              <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                  All
              </a>
              </li>
              <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                  Published
              </a>
              </li>
              <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                  Draft
              </a>
              </li>
          </ul>
          </nav>
      </aside>
    );
  }
  
  export default Sidebar;