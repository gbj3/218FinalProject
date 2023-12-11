import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import source from "./../utils/coffee-cup-logo.png";


export default function Logo(props) {
  return (
    <Box {...props} style={{paddingTop:'0.5rem'}}>
      <Link href='#'>
      <Image width={20} src={source} alt='Logo' />
      </Link>
    </Box>
  );
}