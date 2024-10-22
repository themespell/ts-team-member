import { useState, useEffect } from 'react';
import { Tabs } from 'antd';

import TeamMemberBasic from './TeamMember/TeamMemberBasic';
import TeamMemberProfile from './TeamMember/TeamMemberProfile';
import { fetchData } from '../../../services/fetchData';

function TeamMemberFields({ form, post_id }) {
  const [memberImage, setMemberImage] = useState(null);

  useEffect(() => {
    if (post_id) {
      fetchData(`tsteam/team_member/fetch/single`, (response) => {
        if (response.success && response.data) {
          form.setFieldsValue({
            member_name: response.data.title,
            member_designation: response.data.meta_data.designation,
            member_image: response.data.meta_data.image,
            member_description: response.data.content,
          });
          setMemberImage(response.data.meta_data.image);
        } else {
          console.error('Failed to fetch showcase data.');
        }
      }, { post_id: post_id });
    }
  }, [post_id, form]);

  const items = [
    {
      key: '1',
      label: 'Basic Information',
      children: <TeamMemberBasic form={form} member_image={memberImage} />,
    },
    {
      key: '2',
      label: 'Profile Links',
      children: <TeamMemberProfile form={form} />,
    },
  ];
    

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />    
    </>
  );
}

export default TeamMemberFields;