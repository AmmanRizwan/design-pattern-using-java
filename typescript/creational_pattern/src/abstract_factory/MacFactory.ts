import Button from "./Button";
import CheckBox from "./CheckBox";
import GUIFactory from "./GUIFactory";
import MacButton from "./MacButton";
import MacCheckBox from "./MacCheckBox";

class MacFactory implements GUIFactory {
    public createButton(): Button {
        return new MacButton();
    }

    public createCheckBox(): CheckBox {
        return new MacCheckBox();
    }
}

export default MacFactory;