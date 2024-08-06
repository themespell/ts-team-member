import { Button, Modal } from 'antd';
import AddNew from './components/AddNew';
import useStore from '../store';

function CPT() {
  const { isOpen, openModal, closeModal } = useStore();

  return (
    <>
      <div className='flex mt-2'>
        <Button onClick={openModal} type="primary">Create New Showcase</Button>
      </div>
      <Modal 
        title="Add New Showcase" 
        open={isOpen} 
        onOk={closeModal} 
        onCancel={closeModal}
        width={500}
        footer={[]}
      >
        <AddNew />
      </Modal>
    </>
  );
}

export default CPT;