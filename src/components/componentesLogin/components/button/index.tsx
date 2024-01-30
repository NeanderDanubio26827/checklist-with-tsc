import { Button } from "@chakra-ui/react";
import React from "react";

interface ButtonEnterProps {
    handleSubmit: () => Promise<void>
    isDisabled: boolean;
}

export const ButtonEnter: React.FC<ButtonEnterProps> = ({ handleSubmit, isDisabled}) => {
    return (
        <Button
            w={{ xl: '383px', lg: '383px', md: '383px', sm: '350px' }}
            h={'44px'}
            bg={'rgba(39, 103, 73, 1)'}
            color={'rgba(255, 255, 255, 1)'}
            fontSize={'24px'}
            onClick={handleSubmit}
            isDisabled={isDisabled}
        >
            Entrar
        </Button>
    );
};
