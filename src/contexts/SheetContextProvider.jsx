import { createContext } from "react";

const SheetContext = createContext({})

function SheetContextProvider({children, sheet}) {

    return ( 
        <SheetContext.Provider value={sheet}>
            {children}
        </SheetContext.Provider>

     );

}

export {SheetContext, SheetContextProvider};