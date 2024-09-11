import useAdminStore from '../../../admin/states/admin-store.js';

function TableNavItems({title}) {
    const { isOpen, openModal, closeShowcaseModal } = useAdminStore();
    return (
      <div className="flex justify-between">
        <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Create New {title}
        </button>
      </div>                
    );
  }
  
  export default TableNavItems;