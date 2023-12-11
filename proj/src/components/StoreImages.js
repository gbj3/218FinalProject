import React from "react";
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import coffeepour from "./../utils/image 1.png"
import cups from "./../utils/image 2.png"
import counter from "./../utils/image 3.png"

const StoreImg = (props) => {
    return (
        <Box className={'imagecontainer'}>
            <Heading fontFamily={'hurricane'} textAlign={'center'}>
                Our Lovely Store
            </Heading>
            <Flex className={'images'} display={'flex'} pb={12}>
                    <Image src={coffeepour} alt="Pour Coffee" />
                    <Image src={cups} alt="Sharing Coffee" />
                    <Image src={counter} alt="Counter" />
            </Flex>
        </Box>
    )
}

export default StoreImg;
