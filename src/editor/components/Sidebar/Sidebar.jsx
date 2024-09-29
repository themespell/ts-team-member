import { Drawer } from 'antd';
import OptionTabs from './Tabs/Tabs';

function Sidebar({ isOpen, onClose, theme, setTheme }) {
  return (
    <Drawer 
      title="Editor"
      onClose={onClose}
      open={isOpen}
      placement="left"
      mask={false}
    >
      <div className='flex flex-col justify-between h-full'>
        <div>
            <OptionTabs
            theme={theme}
            setTheme={setTheme}
          />
        </div>

        <div>
            
        </div>
      </div>
    </Drawer>
  );
}

export default Sidebar;