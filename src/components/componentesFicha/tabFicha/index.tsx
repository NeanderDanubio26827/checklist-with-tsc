import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";


export const TabFicha = () => {

    return (
        <Tabs 
            //_hover={{color:'rgba(39, 103, 73, 1)'}}
            //colorScheme="rgba(39, 103, 73, 1)"
            //fontWeight={500}
            fontSize={'18px'}
            color={'rgba(0, 0, 0, 0.48)'}
            >
            <TabList w={'fit-content'} >
                <Tab >Todos</Tab>
                <Tab>Repousos</Tab>
                <Tab>Licenças</Tab>
            </TabList>

            <TabPanels>
                
            </TabPanels>
        </Tabs>
    );
};
