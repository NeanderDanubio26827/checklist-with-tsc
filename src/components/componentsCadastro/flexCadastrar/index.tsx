import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { TitleCadastro } from "../tilteCadastro";
import { TextCadastro } from "../textCadastro";
import { InputCadastrar } from "../inputCadastrar";
import { BotaoCadastrar } from "../botaoCadastrar";
import { FlexMenor } from "../flexMenor";

interface IFlexCadastrar {
    isOpen: boolean;
}

export const FlexConteudo: React.FC<IFlexCadastrar> = (props) => {
    return (
        <>
            <FlexMenor />
            <Flex
                pl={4}
                mt={6}
                borderRadius={"8px"}
                borderTopLeftRadius={0}
                w={props.isOpen ? "83vw" : "93vw"}
                transitionDuration="1.0s"
                minHeight="645px"
                height={'fit-content'}
                position="relative"
                borderBottom="1px solid rgba(0, 0, 0, 0.5)"
                boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
                bg={'white'}
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
                    <TitleCadastro />
                </Flex>
                <VStack
                    position="absolute"
                    top={"72px"}
                    left={"32px"}
                    pt={4}
                    gap={2}
                    align={{base:"flex-start"}} // Ajuste a alinhamento conforme necessário
                >
                    <TextCadastro />
                    <Flex 
                    display={{base:'flex',lg:'flex', md:'flex',  sm:'block'}}                     
                    gap={4}
                    >
                        <InputCadastrar />
                        <BotaoCadastrar />
                    </Flex>
                </VStack>
            </Flex>
        </>
    );
};
