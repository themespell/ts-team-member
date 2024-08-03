import { Modal } from 'antd';

import Content from './components/Content';

import useStore from '../store';

function AdminModal() {
  const { isOpen, openModal, closeModal } = useStore();

  return (
    <>
    <Modal 
    title="Edit Content" 
    open={isOpen} 
    onOk={closeModal} 
    onCancel={closeModal}
    width={1000}
    >
        <Content />
    </Modal>
      
    </>
  );
}

export default AdminModal;