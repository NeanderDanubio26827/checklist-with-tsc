import { Flex, VStack } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { TbNumber } from "react-icons/tb";
import { GiMilitaryFort } from "react-icons/gi";
import { RiPoliceCarFill } from "react-icons/ri";
import { MdCarCrash } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { InputMot } from "../componentesMot/inputs";
import { LabelsMot } from "../componentesMot/labels";
import { BsCalendarDate } from "react-icons/bs";
import { TitleCadVtr } from "./title";
import { BotaoCadastrar } from "../componentesForm/botaoCadastrar";
import { api } from "../../modules/global/services/api";
import { boolean } from "zod";

interface IFormMot {
    isOpen: boolean;
}

export const FormCadVtr: React.FC<IFormMot> = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [formVtrData, setFormVtrData] = useState({
        Placa: "",
        Modelo: "",
        Ano: "",
        Chassi: "",
        matricula: "",
        OPM: "",
        Prefixo: "",
        Km: "",
        Vale: "",
        Combustivel: "",
        Tipo: "",
        Status: "",
        Image: "",

    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormVtrData({
            ...formVtrData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        // Criar um novo objeto com os dados do formulário
        const newPost = {
            Placa: formVtrData.Placa,
            Modelo: formVtrData.Modelo,
            Ano: formVtrData.Ano,
            Chassi: formVtrData.Chassi,
            Prefixo: formVtrData.Prefixo,
            OPM: formVtrData.OPM,
            Km: formVtrData.Km,
            Vale: formVtrData.Vale,
            Combustivel: formVtrData.Combustivel,
            Tipo: formVtrData.Tipo,
            Status: formVtrData.Status,
            Image: formVtrData.Image,

        };
        
        await api
            .post('/insertV/', newPost)
            .then((response) => {
                if (response.status === 200) {
                    alert("Dados enviados com sucesso para a API.");
                    // Limpar o formulário ou fazer qualquer outra ação necessária
                    setFormVtrData(
                        {
                            Placa: "",
                            Modelo: "",
                            Ano: "",
                            Chassi: "",
                            matricula: "",
                            OPM: "",
                            Prefixo: "",
                            Km: "",
                            Vale: "",
                            Combustivel: "",
                            Tipo: "",
                            Status: "",
                            Image: "",
    
                        });
                        setIsLoading(true)
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
    };

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
                    <TitleCadVtr />
                </Flex>
                <Flex
                    w={{ sm: '100%' }}
                    justifyContent={{ xl: 'left', lg: 'left', md: 'left', sm: 'space-between' }}
                    flexDirection={{ xl: 'row', lg: 'row', md: 'column', sm: 'column' }}
                    gap={{ xl: 20, lg: 20, md: 20, sm: 0 }}
                    pt={{ xl: 5, lg: 5, md: 20, sm: 5 }}
                >

                    <VStack
                        //border={'1px solid red'}
                        pt={{ xl: 15, lg: 15, md: 15, sm: 20 }}
                        pl={4}
                        gap={2}
                        align={{ base: "flex-start" }} // Ajuste a alinhamento conforme necessário
                    >
                        <LabelsMot label='Placa' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="Placa" value={formVtrData.Placa} placeholder="Ex: AAA0A00" icon={<BiPencil />} {...props} />

                        </Flex>

                        <LabelsMot label='Modelo' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="Modelo" value={formVtrData.Modelo} placeholder="Ex: Duster" icon={<RiPoliceCarFill />} />

                        </Flex>

                        <LabelsMot label='Ano' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="Ano" value={formVtrData.Ano} placeholder="Ex: 2009" icon={< BsCalendarDate />} />

                        </Flex>

                        <LabelsMot label='Chassi' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="Chassi" value={formVtrData.Chassi} placeholder="Chassi" icon={<TbNumber />} />

                        </Flex>

                    </VStack>

                    <VStack
                        //border={'1px solid red'}
                        pt={{ xl: 15, lg: 15, md: 15, sm: 15 }}
                        pl={4}
                        gap={2}
                        align={{ base: "flex-start" }} // Ajuste a alinhamento conforme necessário

                    >
                        <LabelsMot label='Prefixo' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="Prefixo" value={formVtrData.Prefixo} placeholder="Ex: 18190" icon={<BiPencil />} />

                        </Flex>

                        <LabelsMot label='OPM' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="OPM" value={formVtrData.OPM} placeholder="Ex: 2°cia/18°Bpm" icon={<GiMilitaryFort />} />

                        </Flex>
                        <LabelsMot label='Km' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="Km" value={formVtrData.Km} placeholder="Ex: 18000" icon={<BiPencil />} {...props} />

                        </Flex>
                        <LabelsMot label='Tipo Combustível' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="Combustivel" value={formVtrData.Combustivel} placeholder="Ex: Gasolina, Etanol etc." icon={<BiPencil />} {...props} />

                        </Flex>

                    </VStack>
                    <VStack
                        //border={'1px solid red'}
                        pt={{ xl: 15, lg: 15, md: 15, sm: 15 }}
                        pl={4}
                        gap={2}
                        align={{ base: "flex-start" }} // Ajuste a alinhamento conforme necessário

                    >
                        <LabelsMot label='Tipo' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="Tipo" value={formVtrData.Tipo} placeholder="Ex: locada etc." icon={<BiPencil />} />

                        </Flex>

                        <LabelsMot label='Status' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputMot onChange={handleInputChange} name="Status" value={formVtrData.Status} placeholder="Ex: Operante, Baixada etc." icon={<MdCarCrash />} />

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
                        <Flex align={'center'} justify={'center'}>
                            <BotaoCadastrar onClick={handleSubmit} />
                        </Flex>
                    </Flex>

                </Flex>

            </Flex>
        </>
    )
}

