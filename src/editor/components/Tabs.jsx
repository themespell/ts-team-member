import { Tabs } from "antd";
import ContentTab from './tabs/Content';
import StyleTab from './tabs/Style';
import AdvanceTab from './tabs/Advance';

function OptionTabs({theme, setTheme }){
  const items = [
    {
      label: 'Content',
      key: '1',
      children: <ContentTab theme={theme} setTheme={setTheme} />,
    },
    {
      label: 'Style',
      key: '2',
      children: <StyleTab />,
    },
    {
      label: 'Advance',
      key: '3',
      children: <AdvanceTab />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return(
    <Tabs
      onChange={onChange}
      type="card"
      items={items}
      size="large"
    />
  )
}

export default OptionTabs;