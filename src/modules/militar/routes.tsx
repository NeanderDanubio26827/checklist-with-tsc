import { Routes, Route } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { FormAltVtrMain } from "./form";
import { ListAltMain } from "./listAlt";
import { FormCadMotMain } from "../admp4/formMot";
import { FormCadVtrMain } from "../admp4/formVtr";
import { ListMotMain } from "../admp4/listMot";
import { ListVtrMain } from "../admp4/listVtr";

export const MilitarRoutes = () => {
    const { onOpen, onClose } = useDisclosure()
    return (
        <Routes>
            
            <Route path="/cadmot" element={<FormCadMotMain onClose={onClose} onOpen={onOpen} />} />
            <Route path="/cadvtr" element={<FormCadVtrMain onClose={onClose} onOpen={onOpen} />} />
            <Route path="/cadalt" element={<FormAltVtrMain onClose={onClose} onOpen={onOpen} />} />
            <Route path="/listalt" element={<ListAltMain onClose={onClose} onOpen={onOpen} />} />
            <Route path="/listvtr" element={<ListVtrMain onClose={onClose} onOpen={onOpen} />} />
            <Route path="/listmot" element={<ListMotMain onClose={onClose} onOpen={onOpen} />} />
        </Routes>

    );
};
