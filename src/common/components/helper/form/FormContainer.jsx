import { Button, Form } from 'antd';
import { createData } from '../../../services/createData.js';
import { toastNotification } from '../../../utils/toastNotification.js';
import TeamShowcaseFields from './TeamShowcaseFields.jsx';
import TeamMemberFields from './TeamMemberFields.jsx';

function FormContainer({ actionType, type, name, post_id, onShowcaseAdded }) {
  const [form] = Form.useForm();

  const onFinish = (data) => {
    createData(`tsteam/${type}/create`, data)  // Pass the form data directly
    .then(response => {
        toastNotification('success', `${name} Created`, `The ${name} has been successfully created.`);
        if (onShowcaseAdded) {
          onShowcaseAdded();  // Call callback if provided
        }
    })
    .catch(error => {
        toastNotification('error', `${name} Creation Failed`, `The ${name} creation has failed. Error: ${error}`);
    });
  };

  const onFinishFailed = (error) => {
    toastNotification('error', `${name} Creation Failed`, `The ${name} creation has failed. Error: ${error}`);
  };

  return (
    <Form
      form={form}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      {type === 'team_showcase' && <TeamShowcaseFields post_id={post_id} />}
      {type === 'team_member' && <TeamMemberFields form={form} />}  {/* Pass form to TeamMemberFields */}
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
        {actionType === 'create' 
        ? `Create ${name}` 
        : actionType === 'edit' 
        ? `Update ${name}` 
        : actionType === 'delete' 
        ? `Delete ${name}` 
        : `Create ${name}`}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormContainer;