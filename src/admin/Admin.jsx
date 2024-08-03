import { Button } from '@chakra-ui/react';
import {
  Box,
  Heading,  
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import useStore from '../store';

function AdminModal() {
  const { isOpen, openModal, closeModal } = useStore();

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} size={'5xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                <div className='flex'>
                    <Sidebar/>
                    <Content/>
                </div>
          </ModalBody>

          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminModal;