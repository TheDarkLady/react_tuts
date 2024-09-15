import { createContext, useState } from "react";
const GloalContext = createContext(null);
function GloalState({children}) {
    const [theme, setTheme] = useState('light')

    function handleChangeTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return <GloalContext.Provider value={{theme, handleChangeTheme}}>{children}</GloalContext.Provider>
}
export {GloalContext}
export default GloalState;