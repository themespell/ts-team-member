import React from 'react';
import { Box, Image, Text, Button, Link } from '@chakra-ui/react';

const ProfileCard = ({ selectedAnimation, type, onModalOpen, onDrawerOpen, onPopoverOpen }) => (
  <Box className={`${selectedAnimation} max-w-sm bg-black rounded-lg shadow-lg overflow-hidden`}>
    {/* Image */}
    <Box className="relative">
      <Image
        className="w-full h-auto rounded-lg"
        src="https://www.fionabruce.co.uk/wp-content/uploads/2024/01/phil-porter.png.webp"
        alt="Phil Porter"
      />
    </Box>
    
    {/* Content */}
    <Box className="p-6">
      <Text className="text-xl font-bold text-gray-900">Philip Porter</Text>
      <Text className="text-sm font-medium text-gray-600">
        Managing Partner, Head of Family & Matrimonial Law
      </Text>
      <Box className="mt-4">
        <Link
          className="inline-block bg-orange-200 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full"
          href="/specialised-in/family-law"
          isExternal
        >
          Family Law
        </Link>
      </Box>
      {type === 'modal' && (
        <Button onClick={onModalOpen} className="mt-4 p-2 bg-black text-white rounded-lg">
          Show Details
        </Button>
      )}
      {type === 'drawer' && (
        <Button onClick={onDrawerOpen} className="mt-4 p-2 bg-black text-white rounded-lg">
          Show Details Drawer
        </Button>
      )}
      {type === 'popover' && (
        <Button onClick={onPopoverOpen} className="mt-4 p-2 bg-black text-white rounded-lg">
          Show Details Popover
        </Button>
      )}
    </Box>
  </Box>
);

export default ProfileCard;