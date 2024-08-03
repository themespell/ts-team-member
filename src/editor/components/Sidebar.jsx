import { Drawer } from 'antd';
import OptionTabs from './Tabs';

function Sidebar({ isOpen, onClose, theme, setTheme }) {
  return (
    <Drawer 
      title="Basic Drawer"
      onClose={onClose}
      open={isOpen}
      placement="left"
      mask={false}
    >
      <OptionTabs
        theme={theme}
        setTheme={setTheme}
      />
    </Drawer>
  );
}

export default Sidebar;