import { createContext } from "react";

const StepContext = createContext()

function StepContextProvider({children, steps}) {
   
    return (  
        <StepContext.Provider value={steps}>
            {children}
        </StepContext.Provider>
    );
}

export {StepContextProvider, StepContext};