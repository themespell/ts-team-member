import { Tabs } from 'antd';

import TeamMemberBasic from './TeamMember/TeamMemberBasic';
import TeamMemberProfile from './TeamMember/TeamMemberProfile';

function TeamMemberFields({ form }) {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'Basic Information',
      children: <TeamMemberBasic form={form} />,
    },
    {
      key: '2',
      label: 'Profile Links',
      children: <TeamMemberProfile form={form} />,
    },
  ];
    

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />    
    </>
  );
}

export default TeamMemberFields;