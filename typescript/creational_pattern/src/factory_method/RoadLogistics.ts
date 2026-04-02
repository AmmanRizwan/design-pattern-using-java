import Logistics from "./Logistics";
import Transport from "./Transport";
import Truck from "./Truck";

class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}

export default RoadLogistics;