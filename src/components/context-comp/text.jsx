import { useContext } from "react";
import { GloalContext } from "../../context/index";
function ContextTextComponent(){
    const getStateFromGloalContext = useContext(GloalContext)
    console.log(getStateFromGloalContext)
    return <h1 style={{
        fontSize: getStateFromGloalContext.theme === 'light' ? '30px' : '20px',
        backgroundColor: getStateFromGloalContext.theme === 'light' ? 'white' : 'black',
        color: getStateFromGloalContext.theme === 'light' ? 'green' : 'blue'

    }}> LAkshmi Chaithanya</h1>
}

export default ContextTextComponent;