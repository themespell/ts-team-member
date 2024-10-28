import { useState, useEffect } from 'react';
import { Tabs } from 'antd';

import TeamMemberBasic from './TeamMember/TeamMemberBasic';
import TeamMemberProfile from './TeamMember/TeamMemberProfile';
import TeamMemberDetails from './TeamMember/TeamMemberDetails';
import TeamMemberCustom from './TeamMember/TeamMemberCustom';

import { fetchData } from '../../../services/fetchData';

function TeamMemberFields({ form, post_id }) {
  const [memberImage, setMemberImage] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);

  useEffect(() => {
    if (post_id) {
      fetchData(`tsteam/team_member/fetch/single`, (response) => {
        if (response.success && response.data) {

          form.setFieldsValue({
            member_name: response.data.title,
            member_designation: response.data.meta_data.designation,
            member_image: response.data.meta_data.image,
            member_description: response.data.content,
            member_email: response.data.meta_data.email,
            member_phone: response.data.meta_data.phone,

            member_telephone: response.data.meta_data.telephone,
            member_experience: response.data.meta_data.experience,
            member_company: response.data.meta_data.company,
            member_location: response.data.meta_data.location,
            member_website: response.data.meta_data.website,
            member_resume: response.data.meta_data.resume,
            member_hire: response.data.meta_data.hireLink,
            member_donation: response.data.meta_data.donationLink,
          });
          setMemberImage(response.data.meta_data.image);
          setSocialLinks(response.data.meta_data.socialLinks);
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
      label: 'Details Information',
      children: <TeamMemberDetails form={form} />,
    },
    {
      key: '3',
      label: 'Profile Links',
      children: <TeamMemberProfile form={form} social_links={socialLinks} />,
    },
    // {
    //   key: '4',
    //   label: 'Custom Fields',
    //   children: <TeamMemberCustom form={form} />,
    // },
  ];
    

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />    
    </>
  );
}

export default TeamMemberFields;