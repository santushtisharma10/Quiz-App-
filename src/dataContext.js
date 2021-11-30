import React, {createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = props => {

    const [type, setType] = useState("multiple");
    const [num, setNum] = useState("10");
    const [catg, setCat] = useState("21");
    const [diff, setDif] = useState("hard");
    
    return (
        <div>
        <DataContext.Provider value={{num, setNum, type, setType, catg, setCat, diff, setDif}} >
            {props.children}
            
        </DataContext.Provider>kj
        </div>
    );

}