import Button from "./Button";
import CheckBox from "./CheckBox";
import GUIFactory from "./GUIFactory";
import WindowButton from "./WindowButton";
import WindowCheckBox from "./WindowCheckBox";

class WindowFactory implements GUIFactory {
    public createButton(): Button {
        return new WindowButton();
    }

    public createCheckBox(): CheckBox {
        return new WindowCheckBox();
    }
}

export default WindowFactory;