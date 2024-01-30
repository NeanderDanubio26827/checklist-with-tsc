import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

interface IFormLogin {
  label: string;
  typeInput: string;
  textHelp: string | null;
  placeHolder: string;
  value: string;  // Adicione a propriedade 'value' ao tipo
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormLabelLogin: React.FC<IFormLogin> = (props) => {
  return (
    <FormControl
      alignContent={"center"}
      justifyContent={"center"}
      padding={4}
    >
      <FormLabel fontWeight={"bold"}>{props.label}</FormLabel>
      <Input
        required
        type={props.typeInput}
        placeholder={props.placeHolder}
        value={props.value}  // Use a propriedade 'value' aqui
        name={props.name}
        onChange={props.onChange}
      />
      {props.textHelp && <FormHelperText>{props.textHelp}</FormHelperText>}
    </FormControl>
  );
};
