import React from "react";
import {
    Flex, Text, Button, Select, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, IconButton, Img, HStack
} from "@chakra-ui/react";
import { AiOutlineArrowDown } from 'react-icons/ai';
import './table.modules.css'
import { IconeDeletar } from "../registrosMedicos/icones/iconeDeletar";
import { IconeRelatorio } from "../registrosMedicos/icones/iconeRelatorio";
import { IconeEditar } from "../registrosMedicos/icones/iconeEditar";
import { IconeBusca } from "../registrosMedicos/icones/iconeBusca";
import { IconeInfo } from "../registrosMedicos/icones/iconeInfo";
import { ThTable } from "./th";
import { TdTable } from "./td";
import { BotaoAlert } from "../registrosMedicos/buttons/buttonAlert";


interface ITable {
    isOpen: boolean;}

export const TableFicha: React.FC<ITable> = (props) => {
    return (
        <TableContainer
            //p={0}
            pt={4}
            w={ props.isOpen ? "79vw" : "89vw" }
            transitionDuration="1.0s"
            border={'1px solid rgba(234, 236, 240, 1'}
            
        >
            <Table
                variant='simple'
            >
                <TableCaption textAlign={"left"} p={0}>
                    <Flex justify="space-between">
                        1-4 de 04 itens

                        <Flex p={0} color={'rgba(52, 64, 84, 1)'}>
                            <Button
                                mr={2}
                                fontSize={"12px"}
                                //borderRightRadius={0}
                                fontWeight={"none"}
                                bg={"none"}
                                border={"1px solid"}
                                borderColor={"rgba(208, 213, 221, 1)"}                                
                                borderRadius={'8px'}
                                color={'rgba(52, 64, 84, 1)'}
                            >
                                anterior
                            </Button>
                            <Button
                                ml={2}
                                fontSize={"12px"}
                                //borderLeftRadius={0}
                                fontWeight={"none"}
                                bg={"none"}
                                border={"1px solid"}
                                borderColor={"rgba(208, 213, 221, 1)"}
                                color={'rgba(52, 64, 84, 1)'}
                                borderRadius={'8px'}
                                
                            >
                                próximo
                            </Button>
                        </Flex>
                    </Flex>
                </TableCaption>

                <Thead>
                    <Tr
                        borderTop="1px solid rgba(234, 236, 240, 1)"
                        borderBottom="1px solid rgba(234, 236, 240, 1)"
                        
                        bg="rgba(252, 252, 253, 1)"
                        >
                        <ThTable title="Ordem" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Tipo" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="subtipo" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="CID" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="CRM Médico" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Início" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Término" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Dias" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Informações" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Status" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="ações" customIcon={<AiOutlineArrowDown/>} />
                        
                    </Tr>
                </Thead>

                <Tbody                             
                >                        
                    <Tr >
                        <TdTable text="1"  />
                        <TdTable text="Repouso"  />
                        <TdTable text="Própria" />
                        <TdTable text={'S37'} customIcons={[<IconeInfo/>]}/>
                        <TdTable text="CRM2356" />
                        <TdTable text="01/02/2012"  />
                        <TdTable text="02/04/2013" />
                        <TdTable text="03" />
                        <TdTable customIcons={[<BotaoAlert text="Completas" />,<IconeInfo/> ]} ></TdTable>
                        <TdTable customIcons={[<BotaoAlert text="Pendente" />]} ></TdTable>
                        <TdTable customIcons={[<IconeBusca />,<IconeRelatorio />,<IconeEditar />,<IconeDeletar />]}/>
                        
                    </Tr>
                    <Tr >
                        <TdTable text="1"  />
                        <TdTable text="Repouso"  />
                        <TdTable text="Própria" />
                        <TdTable text={'S37'} customIcons={[<IconeInfo/>]}/>
                        <TdTable text="CRM2356" />
                        <TdTable text="01/02/2012"  />
                        <TdTable text="02/04/2013" />
                        <TdTable text="03" />
                        <TdTable customIcons={[<BotaoAlert text="Completas" />,<IconeInfo/> ]} ></TdTable>
                        <TdTable customIcons={[<BotaoAlert text="Histórico" />]} ></TdTable>
                        <TdTable customIcons={[<IconeBusca />,<IconeRelatorio />,<IconeEditar />,<IconeDeletar />]}/>
                        
                    </Tr>
                    <Tr >
                        <TdTable text="3"  />
                        <TdTable text="Repouso"  />
                        <TdTable text="Própria" />
                        <TdTable text={'S37'} customIcons={[<IconeInfo/>]}/>
                        <TdTable text="CRM2356" />
                        <TdTable text="01/02/2012"  />
                        <TdTable text="02/04/2013" />
                        <TdTable text="03" />
                        <TdTable customIcons={[<BotaoAlert text="Atual" />]} ></TdTable>
                        <TdTable customIcons={[<BotaoAlert text="Pendente" />]} ></TdTable>
                        <TdTable customIcons={[<IconeBusca />,<IconeRelatorio />,<IconeEditar />,<IconeDeletar />]}/>
                        
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>

    );

};

