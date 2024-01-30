import { Routes, Route } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { FormAltVtrMain } from "../militar/form";
import { Login } from "../seguranca/login";
import { FormCadMotMain } from "./formMot";
import { FormCadVtrMain } from "./formVtr";
import { ListMotMain } from "./listMot";
import { ListVtrMain } from "./listVtr";

export const AdmRoutes = () => {
  const { onOpen, onClose } = useDisclosure()
  return (
   
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/cadalt" element={<FormAltVtrMain onClose={onClose} onOpen={onOpen} />} />
          <Route path="/cadmot" element={<FormCadMotMain onClose={onClose} onOpen={onOpen} />} />
          <Route path="/cadvtr" element={<FormCadVtrMain onClose={onClose} onOpen={onOpen} />} />
          <Route path="/listvtr" element={<ListVtrMain onClose={onClose} onOpen={onOpen} />} />
          <Route path="/listmot" element={<ListMotMain onClose={onClose} onOpen={onOpen} />} />
      </Routes>
    
  );
};
