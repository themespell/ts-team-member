import { useState, useEffect } from 'react';
import { TsSelect } from '../../controls/tsControls';
import { Form, Input, Space } from 'antd';
import { fetchData } from '../../../services/fetchData';

function TeamShowcaseFields() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchData('tsteam/team_member/fetch', (response) => {
      if (response.success && response.data) {
        const options = response.data.map((member) => ({
          label: member.title,
          value: member.post_id,
        }));
        setTeamMembers(options);
      } else {
        console.error('Failed to fetch team members.');
      }
    });
  }, []);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Form.Item
        label="Showcase Name"
        name="title"
        rules={[{ required: true, message: 'Please input your showcase name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="team_members"
        rules={[{ required: false }]}
      >
        <TsSelect 
        label='Team Members'
        options={teamMembers}
        mode="multiple"
        />
      </Form.Item>
    </>
  );
}

export default TeamShowcaseFields;