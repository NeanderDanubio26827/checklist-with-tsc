import {InputGroup, InputLeftElement, Select, VStack } from "@chakra-ui/react";
import React from "react";

interface ISelectForm {
    param: { place: string, icon: React.ReactNode };
    options?: string[];
    name: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>; // Alterado para HTMLSelectElement
    value: string;
    
}

export const SelectForm: React.FC<ISelectForm> = (props) => {
    return (
        <VStack>
            <InputGroup
                w={{ base: "349px", lg: "349px", md: "300px", sm: "300px" }}
                borderColor="grey.200"
                borderWidth="1px"
                borderRadius={'5px'}
                _hover={{ borderWidth: '2px', borderColor: "blue.500", borderRadius: '5px' }}
            >
                <InputLeftElement pointerEvents='none' color='#A0AEC0'>
                    {props.param.icon}
                </InputLeftElement>
                <InputGroup ml={6}>
                    <Select
                        placeholder={props.param.place}
                        color='#A0AEC0'
                        border={'none'}
                        name={props.name} // Adicionado
                        onChange={props.onChange} // Adicionado
                        value={props.value} // Adicionado
                    >
                        {props.options && props.options
                            .filter(option => option !== props.param.place)
                            .map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))
                        }
                    </Select>
                </InputGroup>
            </InputGroup>
        </VStack>
    );
};
