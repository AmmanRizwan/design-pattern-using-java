import Transport from "./Transport"

abstract class Logistics {
    abstract createTransport(): Transport;

    public planDelivery(): void {
        const t: Transport = this.createTransport();
        t.deliver();
    }
}

export default Logistics;