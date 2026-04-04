import Shape from "./Shape";

class Circle implements Shape {
    private color: string;

    public constructor(color: string) {
        this.color = color;
    }

    public clone(): Shape {
        return new Circle(this.color);
    }

    public set setColor(color: string) {
        this.color = color;
    }
}

export default Circle;