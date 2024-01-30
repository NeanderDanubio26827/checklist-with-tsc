import { Button } from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";

export function BotaoCadastrar ( {...props}){
    return (
        <Button
            color={"white"}
            rightIcon={<BiPencil size={'16px'} />}
            bg='#38A169'
            variant='outline'
            w={{ base: '152px', lg: '152px', md: '152px', sm: '100px' }}
            fontSize={{ base: '18px', lg: '18px', md: '16px', sm: '14px' }}
            onClick={props.onClick}
        >
            Cadastrar
            
        </Button>
    );
}
