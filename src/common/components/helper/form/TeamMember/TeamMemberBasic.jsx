import { Form, Input } from 'antd';
import { TsEditor, TsMedia } from '../../../controls/tsControls';

function TeamMemberBasic({ form }) {
  return (
    <>
      <Form.Item
        label="Team Member Name"
        name="name"
        rules={[
          { required: true, message: 'Please input your team member name!' },
        ]}
      >
        <Input />
      </Form.Item>

      <TsMedia 
        label="Team Member Image" 
        name="member_image" 
        required={true} 
        form={form}
      />

      <TsEditor 
        label="Team Member Information" 
        name="information" 
        required={true} 
        form={form} 
      />
    </>
  );
}

export default TeamMemberBasic;