import React from "react";
import { Text } from "@chakra-ui/react";

interface ILabel {
    label: string;
}

export const LabelForm: React.FC<ILabel> = (props) => {
    return (
        <Text color='#A0AEC0' {...props}>
            {props.label}
        </Text>
    )
}