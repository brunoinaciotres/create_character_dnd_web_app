import { createContext } from "react";

const StepContext = createContext()

function StepContextProvider({children, step}) {
   
    return (  
        <StepContext.Provider value={step}>
            {children}
        </StepContext.Provider>
    );
}

export {StepContextProvider, StepContext};