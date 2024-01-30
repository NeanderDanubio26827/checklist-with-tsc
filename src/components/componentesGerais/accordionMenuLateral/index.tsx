import React from 'react';
import { Accordion, AccordionItem, AccordionButton, Flex, AccordionIcon, AccordionPanel, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

interface IAccordionMenu {
  nameOne: string;
  nameTwo: string;
  nameThree?: string;
  nameFour?: string;
  linkOne: string;
  linkTwo: string;
  linkThree?: string;
  displayCustom: string;
  customIcon: React.ReactNode;
  handleToggle: () => void;
}

export const AccordionMenuLateral: React.FC<IAccordionMenu> = (props) => {
  return (
    <Accordion
      allowToggle
      color="white"
      _hover={{
        transform: "scale(1.0)",
        bgColor: "white",
        textColor: "black",
        cursor: "pointer",
        transition: ".9s",
      }}
      w={"100%"}
      pt={2}
    >
      <AccordionItem border="none" onClick={props.handleToggle}>
        <h2>
          <AccordionButton _hover={{ focus: "none" }} pr={6}>
            <Flex align="center" as="span" flex="1" fontSize="1em">
              {props.customIcon}
              <Text
                pl={6}
                fontSize={'14px'}
                display={props.displayCustom}
              >
                {props.nameOne}
              </Text>
            </Flex>
            <AccordionIcon display={props.displayCustom} />
          </AccordionButton>
        </h2>
        <AccordionPanel
          bg="rgb(226, 232, 240)"
          width="100%"
          height={"100%"}
          marginBottom={0}
          display={props.displayCustom}
        >
          <Link to={props.linkOne}>
            <Text align={'center'} justifyContent={'center'} fontSize={'14px'}>{props.nameTwo}</Text>
          </Link>
        </AccordionPanel>

        
        {props.nameThree && (

          <AccordionPanel
            bg="rgb(226, 232, 240)"
            width="100%"
            height={"100%"}
            marginBottom={0}
            display={props.displayCustom}
          >
            <Link to={props.linkTwo}>
              <Text align={'center'} justifyContent={'center'} fontSize={'14px'}>{props.nameThree}</Text>
            </Link>
          </AccordionPanel>
        )}
        {props.nameFour && (
          <AccordionPanel
            bg="rgb(226, 232, 240)"
            width="100%"
            height={"100%"}
            marginBottom={0}
            display={props.displayCustom}
          >
            <Link to={props.linkThree}>
              <Text align={'center'} justifyContent={'center'} fontSize={'14px'}>{props.nameFour}</Text>
            </Link>
          </AccordionPanel>
        )}

      </AccordionItem>
    </Accordion>
  );
}
