import { Button } from '@chakra-ui/react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';

function Sidebar() {
  return (
    <>
        <Box className="w-64 bg-gray-800 text-white h-full p-4">
        <Heading size="md" mb={6}>Admin Panel</Heading>
        <Box className="mb-4">
        <Button variant="link" colorScheme="white" className="w-full text-left">Dashboard</Button>
        </Box>
        <Box className="mb-4">
        <Button variant="link" colorScheme="white" className="w-full text-left">Posts</Button>
        </Box>
        <Box className="mb-4">
        <Button variant="link" colorScheme="white" className="w-full text-left">Settings</Button>
        </Box>
    </Box>
    </>
  );
}

export default Sidebar;