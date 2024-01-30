import { Flex, InputGroup, Input, InputRightElement, InputLeftElement, VStack } from "@chakra-ui/react";
import React from "react";

interface IinputForm {
    placeholder: string;
    icon: React.ReactNode;
    value: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputMot: React.FC<IinputForm> = (props) => {
    return (
        <VStack>
            <InputGroup>
                <Input
                    {...props}
                    placeholder={props.placeholder}
                    w={{ base: "349px", lg: "349px", md: "300px", sm: "300px" }}
                    value={props.value}
                    name={props.name}
                    onChange={props.onChange}
                />
                <InputLeftElement pointerEvents="none" color='#A0AEC0'>
                    {props.icon}
                </InputLeftElement>
            </InputGroup>
        </VStack>
    );
};
