import { useState, useEffect } from 'react';
import { Form, Input } from 'antd';
import { fetchData } from '../../../services/fetchData';
import { TsInput, TsSelect } from '../../controls/tsControls';

function TeamShowcaseFields({ form, post_id }) {
  const [teamMembers, setTeamMembers] = useState([]);
  // const [form] = Form.useForm(); // Create form instance

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

  // Fetch showcase data if `id` is provided and set form values
  useEffect(() => {
    if (post_id) {
      fetchData(`tsteam/team_showcase/fetch/single`, (response) => {
        if (response.success && response.data) {
          form.setFieldsValue({
            title: response.data.title,
            team_members: response.data.meta_data.team_members.map((member) => ({
              label: member.name,
              value: member.post_id,
            }))
          });
        } else {
          console.error('Failed to fetch showcase data.');
        }
      }, { post_id: post_id });
    }
  }, [post_id, form]);

  return (
    <>
      <TsInput 
      label="Showcase Name"
      name="title"
      required={true}
      />

      <Form.Item
        name="team_members"
        rules={[{ required: true, message: 'Please select team members'}]}
      >
        <TsSelect
          label="Team Members"
          defaultValue={form.getFieldValue('team_members')}
          options={teamMembers}
          mode="multiple"
        />
      </Form.Item>
    </>
  );
}

export default TeamShowcaseFields;