import { Modal } from 'antd';
import FormContainer from '../helper/form/FormContainer';

function TsModal({ actionType, formSupport, name, type, id, isOpen, isClose, width, children }) {
  return (
    <Modal
      title={
        actionType === 'create' 
          ? `Add New ${name}` 
          : actionType === 'edit' 
          ? `Edit ${name}` 
          : actionType === 'delete' 
          ? `Delete ${name}` 
          : ''
      }
      open={isOpen}
      onCancel={isClose}
      footer={null}
      closable={true}
      centered={true}
      width={width}
    >
      {formSupport ? <FormContainer actionType={actionType} name={name} type={type} post_id={id} /> : children}
    </Modal>
  );
}

export default TsModal;