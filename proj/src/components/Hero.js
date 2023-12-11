import React from "react";
import { Box, Button, Text, Link } from '@chakra-ui/react';

const HeroBox = (props) => {
    return (
        <Box float={'right'} color={'white'} p={'4rem'} mr={'4rem'}>
            <Text fontWeight={'bolder'} fontSize={'250%'}>
                About Us
            </Text>
            <Text className="herotext">
            Welcome to IS218, where every cup tells a story. Nestled in the heart 
            of Newark, our cozy retreat has been serving the community since 1988. Our 
            passion for exceptional coffee and a warm, welcoming atmosphere drives us. 
            We source the finest beans, blend them with care, and serve them with a 
            smile. Our shop is more than just a place to grab a coffee—it's a haven for coffee 
            lovers, a spot for friends to gather, and a part of our beloved community. Join 
            us for your daily cup, and become a part of our story.
            </Text>
            <Button mt={4} backgroundColor={'#731804'} color={'white'}>
                <Link href='./menu'>Check Out Our Menu</Link>
            </Button>
        </Box>
    )
}

export default HeroBox;