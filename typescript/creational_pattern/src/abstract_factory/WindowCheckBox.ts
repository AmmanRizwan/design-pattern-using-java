import CheckBox from "./CheckBox";

class WindowCheckBox implements CheckBox {
    public paint(): void {
        console.log("Window CheckBox");
    }
}

export default WindowCheckBox;