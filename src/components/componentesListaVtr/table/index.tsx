import React from "react";
import {
    Flex, Text, Button, Select, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, IconButton, Img, HStack
} from "@chakra-ui/react";
import { AiOutlineArrowDown } from 'react-icons/ai';
import './table.modules.css'
import { ThTable } from "./th";
import { TdTable } from "./td";
import { BotaoAlert } from "../../componentesFicha/registrosMedicos/buttons/buttonAlert";
import { IconeInfo } from "../../componentesFicha/registrosMedicos/icones/iconeInfo";
import { IconeEditar } from "../../componentesFicha/registrosMedicos/icones/iconeEditar";
import { IconeBusca } from "../../componentesFicha/registrosMedicos/icones/iconeBusca";
import { IconeDeletar } from "../../componentesFicha/registrosMedicos/icones/iconeDeletar";
import { IconeRelatorio } from "../../componentesFicha/registrosMedicos/icones/iconeRelatorio";

interface ITableListVtr {
    isOpen: boolean;
}

export interface IdadosVtr {
    Placa: string;
    Modelo: string;
    Ano: number;
    Chassi: string;
    Prefixo: string;
    OPM: string;
    Km: number;
    Vale: string;
    Status: string;
    acoes: string;
}

export const TableListVtr: React.FC<{ bool: ITableListVtr; dadosVtr: IdadosVtr[] }> = (props) => {
    const { bool, dadosVtr } = props;
    return (
        <TableContainer
            //p={0}
            pt={4}
            w={{
                xl: bool.isOpen ? "79vw" : "89vw",
                lg: bool.isOpen ? "79vw" : "89vw",
                md: bool.isOpen ? "79vw" : "89vw", 
             }}
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
                        <ThTable title="Placa" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Modelo" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Ano" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Chassi" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Prefixo" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="OPM" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Km" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Status" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Vale" customIcon={<AiOutlineArrowDown/>} />
                        <ThTable title="Ações" customIcon={<AiOutlineArrowDown/>} />
                        
                    </Tr>
                </Thead>

                <Tbody>
                    {dadosVtr.map((item, index) => (
                        <Tr key={index}>
                            <TdTable text={item.Placa} />
                            <TdTable text={item.Modelo} />
                            <TdTable text={`${item.Ano}`} />
                            <TdTable text={item.Chassi} />
                            <TdTable text={item.Prefixo} />
                            <TdTable text={item.OPM} />
                            <TdTable text={`${item.Km}`} />
                            <TdTable  customIcons={[<BotaoAlert text={`${item.Status}`} />,item.Status === 'Baixada' ? <IconeInfo/> : null]} />
                            <TdTable  customIcons={[<BotaoAlert text={`${item.Vale}`} />,item.Vale === 'Sim' ? <IconeInfo/> : null ]}/>
                            
                            <TdTable
                                customIcons={[
                                    <IconeBusca />,
                                    <IconeRelatorio />,
                                    <IconeEditar />,
                                    <IconeDeletar />,
                                ]}
                            />
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>

    );

};

