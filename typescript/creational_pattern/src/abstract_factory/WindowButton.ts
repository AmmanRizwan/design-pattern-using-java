import Button from "./Button";

class WindowButton implements Button {
    public paint(): void {
        console.log("Windows Button");
    }
}

export default WindowButton;