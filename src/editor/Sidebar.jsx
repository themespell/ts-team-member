import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';

import OptionTabs from './Tabs';

function Sidebar({ isOpen, onClose, theme, setTheme }) {

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} closeOnEsc={false}>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Editor</DrawerHeader>
        <OptionTabs
        theme={theme}
        setTheme={setTheme}
        />
        <DrawerBody>

        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;