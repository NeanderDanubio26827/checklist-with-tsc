import React from "react"
import { Image } from '@chakra-ui/react'
import  Formatura  from '../../../../../assets/img/formatura.png';

export const ImgFormatura = (props) => {
    return (
        <Image
            borderRadius='full'
            boxSize='1406px'
            src={Formatura}
            alt='Img Formatura'
        />
    )
}