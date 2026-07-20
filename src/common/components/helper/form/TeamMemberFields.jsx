import { useState, useEffect } from 'react';
import { Form } from 'antd';
import { User, Briefcase, Link2 } from 'lucide-react';

import TeamMemberBasic from './TeamMember/TeamMemberBasic';
import TeamMemberProfile from './TeamMember/TeamMemberProfile';
import TeamMemberDetails from './TeamMember/TeamMemberDetails';

import { fetchData } from '../../../services/fetchData';

function TeamMemberFields({ form, post_id }) {
  const [memberImage, setMemberImage] = useState(null);
  const [memberInformation, setMemberInformation] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);
  const [skills, setSkills] = useState(null);
  const [activeTab, setActiveTab] = useState('basic');

  useEffect(() => {
    if (memberInformation) {
      form.setFieldsValue({ member_information: memberInformation });
    }
    if (socialLinks) {
      form.setFieldsValue({ social_links: socialLinks });
    }
    if (skills) {
      form.setFieldsValue({ skills: skills });
    }
  }, [memberInformation, socialLinks, skills, form]);

  useEffect(() => {
    if (post_id) {
      fetchData(`tsteam/team_member/fetch/single`, (response) => {
        if (response.success && response.data) {
          form.setFieldsValue({
            member_name: response.data.title,
            member_designation: response.data.meta_data.designation,
            member_category: response.data.meta_data.category,
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
            member_video: response.data.meta_data.videoLink,
          });
          setMemberImage(response.data.meta_data.image);
          setMemberInformation(response.data.meta_data.information);
          setSocialLinks(response.data.meta_data.socialLinks);
          setSkills(response.data.meta_data.skills);
        }
      }, { post_id: post_id });
    }
  }, [post_id, form]);

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: User },
    { id: 'details', label: 'Details', icon: Briefcase },
    { id: 'profile', label: 'Profile & Links', icon: Link2 },
  ];

  return (
    <>
      <Form.Item name="member_information" hidden>
        <input type="hidden" />
      </Form.Item>
      <Form.Item name="social_links" hidden>
        <input type="hidden" />
      </Form.Item>
      <Form.Item name="skills" hidden>
        <input type="hidden" />
      </Form.Item>

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        gap: '4px',
        borderBottom: '1px solid #eee',
        padding: '0 32px',
      }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                fontSize: '14px',
                fontWeight: 500,
                color: isActive ? '#703FD6' : '#888',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                transition: 'color 0.2s',
              }}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #b08aef 0%, #8b5ce6 42%, #703FD6 100%)',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[380px]">
        <div style={{ display: activeTab === 'basic' ? 'block' : 'none' }}>
          <TeamMemberBasic form={form} member_image={memberImage} />
        </div>
        <div style={{ display: activeTab === 'details' ? 'block' : 'none' }}>
          <TeamMemberDetails form={form} member_information={memberInformation} />
        </div>
        <div style={{ display: activeTab === 'profile' ? 'block' : 'none' }}>
          <TeamMemberProfile form={form} social_links={socialLinks} skills={skills} />
        </div>
      </div>
    </>
  );
}

export default TeamMemberFields;
