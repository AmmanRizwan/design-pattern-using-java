import CheckBox from "./CheckBox";

class MacCheckBox implements CheckBox {
    public paint(): void {
        console.log("Mac CheckBox");
    }
}

export default MacCheckBox;