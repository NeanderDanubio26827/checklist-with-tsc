import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { BiPencil } from "react-icons/bi";

interface IButtonCad {
    onClick: () => void;
}

export const BotaoCadastrar: React.FC<IButtonCad> = (props) => {
    return (
        <Button
            color={"white"}
            rightIcon={<BiPencil size={'16px'} />}
            bg='#38A169'
            variant='outline'
            w={{ base: '152px', lg: '152px', md: '152px', sm: '152px' }}
            fontSize={{ base: '18px', lg: '18px', md: '16px', sm: '16px' }}
            type='submit'
            onClick={props.onClick}
        >
            Cadastrar
        </Button>
    );
};
