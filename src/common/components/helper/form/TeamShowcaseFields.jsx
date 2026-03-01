import { useState, useEffect } from 'react';
import { Form } from 'antd';
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
      if (response.success) {
        const list = Array.isArray(response.data) ? response.data : [];
        const options = list.map((category) => ({
          label: category.name,
          value: category.post_id,
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

          const memberIds = showBy === 'manual'
            ? response.data.meta_data.team_members?.map((member) => member.post_id)
            : undefined;

          form.setFieldsValue({
            title: response.data.title,
            show_members_by: showBy,
            team_members: memberIds,
            member_categories: showBy === 'category' ? response.data.meta_data.member_categories : undefined,
          });

          // Ensure the multi-select shows saved values even if options arrive after this call.
          if (showBy === 'manual' && Array.isArray(memberIds)) {
            setTimeout(() => {
              try { form.setFieldValue('team_members', memberIds); } catch (e) {}
            }, 50);
          }
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
          onChange={(value) => setShowMembersBy(value)}
          form={form}
          rules={[{ required: true, message: 'Please select how to show members' }]}
      />

        {showMembersBy === 'manual' && (
            <TsSelect
                label={translations.teamMember}
                name="team_members"
                options={teamMembers}
                mode="multiple"
                form={form}
                rules={[{ required: true, message: 'Please select team members'}]}
            />
        )}

        {showMembersBy === 'category' && (
            <TsSelect
                label={translations.memberCategory || "Member Category"}
                name="member_categories"
                options={memberCategories}
                mode="multiple"
                form={form}
                rules={[{ required: true, message: 'Please select categories'}]}
            />
        )}
    </div>
  );
}

export default TeamShowcaseFields;