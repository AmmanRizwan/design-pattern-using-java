import Transport from "./Transport";

class Truck implements Transport {
    public deliver(): void {
        console.log("Delivering on the road side.");
    }
}

export default Truck;