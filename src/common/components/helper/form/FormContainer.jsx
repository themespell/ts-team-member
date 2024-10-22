import { Form } from 'antd';
import { TsButton } from '../../controls/tsControls.js';
import { createData } from '../../../services/createData.js';
import { updateData } from '../../../services/updateData.js';
import { toastNotification } from '../../../utils/toastNotification.js';
import TeamShowcaseFields from './TeamShowcaseFields.jsx';
import TeamMemberFields from './TeamMemberFields.jsx';

import commonStore from '../../../states/commonStore.js';

function FormContainer({ actionType, type, name, post_id }) {
  const [form] = Form.useForm();

  const { saveSettings } = commonStore((state) => ({
    saveSettings: state.saveSettings,
  }));

  const onFinish = (data, actionType, post_id) => {
    if (actionType === 'create') {
      createData(`tsteam/${type}/create`, data)
      .then(response => {
          toastNotification('success', `${name} Created`, `The ${name} has been successfully created.`);
          saveSettings('createModal', false);
          saveSettings('reloadData', Date.now());
      })
      .catch(error => {
          toastNotification('error', `${name} Creation Failed`, `The ${name} creation has failed. Error: ${error}`);
      });
    } else if (actionType === 'edit') {
      updateData(`tsteam/${type}/update`, { ...data, post_id })
        .then(response => {
          toastNotification('success', `${name} Updated`, `The ${name} has been successfully updated.`);
          saveSettings('updateModal', false);
          saveSettings('reloadData', Date.now());
        })
        .catch(error => {
          toastNotification('error', `${name} Update Failed`, `The ${name} update has failed. Error: ${error}`);
        });
    }
  };

  const onFinishFailed = (error) => {
    toastNotification('error', `${name} Creation Failed`, `The ${name} creation has failed. Error: ${error}`);
  };

  return (
    <Form
      form={form}
      initialValues={{ remember: false }}
      onFinish={(data) => onFinish(data, actionType, post_id)}
      onFinishFailed={(errorInfo) => onFinishFailed(errorInfo, actionType, post_id)}
      autoComplete="off"
      layout="vertical"
    >
      {type === 'team_showcase' && <TeamShowcaseFields form={form} post_id={post_id} />}
      {type === 'team_member' && <TeamMemberFields form={form} post_id={post_id} />}
      
      <Form.Item>
      <TsButton
      label={
        actionType === 'create'
          ? `Create ${name}`
          : actionType === 'edit'
          ? `Update ${name}`
          : actionType === 'delete'
          ? `Delete ${name}`
          : `Create ${name}`
      }
      htmlType="submit"
      />
      </Form.Item>
    </Form>
  );
}

export default FormContainer;