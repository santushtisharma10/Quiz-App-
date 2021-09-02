import React, {createContext, useState} from "react";

export const DataContext = createContext();

export const DataProv = props => {

    const [type, setType] = useState("");
    const [num, setNum] = useState("");
    const [catg, setCat] = useState("");
    const [diff, setDif] = useState("");
    
    return (
        <div>
        <DataContext.Provider value={{num, setNum, type, setType, catg, setCat, diff, setDif}} >
            {props.children}
        </DataContext.Provider>kj
        </div>
    );

}