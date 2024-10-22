import commonStore from '../../states/commonStore.js';
import { TsButton } from '../controls/tsControls.js';

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
        prefix='Create'
        onClick={handleOpenModal}
        />
      </div>                
    );
  }
  
  export default TableNavItems;