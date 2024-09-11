import React, { useEffect, useRef } from 'react';
import { Form, Input, Button } from 'antd';

function TeamMemberProfile() {

  return (
    <>
        <div className='grid grid-cols-2 gap-3'>
            <Form.Item
            label="Team Member Website"
            name="website"
            rules={[
            { required: true, message: 'Please input your team member name!' },
            ]}
        >
            <Input />
        </Form.Item>
        </div>
    </>
  );
}

export default TeamMemberProfile;