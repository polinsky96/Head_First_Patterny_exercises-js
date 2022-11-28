import FlyBehavior from "./FlyBehavior/FlyBehavior";
import QuackBehavior from "./QuackBehavior/QuackBehavior";

export default abstract class Duck {
    constructor () {}

    public flyBehavior: FlyBehavior;
    public quackBehavior: QuackBehavior;

    abstract display(): string;

    public performFly(): string {
        return this.flyBehavior.fly()
    }

    public performQuack(): string {
        return this.quackBehavior.quack()
    }

    public swim(): void {
        console.log('All ducks float, even decoys!');
    }

    /**
     * adds ability to set behavior at runtime if desired
     * @param fb
     */
    public setFlyBehavior(fb: FlyBehavior): void {
        this.flyBehavior = fb;
    }

    /**
     * adds ability to set behavior at runtime if desired
     * @param qb
     */
    public setQuackBehavior(qb: QuackBehavior): void {
        this.quackBehavior = qb;
    }
}