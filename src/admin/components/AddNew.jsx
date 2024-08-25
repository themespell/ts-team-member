import { Button, Form, Input } from 'antd';
import { createShowcase } from '../actions/createShowcase.js';
import { toastNotification } from '../actions/toastNotification.js';
import useAdminStore from '../states/admin-store.js';

function AddNew({ onShowcaseAdded }) {
  const { closeShowcaseModal } = useAdminStore();

  const onFinish = (data) => {
    createShowcase(data)
      .then(() => {
        closeShowcaseModal();
        toastNotification('success', 'Showcase Created', 'The showcase has been successfully created.');
        if (onShowcaseAdded) {
          onShowcaseAdded();
        }
      })
      .catch((error) => {
        toastNotification('error', `Showcase Creation Failed', 'The showcase creation has failed. Error: ${error}`);
      });
  };

  const onFinishFailed = (error) => {
    toastNotification('error', `Showcase Creation Failed', 'The showcase creation has failed. Error: ${error}`);
  };

  return (
    <>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Showcase Name"
          name="title"
          rules={[
            { required: true, message: 'Please input your showcase name!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Showcase
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default AddNew;
