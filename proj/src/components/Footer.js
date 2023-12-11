import { Stack, HStack, Link, Image, IconButton, LinkProps } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from './../utils/coffee-cup-logo.png';

const links = ['Home', 'Menu', 'Contact Us'];
const accounts = [
  {
    url: 'https://facebook.com',
    label: 'Facebook Account',
    type: 'facebook',
    icon: <FaFacebook />
  },
  {
    url: 'https://instagram.com',
    label: 'Instagram Account',
    type: 'instagram',
    icon: <FaInstagram />
  },
  {
    url: 'https://tiktok.com',
    label: 'TikTok Account',
    type: 'tiktok',
    icon: <FaTiktok />
  }
];

const Footer = () => {
  return (
    <Stack
     ml={'8rem'}
     mr={'8rem'}
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
      background={'gray'}

    >
      <Link href="#">
        <Image w="100px" src={logo} alt="Coffee Shop" />
      </Link>

      {/* Desktop Screen */}
      <HStack spacing={4} alignItems="center" d={{ base: 'none', md: 'flex' }}>
        {links.map((link, index) => (
          <CustomLink key={index}>{link}</CustomLink>
        ))}
      </HStack>

      <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;