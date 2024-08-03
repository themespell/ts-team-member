import { Button, Box, Flex, Spacer, Link } from '@chakra-ui/react';

function Topbar() {
    return (
        <Box bg="black" color="white" px={4} py={3}>
            <Flex align="center">
                <Box fontSize="xl" fontWeight="bold">
                    LOGO
                </Box>
                <Spacer />
                <Flex align="center" gap={4}>
                    <Link href="#home" _hover={{ textDecoration: 'none', color: 'teal.200' }}>
                        Home
                    </Link>
                    <Link href="#about" _hover={{ textDecoration: 'none', color: 'teal.200' }}>
                        About
                    </Link>
                    <Link href="#services" _hover={{ textDecoration: 'none', color: 'teal.200' }}>
                        Services
                    </Link>
                    <Link href="#contact" _hover={{ textDecoration: 'none', color: 'teal.200' }}>
                        Contact
                    </Link>
                    <Button colorScheme="teal" variant="solid">
                        Connect Wallet
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Topbar;