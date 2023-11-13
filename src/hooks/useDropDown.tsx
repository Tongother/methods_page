import React, { useState } from "react";

export const useDropDown = <T,>( initialState: T ) => {
    const [dropDown, setDropDown] = useState(initialState);


    return { dropDown, setDropDown }
}