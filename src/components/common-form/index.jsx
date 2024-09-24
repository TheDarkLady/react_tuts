import CommonInput from "../common-input";
const formTypes = {
    INPUT: "input",
    SELECT: "select",
    RADIO: "radio",
    CHECKBOX: "checkbox",
    TEXTAREA: "textarea",
    BUTTON: "button"
}

function CommonFormComponent({ formControls = [], formData, setFormData }) {
    function renderFormElement(singleFormElementItem) {
        let content = null;
        switch (singleFormElementItem.componentType) { // use 'componentType' to match the config
            case formTypes.INPUT:
                content = (
                    <CommonInput 
                        label={singleFormElementItem.label}
                        id={singleFormElementItem.id}
                        name={singleFormElementItem.name}
                        type={singleFormElementItem.type}
                        placeholder={singleFormElementItem.placeholder}
                        value={formData[singleFormElementItem.name]}
                        onChange={(event) => setFormData({
                            ...formData,
                            [event.target.name]: event.target.value
                        })}
                    />
                );
                break;
            default:
                console.log("Invalid Component Type");
        }
        return content;
    }

    return (
        <form>
            {formControls.length
                ? formControls.map((singleFormElementItem, index) => (
                    <div key={index}>
                        {renderFormElement(singleFormElementItem)}
                    </div>
                ))
                : null}
        </form>
    )
}

export default CommonFormComponent;
