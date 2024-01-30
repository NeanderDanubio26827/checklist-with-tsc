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


interface ITableListAlt {
    isOpen: boolean;
}

export interface IdadosAlt {
    Prefixo: string,
    Km: string,
    Motorista: string,
    Numeral: string,
    Matricula: string,
    Graduacao: string,
    Turno: string,
    HoraInicial: string,
    Area: string,
    Cartao: string,
    Autonomia: string,
    VidroTraseiro: string,
    TMD: string,
    Pneus: string,
    Step: string,
    Farois: string,
    Adesivo: string,
    Setas: string,
    Parabrisa: string,
    Capo: string,
    Sinais: string,
    Laternas: string,
    Retrovisores: string,
    Ferramentas: string,
    Image: null,
}

export const TableListAlt: React.FC<{ bool: ITableListAlt; dados: IdadosAlt[] }> = (props) => {
    const { bool, dados } = props;

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
                        <ThTable title="Prefixo" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Km" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Motorista" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Numeral" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Matrícula" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Graduação" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Turno" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="OPM" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Horia Inicial" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Area" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Cartao" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Autonomia" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Vidro Traseiro" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="TMD" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Pneus" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Step" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Faróis" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Adesivo" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Setas" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Parabrisa" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Sinais" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Capô" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Laternas" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Retrovisores" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Ferramentas" customIcon={<AiOutlineArrowDown />} />
                        <ThTable title="Ações" customIcon={<AiOutlineArrowDown />} />
                    </Tr>


                </Thead>

                <Tbody>
                        {dados.map((item, index) => (
                            <Tr key={index}>
                                <TdTable text={item.Prefixo} fontWeight={'600'}  {...props}/>
                                <TdTable text={item.Km} />
                                <TdTable fontWeight={'600'} text={item.Motorista} {...props} />
                                <TdTable text={item.Numeral} />
                                <TdTable text={item.Matricula} />
                                <TdTable text={item.Graduacao} />
                                <TdTable text={item.Turno} />
                                <TdTable text={item.OPM} />
                                <TdTable text={item.HoraInicial} />
                                <TdTable text={item.Area} />
                                <TdTable text={item.Cartao} />
                                <TdTable text={item.Autonomia} />
                                <TdTable text={item.VidroTraseiro} />
                                <TdTable text={item.TMD} />
                                <TdTable text={item.Pneus} />
                                <TdTable text={item.Step} />
                                <TdTable text={item.Farois} />
                                <TdTable text={item.Adesivo} />
                                <TdTable text={item.Setas} />
                                <TdTable text={item.Parabrisa} />
                                <TdTable text={item.Sinais} />
                                <TdTable text={item.Capo} />
                                <TdTable text={item.Laternas} />
                                <TdTable text={item.Retrovisores} />
                                <TdTable text={item.Ferramentas} />
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

