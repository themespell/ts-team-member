import commonStore from '../../states/commonStore.js';
import { TsButton } from '../controls/tsControls.js';
import { CirclePlus } from 'lucide-react';

function TableNavItems({title}) {
    const { saveSettings } = commonStore((state) => ({
      saveSettings: state.saveSettings,
    }));

    const handleOpenModal = () => {
      saveSettings('createModal', true);
    };

    return (
      <div className="flex justify-between">
        <TsButton 
        label={title}
        prefix={
            <div className="flex items-center gap-1">
                <CirclePlus size={20} />
                <span className="-mr-1">Create</span>
            </div>
        }
        onClick={handleOpenModal}
        />
      </div>                
    );
  }
  
  export default TableNavItems;