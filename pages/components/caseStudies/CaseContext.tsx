import { useState, useContext, createContext } from "react";

const CaseContext = createContext({
    case: //what is my case??
    setCase: // function to set the case
})

export function CaseProvider({ children }) {
    const [case, setCase] = useState(true);

    return (
        <CaseContext.Provider>

        </CaseContext.Provider>
    )

}
