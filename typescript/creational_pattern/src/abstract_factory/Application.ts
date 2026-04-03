import Button from "./Button";
import CheckBox from "./CheckBox";
import GUIFactory from "./GUIFactory";

class Application {
    private button: Button;
    private checkbox: CheckBox;

    public constructor(factory: GUIFactory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckBox();
    }

    public render(): void {
        this.button.paint();
        this.checkbox.paint();
    }
}

export default Application;