import Duck from "../Duck";
import Quack from "../QuackBehavior/Quack";
import FlyWithWings from "../FlyBehavior/FlyWithWings";

export default class MallarDuck extends Duck {
    constructor() {
        super()
        this.flyBehavior = new FlyWithWings
        this.quackBehavior = new Quack
    }

    display() {
        return 'I am MallarDuck'
    }
}