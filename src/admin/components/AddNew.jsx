import { Button, Checkbox, Form, Input } from 'antd';
import { createShowcase } from '../actions/createShowcase.js';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

//   const ajax_url = tsteam_settings.ajax_url;
//   const admin_url = tsteam_settings.admin_url;

//   const createShowcase = ( data ) => {
//     jQuery.post(ajax_url, {
//       _ajax_nonce: tsteam_settings.nonce,
//       action: "tsteam_showcase/create_showcase",
//       title: data.title,
//       }, function(response) {
//         if (response.success) {
//             window.location.href = `${admin_url}edit.php?post_type=tsteam-showcase&path=admin`
//           } else {
//             console.log('Error:', response);
//           }
//       }
//     );
// }

function AddNew() {
  
  return (
    <>
      <Form
        initialValues={{
        remember: true,
        }}
        onFinish={createShowcase}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout='vertical'
      >
    <Form.Item
      label="Showcase Name"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      
    >
      <Button type="primary" htmlType="submit">
        Create Showcase
      </Button>
    </Form.Item>
  </Form>
    </>
  );
}

export default AddNew;