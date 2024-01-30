import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import {  IdadosMot, TableListMot } from "./table";

import { TitleListMot } from "./title";
import useApi from "../../api/get";

export interface IListMot {
    isOpen: boolean;
}

export const ListMot: React.FC<IListMot> = (props) => {

    const [motData, setMotData] = useState<IdadosMot[]>([]);

    //const motApiUrl = "http://localhost/selectMot/";
    const motApiUrl = "/selectMot/";
    const { data: fetchedMotData, loading: motLoading } = useApi(motApiUrl);

    useEffect(() => {
        if (fetchedMotData !== undefined && !motLoading) {
            setMotData(fetchedMotData);
        }
    }, [fetchedMotData, motLoading]);


    return (
        <>
            {/*             <FlexMenor /> */}
            <Flex
                pl={4}
                mt={6}
                borderRadius={"8px"}
                borderTopLeftRadius={0}
                w={{

                    lg: props.isOpen ? "83vw" : "93vw",
                    md: props.isOpen ? "83vw" : "93vw",
                    sm: props.isOpen ? "93vw" : "93vw"
                }}
                transitionDuration="1.0s"
                minHeight="700px"
                height={'fit-content'}
                position="relative"
                borderBottom="1px solid rgba(0, 0, 0, 0.5)"
                boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
                flexDirection={{ base: 'column', lg: 'row', md: 'row', sm: 'column' }}
                bg={'white'}
            //gap={4}
            >
                <Flex
                    position="absolute"
                    top={0}
                    left={0}
                    width="32px"
                    height="32px"
                    bg={"#D9D9D9"}
                />
                <Flex
                    position="absolute"
                    top={"32px"}
                    left={"32px"}
                    fontWeight={"700"}
                >
                    <TitleListMot />
                </Flex>


                <Flex
                    gap={{ xl: 10, lg: 10, md: 10, sm: 10 }}
                    marginLeft={4}
                    marginTop={20}
                    justifyContent={{ xl: 'space-evenly', lg: 'space-evenly', md: 'space-between', sm: 'space-between' }}
                    flexDirection={{ xl: 'row', lg: 'row', md: 'column', sm: 'column' }}
                //border={'1px solid red'}
                >
                    {motLoading && <Button isLoading colorScheme="teal" variant="none" />}

                    <Flex>
                        {!motLoading && <TableListMot bool={{ isOpen: props.isOpen }} dados={motData} />}
                    </Flex>
                    <Flex
                        position={{ base: 'relative', sm: 'relative', lg: 'absolute', md: 'absolute', xl: 'absolute' }}
                        bottom={2}
                        mb={4}
                        alignItems={{ xl: 'center', lg: 'center', md: 'center', sm: 'left' }}
                        //justifyContent={'space-around'}
                        justifyContent={{ xl: 'space-evenly', lg: 'space-evenly', md: 'space-between', sm: 'center' }}
                        flexDirection={{ xl: 'row', lg: 'row', md: 'row', sm: 'column' }}
                        h={'fit-content'}
                        w={'100%'}
                        gap={2}
                    >
                        {/* <LabelForm label="Imagens" display={{ sm: 'flex', xl: 'none', lg: 'none', md: 'none' }} {...props} /> */}

                        {/* <Flex align={'center'} justify={'center'}>
                            <BotaoCadastrar />
                        </Flex> */}
                    </Flex>

                </Flex>
            </Flex>
        </>
    )
}