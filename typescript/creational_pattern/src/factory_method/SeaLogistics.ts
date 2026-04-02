import Logistics from "./Logistics";
import Transport from "./Transport";
import Ship from "./Ship";

class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }
}

export default SeaLogistics;