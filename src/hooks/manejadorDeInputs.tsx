import { useState } from "react";

export const manejadorDeInputs = <T,F,Z,X>( initialState_ArrayString: T, initialState_String: F, initialState_Bool:Z) => {
    const [selectedMedida, setSelectedMedida] = useState(initialState_ArrayString);
    const [inputValue, setInputValue] = useState(initialState_String);
    const [isButtonClick, setisButtonClick] = useState(initialState_Bool);
    const [dataRows, setDataRows] = useState<number[]>([])


    return {selectedMedida, setSelectedMedida, 
            inputValue, setInputValue, isButtonClick, 
            setisButtonClick, dataRows, setDataRows}
}