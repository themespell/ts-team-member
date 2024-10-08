import useAdminStore from '../../../admin/states/admin-store.js';
import { TsButton } from '../controls/tsControls.js';

function TableNavItems({title}) {
    const { isOpen, openModal, closeShowcaseModal } = useAdminStore();
    return (
      <div className="flex justify-between">
        <TsButton 
        label={title}
        prefix='Create'
        onClick={openModal}
        />
      </div>                
    );
  }
  
  export default TableNavItems;