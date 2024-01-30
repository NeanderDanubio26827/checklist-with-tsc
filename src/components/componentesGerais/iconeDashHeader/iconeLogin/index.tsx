import { PiUserCircleFill } from "react-icons/pi";
import React from "react";
//import { PiUserCircleFill } from "react-icons/pi"; 

interface ColorProps{
    colorIcon: string;
    onclick: () => void;
}
export const IconeLogin: React.FC<ColorProps> = ({colorIcon, onclick}: ColorProps) => {

    return(
        <>
            <PiUserCircleFill 
            //color="#A0AEC0" 
            color={colorIcon}
            size={'24px'}
            onClick={onclick}
            />
            
        </>
    ); 
};