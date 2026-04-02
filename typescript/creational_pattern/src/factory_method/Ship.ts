import Transport from "./Transport";

class Ship implements Transport {
    public deliver(): void {
        console.log("Delivering on the sea side.");
    }
}

export default Ship;