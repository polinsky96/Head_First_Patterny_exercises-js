import Decoy from "../Decoy";
import Quack from "../QuackBehavior/Quack";

export default class CommonDecoy extends Decoy {
    display(): string {
        return 'I am common decoy'
    }

    constructor() {
        super()
        this.quackBehavior = new Quack;
    }
}