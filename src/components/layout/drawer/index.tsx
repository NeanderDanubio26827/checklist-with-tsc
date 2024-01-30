import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    useBreakpointValue,
    DrawerOverlay,
    DrawerHeader,
} from '@chakra-ui/react';
import React from 'react';
import { MenuLateral } from '../menulateral';

interface IDrawer {
    onClick: () => void;
    isOpen: boolean;
}

export const MyDrawer: React.FC<IDrawer> = (props) => {
    const isSmScreen = useBreakpointValue({ base: false, sm: false, lg: true, md: true, xl: true });

    return (
        <>
            {isSmScreen || (
                <Flex
                //display={{ xl: 'none', lg: 'none', md: 'none', sm: 'flex' }}
                >
                    <Drawer
                        isOpen={props.isOpen}
                        placement='left'
                        onClose={props.onClick}

                    >
                        <DrawerOverlay />
                        <DrawerContent
                            //bg={"#276749"}
                            //border={'1px solid red'}
                            //p={4}
                            maxW={'fit-content'}

                        >
                            <DrawerHeader 
                            bg={"#276749"}
                            >
                                <DrawerCloseButton
                                    //border={'1px solid red'}
                                    color={'#FFFFFF'}
                                    _hover={{
                                        transform: "scale(1.0)",
                                        bgColor: "white",
                                        textColor: "black",
                                        cursor: "pointer",
                                        transition: ".9s",
                                      }}

                                />
                            </DrawerHeader>

                            <DrawerBody
                                padding={0}

                            >
                                <MenuLateral
                                    isOpen={props.isOpen}
                                    handleToggle={props.onClick}
                                //border={'1px solid yellow'}
                                //margin={0}

                                />
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            )}
        </>
    );
};
