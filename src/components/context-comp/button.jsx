import { useContext } from "react";
import { GloalContext } from "../../context/index";
function ContextButtonComponent(){
    const {theme ,handleChangeTheme} = useContext(GloalContext)
    return <button onClick={handleChangeTheme}> Change Theme</button>
}

export default ContextButtonComponent;