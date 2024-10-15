import { Tabs } from "antd";
import ContentTab from "./Tabs/ContentTab";
import StyleTab from './Tabs/StyleTab';
import AdvanceTab from "./Tabs/AdvanceTab";
import { TsDrawer } from '../../../common/components/controls/tsControls';

function Sidebar({ isOpen, onClose, layoutType }) {
  const items = [
    {
      label: 'Content',
      key: '1',
      children: <ContentTab />,
    },
    {
      label: 'Style',
      key: '2',
      children: <StyleTab layoutType={layoutType} />,
    },
    {
      label: 'Advance',
      key: '3',
      children: <AdvanceTab />,
    },
  ];

  return (
    <TsDrawer label="Editor" isOpen={isOpen} onClose={onClose} position="left">
      <Tabs type="card" items={items} size="large"/>
    </TsDrawer>
  );
}

export default Sidebar;