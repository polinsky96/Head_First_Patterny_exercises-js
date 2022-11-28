import Duck from "./Duck";
import MallarDuck from "./Ducks/MallarDuck";
import ModelDuck from "./Ducks/ModelDuck";
import FlyWithReaction from "./FlyBehavior/FlyWithReaction";

export default class DuckSimulation {
    
    public mallar: Duck;
    public model: Duck;

    constructor() {
        this.mallar = new MallarDuck();
        this.model = new ModelDuck();
    }

    public simulateQuack(): string {
        return `Mallar ${this.mallar.performQuack()}`
    }

    public simulateFly(): string {
        return `Mallar ${this.mallar.performFly()}`
    }

    public simulateTalking(): string {
        return `Mallar ${this.mallar.display()}`
    }

    public simulateChangeBehavior(): string {
        this.model.setFlyBehavior(new FlyWithReaction);
        return `Model duck change flyBehavior to: ${this.model.performFly()}`
    }
}