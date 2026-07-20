import { Form } from 'antd';
import { createData } from '../../../services/createData.js';
import { updateData } from '../../../services/updateData.js';
import { toastNotification } from '../../../utils/toastNotification.js';
import TeamShowcaseFields from './TeamShowcaseFields.jsx';
import TeamMemberFields from './TeamMemberFields.jsx';
import MemberCategoryFields from "./MemberCategoryFields.jsx";
import { Save, Loader2 } from 'lucide-react';

import commonStore from '../../../states/commonStore.js';
import {getTranslations} from "../../../utils/translations.js";
import { useState } from 'react';

function FormContainer({ actionType, type, name, post_id }) {
  const translations = getTranslations();
  const [form] = Form.useForm();
  const [saving, setSaving] = useState(false);

  const { saveSettings } = commonStore((state) => ({
    saveSettings: state.saveSettings,
  }));

  const onFinish = (data, actionType, post_id) => {
    setSaving(true);
    if (actionType === 'create') {
      createData(`tsteam/${type}/create`, data)
      .then(response => {
          toastNotification('success', `${name} Created`, `The ${name} has been successfully created.`);
          saveSettings('createModal', false);
          saveSettings('reloadData', Date.now());
      })
      .catch(error => {
          toastNotification('error', `${name} Creation Failed`, `The ${name} creation has failed. Error: ${error}`);
      })
      .finally(() => setSaving(false));
    } else if (actionType === 'edit') {
      updateData(`tsteam/${type}/update`, { ...data, post_id })
        .then(response => {
          toastNotification('success', `${name} Updated`, `The ${name} has been successfully updated.`);
          saveSettings('updateModal', false);
          saveSettings('reloadData', Date.now());
        })
        .catch(error => {
            toastNotification('error', `${name} Update Failed`, `The ${name} update has failed. Error: ${error}`);
        })
        .finally(() => setSaving(false));
    }
  };

  const onFinishFailed = (errorInfo) => {
    toastNotification('error', `${name} Failed`, `Operation failed.`);
  };

  const handleCancel = () => {
    if (actionType === 'create') {
      saveSettings('createModal', false);
    } else {
      saveSettings('updateModal', false);
    }
  };

  return (
    <Form
      form={form}
      id="tsteam-modal-form"
      initialValues={{remember: false}}
      onFinish={(data) => onFinish(data, actionType, post_id)}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      {/* Form Fields */}
      <div style={{ padding: 0 }}>
        {type === 'team_showcase' && <TeamShowcaseFields form={form} post_id={post_id}/>}
        {type === 'team_member' && <TeamMemberFields form={form} post_id={post_id}/>}
        {type === 'member_category' && <MemberCategoryFields form={form} post_id={post_id}/>}
      </div>

      {/* Footer - Sticky at bottom of scrollable area */}
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '12px',
          borderTop: '1px solid #f0f0f0',
          background: '#fafafa',
          padding: '16px 32px',
          zIndex: 10,
        }}
      >
        <button
          type="button"
          onClick={handleCancel}
          className="rounded-lg px-5 py-2.5 text-sm font-semibold text-[#666] transition hover:bg-[#eee] hover:text-[#333]"
        >
          Cancel
        </button>
        <button
          type="submit"
          form="tsteam-modal-form"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: 'linear-gradient(135deg, #b08aef 0%, #8b5ce6 42%, #703FD6 100%)',
            boxShadow: '0 4px 14px rgba(112, 63, 214, 0.3)',
          }}
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          {saving ? 'Saving...' : (
            actionType === 'create'
              ? `${translations.create} ${name}`
              : `${translations.update} ${name}`
          )}
        </button>
      </div>
    </Form>
  );
}

export default FormContainer;
