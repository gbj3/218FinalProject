import React from "react";
import { Box, Container, Text, Heading, Image, Button, Link } from '@chakra-ui/react';

import latte from "./../utils/caffelatte.png";
import vanilla from "./../utils/vanillalatte.svg";
import caffemocha from "./../utils/mocha.png";
import espressomac from "./../utils/espressomac.png";
import chocmocha from "./../utils/chocmocha.png";
import caramellatte from "./../utils/caramellatte.png";

const StoreSum = (props) => {
    return (
        <Box>
            <Container marginTop={'4rem'}>
                <Heading color={'white'} textAlign={'center'} fontFamily={'Times New Roman'}>
                    Favorites
                </Heading>
            </Container>
            <Container className={'latte'} paddingTop={'5rem'} marginRight={'4rem'} paddingLeft={'8rem'} float={'left'}>
                <Image float={'left'} width={20} src={latte} alt="Caffe Latte" />
                <Text className="coffeemenu">
                    Caffe Latte
                </Text>
                <Text className="coffeedesc" >
                    Fresh Brewed Coffee and Steamed Milk
                </Text>
                <Text className="cost">
                    $2.95
                </Text>
            </Container>
            <Container className={'vanila'} paddingTop={'5rem'} paddingRight={'8rem'} marginLeft={'4rem'} float={'right'}>
                <Image float={'left'} width={20} src={vanilla} alt="Vanilla Latte" />
                <Text className="coffeemenu">
                    Vanilla Latte
                </Text>
                <Text className="coffeedesc" >
                    Espresso Milk With Flavor,and Cream
                </Text>
                <Text className="cost">
                    $3.65
                </Text>
            </Container>
            <Container className={'caffemocha'} paddingTop={'5rem'} paddingLeft={'8rem'} marginRight={'4rem'} float={'left'}>
                <Image float={'left'} width={20} src={caffemocha} alt="Caffe Mocha" />
                <Text className="coffeemenu">
                    Caffe Mocha
                </Text>
                <Text className="coffeedesc" >
                    Espresso With Milk, and Whipped Cream
                </Text>
                <Text className="cost">
                    $3.67
                </Text>
            </Container>
            <Container className={'macchiato'} paddingTop={'5rem'} paddingRight={'8rem'} marginLeft={'4rem'} float={'right'}>
                <Image float={'left'} width={20} src={espressomac} alt="Espresso Macchiato" />
                <Text className="coffeemenu">
                    Espresso Macchiato
                </Text>
                <Text className="coffeedesc" >
                    Rich Espresso With Milk and Foam
                </Text>
                <Text className="cost">
                    $3.67
                </Text>
            </Container>
            <Container className={'chocmocha'} paddingTop={'5rem'} marginRight={'4rem'} paddingLeft={'8rem'} float={'left'}>
                <Image float={'left'} width={20} src={chocmocha} alt="Chocolate Mocha" />
                <Text className="coffeemenu">
                    White Chocolate Mocha
                </Text>
                <Text className="coffeedesc" >
                    Espresso, White Chocolate, Milk, Ice and Cream
                </Text>
                <Text className="cost">
                    $2.79
                </Text>
            </Container>
            <Container className={'caramellatte'} paddingTop={'5rem'} paddingRight={'8rem'} marginLeft={'4rem'} float={'right'}>
                <Image float={'left'} width={20} src={caramellatte} alt="Caramel Latte" />
                <Text className="coffeemenu">
                    Iced Caramel Latte
                </Text>
                <Text className="coffeedesc" >
                    Espresso. Milk, Ice and Caramel Sauce
                </Text>
                <Text className="cost">
                    $4.67
                </Text>
            </Container>
            <Container className={"menubutton"}>
                <Button background={'#C7A17A'}>
                    <Link href={"./menu"}>View Menu</Link>
                </Button>
            </Container>
        </Box>
    )
}
export default StoreSum;