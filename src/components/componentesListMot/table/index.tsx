import React from "react";
import {
    Flex,
    Text,
    Button,
    Select,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    IconButton,
    Img,
    HStack,
} from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./table.modules.css";
import { ThTable } from "./th";
import { TdTable } from "./td";
import { BotaoAlert } from "../../componentesFicha/registrosMedicos/buttons/buttonAlert";
import { IconeInfo } from "../../componentesFicha/registrosMedicos/icones/iconeInfo";
import { IconeEditar } from "../../componentesFicha/registrosMedicos/icones/iconeEditar";
import { IconeBusca } from "../../componentesFicha/registrosMedicos/icones/iconeBusca";
import { IconeDeletar } from "../../componentesFicha/registrosMedicos/icones/iconeDeletar";
import { IconeRelatorio } from "../../componentesFicha/registrosMedicos/icones/iconeRelatorio";

export interface ITableListMot {
    isOpen: boolean;
}

export interface IdadosMot {
    matricula: string;
    nomeCompleto: string;
    nomeGuerra: string;
    numeral: string;
    postoGraduacao: string;
    opm: string;
    status: string;
    acoes: string;
}

export const TableListMot: React.FC<{ bool: ITableListMot; dados: IdadosMot[] }> = (
    props
) => {
    const { bool, dados } = props;


    return (
            <TableContainer
                //pt={4}
                w={{
                    xl: bool.isOpen ? "79vw" : "89vw",
                    lg: bool.isOpen ? "79vw" : "89vw",
                    md: bool.isOpen ? "79vw" : "89vw",
                }}
                transitionDuration="1.0s"
                border={"1px solid rgba(234, 236, 240, 1)"}
            >
                <Table variant="simple">
                    <TableCaption textAlign={"left"} p={0}>
                        <Flex justify="space-between">
                            1-4 de 04 itens
                            <Flex p={0} color={"rgba(52, 64, 84, 1)"}>
                                <Button
                                    mr={2}
                                    fontSize={"12px"}
                                    fontWeight={"none"}
                                    bg={"none"}
                                    border={"1px solid"}
                                    borderColor={"rgba(208, 213, 221, 1)"}
                                    borderRadius={"8px"}
                                    color={"rgba(52, 64, 84, 1)"}
                                >
                                    anterior
                                </Button>
                                <Button
                                    ml={2}
                                    fontSize={"12px"}
                                    fontWeight={"none"}
                                    bg={"none"}
                                    border={"1px solid"}
                                    borderColor={"rgba(208, 213, 221, 1)"}
                                    color={"rgba(52, 64, 84, 1)"}
                                    borderRadius={"8px"}
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
                            <ThTable title="Matrícula" customIcon={<AiOutlineArrowDown />} />
                            <ThTable title="Nome Completo" customIcon={<AiOutlineArrowDown />} />
                            <ThTable title="Nome de Guerra" customIcon={<AiOutlineArrowDown />} />
                            <ThTable title="Numeral" customIcon={<AiOutlineArrowDown />} />
                            <ThTable title="Posto/Graduação" customIcon={<AiOutlineArrowDown />} />
                            <ThTable title="OPM" customIcon={<AiOutlineArrowDown />} />
                            <ThTable title="Status" customIcon={<AiOutlineArrowDown />} />
                            <ThTable title="Ações" customIcon={<AiOutlineArrowDown />} />
                        </Tr>
                    </Thead>

                    <Tbody>
                        {dados.map((item, index) => (
                            <Tr key={index}>
                                <TdTable text={item.matricula} />
                                <TdTable text={item.nomeCompleto} />
                                <TdTable fontWeight={'600'} text={item.nomeGuerra} {...props} />
                                <TdTable text={item.numeral} />
                                <TdTable text={item.postoGraduacao} />
                                <TdTable text={item.opm} />
                                <TdTable customIcons={[<BotaoAlert text={item.status} />, item.status === 'Baixado' ? <IconeInfo /> : undefined]} />
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
