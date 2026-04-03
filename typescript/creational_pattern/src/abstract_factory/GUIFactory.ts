import Button from "./Button";
import CheckBox from "./CheckBox";

export default interface GUIFactory {
    createButton(): Button;
    createCheckBox(): CheckBox;
}