import { Flex, VStack } from "@chakra-ui/react";
import React, { ChangeEvent,  useState } from "react";
import { TbMilitaryRank, TbNumber } from "react-icons/tb";
import { GiMilitaryFort } from "react-icons/gi";
import { LabelForm } from "../componentesForm/labels";
import { LabelsMot } from "./labels";
import { InputMot } from "./inputs";
import { TitleCadMot } from "./titlePageCadMot";
import { BiPencil } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { BotaoCadastrar } from "./botaoCadastrar";
import { api } from "../../modules/global/services/api";


interface IFormCadMot {
    isOpen: boolean;
}


export const FormCadMot: React.FC<IFormCadMot> = (props) => {
    const [formMotData, setFormMotData] = useState({
        matricula: "",
        nomeCompleto: "",
        nomeGuerra: "",
        numeral: "",
        postoGraduacao: "",
        opm: "",
        status: "",
        NumeroCNH: "",
        CNH: "",

    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormMotData({
            ...formMotData,
            [name]: value,
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        // Criar um novo objeto com os dados do formulário
        const newPost = {
            matricula: formMotData.matricula,
            nomeCompleto: formMotData.nomeCompleto,
            nomeGuerra: formMotData.nomeGuerra,
            postoGraduacao: formMotData.postoGraduacao,
            numeral: formMotData.numeral,
            opm: formMotData.opm,
            status: formMotData.status,
            numeroCNH: formMotData.NumeroCNH,
            CNH: formMotData.CNH,

        };

        await api
            .post('/insertMot/', newPost)
            .then((response) => {
                if (response.status === 200) {
                    alert("Dados enviados com sucesso para a API.");
                    // Limpar o formulário ou fazer qualquer outra ação necessária
                    setFormMotData(
                        {
                            matricula: "",
                            nomeCompleto: "",
                            nomeGuerra: "",
                            numeral: "",
                            postoGraduacao: "",
                            opm: "",
                            status: "",
                            NumeroCNH: "",
                            CNH: "",
                        });
                } else {
                    alert("Erro ao enviar dados para a API.");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("Erro ao enviar dados para a API.");
            })
            .finally(() => {
                setIsLoading(false);
            });
        
    }
    return (
        <>
            {/* <FlexMenor /> */}
            <Flex
                pl={4}
                mt={6}
                borderRadius={"8px"}
                borderTopLeftRadius={0}
                w={{

                    lg: props.isOpen ? "83vw" : "93vw",
                    md: props.isOpen ? "83vw" : "93vw",
                    //sm: props.isOpen ? "83vw" : "93vw"

                }}
                transitionDuration="1.0s"
                minHeight="645px"
                height={'fit-content'}
                position="relative"
                borderBottom="1px solid rgba(0, 0, 0, 0.5)"
                boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
                bg={'white'}
                align={'center'}
                justify={{ base: 'center', sm: 'left', md: 'center', lg: 'initial', xl: 'center' }}
            //gap={{sm: 2, xl: 8, lg: 4, md: 4, base: 2}}

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
                    <TitleCadMot />
                </Flex>
                <Flex
                    w={{ sm: '100%' }}
                    justifyContent={{ xl: 'left', lg: 'left', md: 'left', sm: 'space-between' }}
                    flexDirection={{ xl: 'row', lg: 'row', md: 'column', sm: 'column' }}
                    gap={{ xl: 15, lg: 15, md: 15, sm: 0 }}
                    pt={{ xl: 5, lg: 5, md: 20, sm: 5 }}
                >

                    <VStack
                        pt={{ xl: 15, lg: 15, md: 15, sm: 20 }}
                        pl={4}
                        gap={2}
                        align={{ base: "flex-start" }} // Ajuste a alinhamento conforme necessário
                    >
                        <LabelsMot label='OPM' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot placeholder="Ex: 2°cia/15°BPM" icon={<GiMilitaryFort />} value={formMotData.opm} name={'opm'}
                                onChange={handleInputChange} />

                        </Flex>

                        <LabelsMot label='Nome Completo' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot placeholder="Nome completo" icon={<BsPersonFill />} value={formMotData.nomeCompleto} name={"nomeCompleto"}
                                onChange={handleInputChange} />

                        </Flex>

                        <LabelsMot label='Nome de Guerra' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot placeholder="Nome de guerra" icon={<BsPersonFill />} value={formMotData.nomeGuerra} name={"nomeGuerra"}
                                onChange={handleInputChange} />

                        </Flex>

                        
                    </VStack>

                    <VStack
                        pt={{ xl: 15, lg: 15, md: 15, sm: 15 }}
                        pl={4}
                        gap={2}
                        align={{ base: "flex-start" }} // Ajuste a alinhamento conforme necessário

                    >
                        <LabelsMot label='Posto/Graduação' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot placeholder="Ex: SD, CB, etc" icon={<TbMilitaryRank />} value={formMotData.postoGraduacao} name={"postoGraduacao"}
                                onChange={handleInputChange} />

                        </Flex>
                        <LabelsMot label='Numeral' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot placeholder="Numeral" icon={<TbNumber />} value={formMotData.numeral} name={'numeral'} onChange={handleInputChange} />

                        </Flex>


                        <LabelsMot label='Matrícula' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot placeholder="Ex: xxx.xxx-x-x" icon={<BiPencil />} value={formMotData.matricula} name={"matricula"} onChange={handleInputChange} />

                        </Flex>

                    </VStack>
                    <VStack
                        pt={{ xl: 15, lg: 15, md: 15, sm: 15 }}
                        pl={4}
                        gap={2}
                        align={{ base: "flex-start" }} // Ajuste a alinhamento conforme necessário

                    >
                        <LabelsMot label='N° CNH' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot placeholder="Ex: xxx.xxx-x-x" icon={<BiPencil />} value={formMotData.NumeroCNH} name={"NumeroCNH"} onChange={handleInputChange} />

                        </Flex>
                        <LabelForm label='CNH' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <InputMot placeholder="Ex: A, AB, etc." icon={<BiPencil />} value={formMotData.CNH} name={"CNH"} onChange={handleInputChange} />
                        </Flex>
                        <LabelsMot label='Status' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot placeholder="Ex: SD, CB, etc" icon={<TbMilitaryRank />} value={formMotData.status} name={"status"}
                                onChange={handleInputChange} />

                        </Flex>

                    </VStack>
                    <Flex
                        position={{ base: 'relative', sm: 'relative', lg: 'absolute', md: 'absolute', xl: 'absolute' }}
                        bottom={2}
                        mb={2}
                        mt={{ sm: 6 }}
                        align={{ xl: 'center', lg: 'center', md: 'center', sm: 'center' }}
                        justifyContent={{ xl: 'space-evenly', lg: 'space-evenly', md: 'space-between', sm: 'center' }}
                        flexDirection={{ xl: 'row', lg: 'row', md: 'row', sm: 'row' }}
                        h={'fit-content'}
                        w={'100%'}
                        gap={1}
                    //border={'1px solid red'}
                    >
                        <Flex>
                            <Flex align={'center'} justify={'center'}>
                                <BotaoCadastrar onClick={handleSubmit} />
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>

            </Flex>
        </>
    )
}