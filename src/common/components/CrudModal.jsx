import FormContainer from './helper/form/FormContainer.jsx';
import useAdminStore from '../../admin/states/admin-store.js';
import { Modal } from 'antd';

function CrudModal({type, name}) {
  const { isOpen, openModal, closeShowcaseModal } = useAdminStore();
  const modalTitle = `Add New ${name}`;
  return (
    <>
     <Modal
                title={modalTitle} 
                open={isOpen} 
                onOk={closeShowcaseModal} 
                onCancel={closeShowcaseModal}
                width={700}
                footer={[]}
              >
              <FormContainer name={name} type={type} />
       </Modal>
    </>
  );
}

export default CrudModal;