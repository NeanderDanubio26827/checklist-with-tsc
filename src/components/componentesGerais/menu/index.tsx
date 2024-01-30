import { ChevronDownIcon } from "@chakra-ui/icons"
import { MenuButton, MenuList, MenuItem, MenuDivider, Menu } from "@chakra-ui/react"
import React from "react"

interface IMyMenu {
    namePrimary: string,
    nameSecondary: string,
    nameTerciary?: string,
    displayCustom: string,
    customIcon: React.ReactNode; // Nova propriedade para o ícone personalizado
    handleToggle: () => void,
}


export const MyMenu: React.FC<IMyMenu> = (props) => {


    return (

        <Menu>
            <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
            >
                File <ChevronDownIcon />
            </MenuButton>
            <MenuList>
                <MenuItem>New File</MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuDivider />
                <MenuItem>Open...</MenuItem>
                <MenuItem>Save File</MenuItem>
            </MenuList>
        </Menu>
    )
}