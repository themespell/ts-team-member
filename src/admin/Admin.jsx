import { Form, Modal } from 'antd';

import Content from './components/Content';
import Media from './components/Media';

import useStore from '../store';

function AdminPanel() {
  const { isOpen, openModal, closeModal } = useStore();

  return (
    <>
    <div className='p-12'>
    {/* <Media /> */}
    <br />
    <Content />
    </div>     
    </>
  );
}

export default AdminPanel;