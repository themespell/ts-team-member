import { Button } from '@chakra-ui/react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';

function Sidebar() {
  return (
    <>
    <Box className="w-full">
                <Box className="bg-gray-700 shadow p-6 rounded-lg">
                <Heading size="md" mb={4}>Overview</Heading>
                <p className="text-white">This is a simple admin panel using Chakra UI and Tailwind CSS.</p>
                </Box>
    </Box>
    </>
  );
}

export default Sidebar;