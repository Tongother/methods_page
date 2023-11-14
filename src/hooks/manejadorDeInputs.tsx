import { useState } from "react";

export const manejadorDeInputs = <T,F>( initialState_Array: T, initialState_String: F ) => {
    const [selectedMedida, setSelectedMedida] = useState(initialState_Array); // Valor por defecto
    const [inputValue, setInputValue] = useState(initialState_String);


    return {selectedMedida, setSelectedMedida, inputValue, setInputValue }
}