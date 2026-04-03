import Button from "./Button";

class MacButton implements Button {
    public paint(): void {
        console.log("Mac Button");
    }
}

export default MacButton;