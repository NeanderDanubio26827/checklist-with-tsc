import React, { useState } from "react";
import { DashHeader } from "../../../components/layout/dashHeader";
import { MenuLateral } from "../../../components/layout/menulateral";
import { Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FooterCetic } from "../../../components/componentsCadastro/footerImgCETIC";
import { MyDrawer } from "../../../components/layout/drawer";
import { ListVtr } from "../../../components/componentesListaVtr";

interface IListVtr {
    onOpen: () => void;
    onClose: () => void;
}

export const ListVtrMain: React.FC<IListVtr> = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {

        setIsOpen(!isOpen);
    };

    return (
        <>
            <Flex
                bg="rgba(248, 249, 250, 1)"
                w={'content'}
                h={'auto'}
            >
                <Grid
                    templateAreas={`"nav header"
                                    "nav main"
                                    "nav footer"`}
                    gap={{ lg: 8, md: 8, sm: 2 }}
                    mt={{ lg: 4, md: 4, sm: 2 }}
                    ml={{ lg: 4, md: 4, sm: 0 }}
                    mr={{ lg: 4, md: 4, sm: 0 }}
                >
                    <GridItem area={'header'}>
                        <DashHeader isOpen={isOpen} handleToggle={handleToggle} />
                    </GridItem>
                    <GridItem area={'nav'} >
                        <Flex
                            display={{ xl: 'flex', lg: 'flex', md: 'flex', sm: 'none' }}
                        >

                            <MenuLateral isOpen={isOpen} handleToggle={handleToggle} />
                        </Flex>
                        <Flex
                            display={{ xl: 'none', lg: 'none', md: 'none', sm: 'flex' }}
                        >
                            <MyDrawer isOpen={isOpen} onClick={handleToggle} />
                        </Flex>
                    </GridItem>
                    <GridItem area={'main'}>
                        <ListVtr isOpen={isOpen} />
                    </GridItem>
                    <GridItem area={'footer'} >
                        <Center>
                            <FooterCetic />
                        </Center>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    );
}
