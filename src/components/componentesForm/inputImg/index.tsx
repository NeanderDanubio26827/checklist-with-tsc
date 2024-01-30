import { InputGroup, Input, InputRightElement, Button, InputLeftElement } from "@chakra-ui/react"
import React from "react"


interface IinputForm {
    placeholder: string;
    icon: React.ReactNode;
}

export const InputImg: React.FC<IinputForm> = (props) => {

    return (

        <InputGroup>
                <Input
                    {...props}
                    placeholder={props.placeholder}
                    //type='file'
                    w={{ base: "300px", lg: "300px", md: "300px", sm: "300px" }}
                    
                />
                <InputLeftElement pointerEvents="none" color='#A0AEC0'>
                    {props.icon} {/* Remova as crases */}
                </InputLeftElement>
            </InputGroup>
    )
}