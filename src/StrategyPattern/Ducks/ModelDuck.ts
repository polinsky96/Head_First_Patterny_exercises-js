import Duck from "../Duck";
import FlyNoWay from "../FlyBehavior/FlyNoWay";
import MuteQuack from "../QuackBehavior/MuteQuack";

export default class ModelDuck extends Duck {
    constructor() {
        super()
        this.flyBehavior = new FlyNoWay;
        this.quackBehavior = new MuteQuack;
    }

    display() {
        return 'I am ModelDuck'
    }
}