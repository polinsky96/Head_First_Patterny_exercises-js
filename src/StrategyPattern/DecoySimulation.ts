import CommonDecoy from "./Decoes/CommonDecoy";
import Decoy from "./Decoy";
import MuteQuack from "./QuackBehavior/MuteQuack";

export default class DecoySimulation {
    public commonDecoy: Decoy;

    constructor () {
        this.commonDecoy = new CommonDecoy;
    }

    public simulationQuack(): string {
        return this.commonDecoy.performQuack();
    }

    public simulationChangeBehavior(): string {
        this.commonDecoy.setQuackBehavior(new MuteQuack);
        return `Common decoy change behavior to: ${this.commonDecoy.performQuack()}`
    }
}