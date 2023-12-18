import { Box, Flex, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex maxW="container.xl" mx="auto" px={4} align="center" justify="space-between">
        <Link href="/" fontSize="xl" fontWeight="bold">
          Logo
        </Link>
        <Flex as="nav" align="center">
          <Link href="/about" mr={4}>
            About
          </Link>
          <Link href="/services" mr={4}>
            Services
          </Link>
          <Link href="/contact">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;