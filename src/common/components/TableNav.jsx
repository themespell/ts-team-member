import CrudModal from "./CrudModal";
import TableNavItems from "./helper/TableNavItems";

function TableNav({type, title}) {
  
  return (
    <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
          <div className="flex justify-between mt-4">
            <TableNavItems title={title} />
            <div>
              <input
                type="text"
                placeholder="Search Pages"
                className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
            <CrudModal name={title} type={type} />
        </div>
    </div>
  );
}

export default TableNav;