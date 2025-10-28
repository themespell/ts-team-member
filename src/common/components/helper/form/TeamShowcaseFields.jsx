import { useState, useEffect } from 'react';
import { Form, Input } from 'antd';
import { fetchData } from '../../../services/fetchData';
import { TsInput, TsSelect } from '../../controls/tsControls';
import {getTranslations} from "../../../utils/translations.js";

function TeamShowcaseFields({ form, post_id }) {
  const translations = getTranslations();
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberCategories, setMemberCategories] = useState([]);
  const [showMembersBy, setShowMembersBy] = useState('manual');
  // const [form] = Form.useForm(); // Create form instance

  const showMembersByOptions = [
    { label: 'Manual Selection', value: 'manual' },
    { label: 'Category Selection', value: 'category' },
  ];

  // Fetch team members for select options
  useEffect(() => {
    fetchData('tsteam/team_member/fetch', (response) => {
      if (response.success && response.data) {
        const options = response.data.map((member) => ({
          label: member.name,
          value: member.post_id,
        }));
        setTeamMembers(options);
      } else {
        console.error('Failed to fetch team members.');
      }
    });
  }, []);

  // Fetch member categories for select options
  useEffect(() => {
    fetchData('tsteam/member_category/fetch', (response) => {
      if (response.success && response.data) {
          console.log(response);
        const options = response.data.map((category) => ({
          label: category.name,
          value: category.post_id, // Changed from category.show_member_by to category.slug
        }));
        setMemberCategories(options);
      } else {
        console.error('Failed to fetch member categories.');
      }
    });
  }, []);

  // Fetch showcase data if `id` is provided and set form values
  useEffect(() => {
    if (post_id) {
      fetchData(`tsteam/team_showcase/fetch/single`, (response) => {
        if (response.success && response.data) {
          const showBy = response.data.meta_data.show_members_by || 'manual';
          setShowMembersBy(showBy); // Set the state

          form.setFieldsValue({
            title: response.data.title,
            show_members_by: showBy,
            team_members: showBy === 'manual' ? response.data.meta_data.team_members?.map((member) => ({
              label: member.name,
              value: member.post_id,
            })) : undefined,
            member_categories: showBy === 'category' ? response.data.meta_data.member_categories : undefined,
          });
        } else {
          console.error('Failed to fetch showcase data.');
        }
      }, { post_id: post_id });
    }
  }, [post_id, form]);

    // Add this effect to clear the opposite field when showMembersBy changes
    useEffect(() => {
        if (showMembersBy === 'category') {
            form.setFieldValue('team_members', undefined);
        } else {
            form.setFieldValue('member_categories', undefined);
        }
    }, [showMembersBy, form]);

  return (
    <div className="p-6">
      <TsInput
      label={translations.showcaseName}
      name="title"
      required={true}
      />

      <TsSelect
          label={translations.showMembersBy || "Show Members By"}
          name="show_members_by"
          options={showMembersByOptions}
          onChange={(value) => setShowMembersBy(value)} // Add this
          rules={[{ required: true, message: 'Please select how to show members' }]}
      />

        {showMembersBy === 'manual' && (
            <Form.Item
                name="team_members"
                rules={[{ required: true, message: 'Please select team members'}]}
            >
                <TsSelect
                    label={translations.teamMember}
                    options={teamMembers}
                    mode="multiple"
                />
            </Form.Item>
        )}

        {showMembersBy === 'category' && (
            <Form.Item
                name="member_categories"
                rules={[{ required: true, message: 'Please select categories'}]}
            >
                <TsSelect
                    label={translations.memberCategory || "Member Category"}
                    options={memberCategories}
                    mode="multiple"
                />
            </Form.Item>
        )}

      {/*<Form.Item*/}
      {/*    name={showMembersBy === 'category' ? 'member_categories' : 'team_members'}*/}
      {/*    rules={[{ required: true, message: `Please select ${showMembersBy === 'category' ? 'categories' : 'team members'}`}]}*/}
      {/*>*/}
      {/*  <TsSelect*/}
      {/*      label={showMembersBy === 'category' ? (translations.memberCategory || "Member Category") : translations.teamMember}*/}
      {/*      defaultValue={form.getFieldValue(showMembersBy === 'category' ? 'member_categories' : 'team_members')}*/}
      {/*      options={showMembersBy === 'category' ? memberCategories : teamMembers}*/}
      {/*      mode="multiple"*/}
      {/*  />*/}
      {/*</Form.Item>*/}
    </div>
  );
}

export default TeamShowcaseFields;