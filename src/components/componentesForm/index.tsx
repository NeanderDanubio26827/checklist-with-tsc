import { Flex, VStack } from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";

import { LabelForm } from "./labels";
import { InputForm } from "./inputs";
import { TbMilitaryRank } from "react-icons/tb";
import { RiPoliceCarFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import { MdNumbers } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { FaCcMastercard } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";
import { GiSmartphone } from "react-icons/gi";
import { SelectForm } from "./select";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbNumber } from "react-icons/tb";
import { CarSimple, Headlights } from "phosphor-react";
import { FaTools } from "react-icons/fa";
import { PiCarSimpleDuotone, PiSirenDuotone } from "react-icons/pi";
import { MdOutlineWifiFind } from "react-icons/md";
import { TbCarCrash } from "react-icons/tb";
import { InputImg } from "./inputImg";
import { IoCloudUpload } from "react-icons/io5";
import { TitleAltVtr } from "./title";
import { BiPencil } from "react-icons/bi";
import { SlClock } from "react-icons/sl";
import { BotaoCadastrar } from "./botaoCadastrar";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { api } from "../../modules/global/services/api";
import useApi from "../../api/get";


interface IFormAltVtr {
    isOpen: boolean;
}

interface IdadosMot {
    matricula: string;
    nomeCompleto: string;
    nomeGuerra: string;
    numeral: string;
    postoGraduacao: string;
    opm: string;
    status: string;
    acoes: string;
}


export const FormAltVtr: React.FC<IFormAltVtr> = (props) => {

    const auth = getUserLocalStorage()
    const [motData, setMotData] = useState<IdadosMot[]>([]);

    const motApiUrl = "/selectMotOne/" + `${auth?.login}`;
    console.log(motApiUrl)
    const { data: fetchedMotData, loading: motLoading } = useApi(motApiUrl);

    useEffect(() => {
        if (fetchedMotData !== undefined && !motLoading) {
            setMotData(fetchedMotData);
        }
    }, [fetchedMotData, motLoading]);

    const { nomeCompleto, numeral, graduacao, opm, matricula } = motData;
    const [isloading, setIsLoading] = useState<boolean>(false)

    const [formAltData, setFormAltData] = useState({
        Prefixo: "",
        Km: "",
        Motorista: "",
        Numeral: "",
        Matricula: "",
        Graduacao: '',
        Turno: "",
        HoraInicial: "",
        Area: "",
        Cartao: "",
        Autonomia: "",
        VidroTraseiro: "",
        TMD: "",
        Pneus: '',
        Step: "",
        Farois: "",
        Adesivo: '',
        Setas: "",
        Parabrisa: "",
        Capo: "",
        Sinais: "",
        Laternas: "",
        Retrovisores: "",
        Ferramentas: "",
        Status: "",
        Image: "",

    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormAltData({
            ...formAltData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = {
            Matricula: auth?.login,

        }
        // Criar um novo objeto com os dados do formulário
        const newPost = {
            Prefixo: formAltData.Prefixo,
            Km: formAltData.Km,
            Motorista: formAltData.Motorista,
            Numeral: formAltData.Numeral,
            Matricula: data.Matricula,
            Graduacao: formAltData.Graduacao,
            Turno: formAltData.Turno,
            HoraInicial: formAltData.HoraInicial,
            Area: formAltData.Area,
            Cartao: formAltData.Cartao,
            Autonomia: formAltData.Autonomia,
            VidroTraseiro: formAltData.VidroTraseiro,
            TMD: formAltData.TMD,
            Pneus: formAltData.Pneus,
            Step: formAltData.Step,
            Farois: formAltData.Farois,
            Adesivo: formAltData.Adesivo,
            Setas: formAltData.Setas,
            Parabrisa: formAltData.Parabrisa,
            Capo: formAltData.Capo,
            Sinais: formAltData.Sinais,
            Laternas: formAltData.Laternas,
            Retrovisores: formAltData.Retrovisores,
            Ferramentas: formAltData.Ferramentas,
            Status: formAltData.Status,
            Image: formAltData.Image,

        };
        setIsLoading(true);

        await api
            .post('/insertAlt/', newPost)
            .then((response) => {
                if (response.status === 200) {
                    alert("Dados enviados com sucesso para a API.");
                    // Limpar o formulário ou fazer qualquer outra ação necessária
                    setFormAltData({
                        Prefixo: "",
                        Km: "",
                        Motorista: "",
                        Numeral: "",
                        Matricula: "",
                        Graduacao: '',
                        Turno: "",
                        HoraInicial: "",
                        Area: "",
                        Cartao: "",
                        Autonomia: "",
                        VidroTraseiro: "",
                        TMD: "",
                        Pneus: '',
                        Step: "",
                        Farois: "",
                        Adesivo: '',
                        Setas: "",
                        Parabrisa: "",
                        Capo: "",
                        Sinais: "",
                        Laternas: "",
                        Retrovisores: "",
                        Ferramentas: "",
                        Status: "",
                        Image: "",
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
            {/* {!isloading && <Button isLoading colorScheme="teal" variant="none" />} */}
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
                    <TitleAltVtr />
                </Flex>

                <Flex
                    gap={{ xl: 10, lg: 10, md: 10, sm: 0 }}
                    marginLeft={4}
                    marginTop={20}
                    justifyContent={{ xl: 'space-evenly', lg: 'space-evenly', md: 'space-between', sm: 'space-between' }}
                    flexDirection={{ xl: 'row', lg: 'row', md: 'column', sm: 'column' }}
                //border={'1px solid red'}
                >
                    <VStack

                        pt={4}
                        gap={2}
                        align={{ base: "flex-start" }} // Ajuste a alinhamento conforme necessário
                    >
                        <LabelForm label='Prefixo VTR' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputForm onChange={handleInputChange} name="Prefixo" value={formAltData.Prefixo} placeholder="Prefixo VTR" icon={<TbNumber />} />

                        </Flex>

                        <LabelForm label='KM VTR' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputForm onChange={handleInputChange} name="Km" value={formAltData.Km} placeholder="Km viatura" icon={<SlSpeedometer />} />

                        </Flex>

                        <LabelForm label='Motorista' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputForm onChange={handleInputChange} name="Motorista" value={formAltData.Motorista} placeholder={nomeCompleto} icon={<BsPersonFill />} />

                        </Flex>

                        <LabelForm label='Numeral' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputForm onChange={handleInputChange} name="Numeral" value={formAltData.Numeral} placeholder={numeral} icon={<TbNumber />} />

                        </Flex>

                        <LabelForm label='Graduação' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <SelectForm onChange={handleInputChange} name="Graduacao" value={formAltData.Graduacao} options={['SD PM', 'CB PM', '3°SGT PM', '2°SGT PM', '1°SGT PM', 'ST PM', '2°TEN PM', '1°TEN PM', 'CAP PM', 'MAJ PM', 'Ten CEL PM', 'Cel PM']} param={{ place: graduacao, icon: <TbMilitaryRank /> }} {...props} />

                        </Flex>

                        <LabelForm label='Matrícula' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputForm onChange={handleInputChange} name="Matricula" value={formAltData.Matricula} placeholder={matricula} icon={<BiPencil />} />

                        </Flex>

                    </VStack>

                    <VStack
                        pt={4}
                        gap={2}
                        align={{ base: "flex-start" }} // Ajuste a alinhamento conforme necessário

                    >
                        <LabelForm label='Turno' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <SelectForm onChange={handleInputChange} name="Turno" value={formAltData.Turno} options={['Turno A', 'Turno B', 'IRSO']} param={{ place: 'Turno', icon: <SlClock /> }} {...props} />
                        </Flex>

                        <LabelForm label='Hora Inicial' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputForm onChange={handleInputChange} name="HoraInicial" value={formAltData.HoraInicial} placeholder="Ex: hh:mm" icon={<SlClock />} type='time' {...props} />

                        </Flex>

                        <LabelForm label='Área' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputForm onChange={handleInputChange} name="Area" value={formAltData.Area} placeholder="Área de atuação" icon={<FaMapLocationDot />} />

                        </Flex>

                        <LabelForm label='Cartão ou Vale' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <SelectForm onChange={handleInputChange} name="Cartao" value={formAltData.Cartao} options={['Com alteração', 'Sem Alteração']} param={{ place: ' Cartão ou Vale', icon: <FaCcMastercard /> }} {...props} />

                        </Flex>

                        <LabelForm label='Autonomia' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <InputForm onChange={handleInputChange} name="Autonomia" value={formAltData.Autonomia} placeholder="Autonomia de combustível" icon={<SlSpeedometer />} />
                        </Flex>
                        <LabelForm label='Vidro Traseiro' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <SelectForm onChange={handleInputChange} name="VidroTraseiro" value={formAltData.VidroTraseiro} options={['Com alteração', 'Sem Alteração']} param={{ place: ' Vidro Traseiro', icon: <PiCarSimpleDuotone /> }} {...props} />

                        </Flex>

                    </VStack>

                    <VStack

                        pt={4}
                        gap={2}
                        align={{ base: "flex-start" }} // Ajuste a alinhamento conforme necessário
                    >
                        <LabelForm label='TMD da VTR' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <SelectForm onChange={handleInputChange} name="TMD" value={formAltData.TMD} options={['Com alteração', 'Sem Alteração']} param={{ place: 'TMD da viatura', icon: <GiSmartphone /> }} {...props} />

                        </Flex>

                        <LabelForm label='Pneus' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <SelectForm onChange={handleInputChange} name="Pneus" value={formAltData.Pneus} options={['Com alteração', 'Sem Alteração']} param={{ place: 'Situação dos pneus', icon: <GiFlatTire /> }} {...props} />

                        </Flex>

                        <LabelForm label='Step' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <SelectForm onChange={handleInputChange} name="Step" value={formAltData.Step} options={['Com alteração', 'Sem Alteração']} param={{ place: 'Possui step?', icon: <GiFlatTire /> }} {...props} />

                        </Flex>

                        <LabelForm label='Faróis' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <SelectForm onChange={handleInputChange} name="Farois" value={formAltData.Farois} options={['Com alteração', 'Sem Alteração']} param={{ place: 'Situação dos Faróis', icon: <Headlights /> }} {...props} />

                        </Flex>

                        <LabelForm label='Adesivagem e Funilaria' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <SelectForm onChange={handleInputChange} name="Adesivo" value={formAltData.Adesivo} options={['Com alteração', 'Sem Alteração']} param={{ place: "Adesivos e Lataria", icon: <CarSimple /> }} {...props} />

                        </Flex>

                        <LabelForm label='Setas' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <SelectForm onChange={handleInputChange} name="Setas" value={formAltData.Setas} options={['Com alteração', 'Sem Alteração']} param={{ place: "Setas dianteiras e traseiras", icon: <TbCarCrash /> }} {...props} />

                        </Flex>
                    </VStack>

                    <VStack

                        pt={4}
                        gap={2}
                        align={{ base: "flex-start" }}
                    >


                        <LabelForm label='Parabrisa' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <SelectForm onChange={handleInputChange} name="Parabrisa" value={formAltData.Parabrisa} options={['Com alteração', 'Sem Alteração']} param={{ place: "Parabrisa", icon: <MdOutlineWifiFind /> }} {...props} />

                        </Flex>

                        <LabelForm label='Capô' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <SelectForm onChange={handleInputChange} name="Capo" value={formAltData.Capo} options={['Com alteração', 'Sem Alteração']} param={{ place: "Capô", icon: <CarSimple /> }} {...props} />

                        </Flex>

                        <LabelForm label='Intermitente e Sinais sonoros' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >
                            <SelectForm onChange={handleInputChange} name="Sinais" value={formAltData.Sinais} options={['Com alteração', 'Sem Alteração']} param={{ place: "Intermitente e Sinais sonoros", icon: <PiSirenDuotone /> }} {...props} />

                        </Flex>

                        <LabelForm label='Laternas' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <SelectForm onChange={handleInputChange} name="Laternas" value={formAltData.Laternas} options={['Com alteração', 'Sem Alteração']} param={{ place: "Situação das Laternas", icon: <Headlights /> }} {...props} />

                        </Flex>

                        <LabelForm label='Retrovisores' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <SelectForm onChange={handleInputChange} name="Retrovisores" value={formAltData.Retrovisores} options={['Com alteração', 'Sem Alteração']} param={{ place: "Retrovisores", icon: <MdNumbers /> }} {...props} />


                        </Flex>

                        <LabelForm label='Ferramentas' />
                        <Flex
                            display={{ base: 'flex', lg: 'flex', md: 'flex', sm: 'block' }}
                            gap={4}
                        >

                            <SelectForm onChange={handleInputChange} name="Ferramenta" value={formAltData.Ferramentas} options={['Com alteração', 'Sem Alteração']} param={{ place: "Ex: Macaco etc", icon: <FaTools /> }} {...props} />

                        </Flex>
                    </VStack>

                    <Flex
                        position={{ base: 'relative', sm: 'relative', lg: 'absolute', md: 'absolute', xl: 'absolute' }}
                        bottom={2}
                        mt={4}
                        mb={4}
                        alignItems={{ xl: 'center', lg: 'center', md: 'center', sm: 'left' }}
                        //justifyContent={'space-around'}
                        justifyContent={{ xl: 'space-evenly', lg: 'space-evenly', md: 'space-between', sm: 'center' }}
                        flexDirection={{ xl: 'row', lg: 'row', md: 'row', sm: 'column' }}
                        h={'fit-content'}
                        w={'100%'}
                        gap={4}
                    >
                        <LabelForm label="Imagens" display={{ sm: 'flex', xl: 'none', lg: 'none', md: 'none' }} {...props} />
                        <Flex >
                            <InputImg placeholder="Upload image" icon={<IoCloudUpload />} />
                        </Flex>

                        <LabelForm label='Status' display={{ sm: 'flex', xl: 'none', lg: 'none', md: 'none' }} {...props} />
                        <Flex>
                            <SelectForm onChange={handleInputChange} name="Status" value={formAltData.Status} options={['Baixada', 'Operante', 'Operando']} param={{ place: "Status", icon: <RiPoliceCarFill /> }} {...props} />

                        </Flex>

                        <Flex align={'center'} justify={'center'}>
                            <BotaoCadastrar onClick={handleSubmit} />
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
        </>
    )
};

