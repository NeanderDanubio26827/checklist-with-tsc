import { Flex, InputGroup, Input, InputRightElement, InputLeftElement, VStack } from "@chakra-ui/react";
import React from "react";
import { BsPersonFill } from "react-icons/bs";

export const InputCadastrar = () => {

    return (
        <VStack>
            
            <InputGroup>                
                <Input type='search' placeholder='Digite CPF, matrícula ou nome' 
                w={{base: '349px', lg: '349px', md: '300px', sm:'300px'}} 
                
                />
                <InputLeftElement pointerEvents='none'>
                    <BsPersonFill color='#A0AEC0' />
                </InputLeftElement>
            </InputGroup>
        </VStack>
    );
}; 