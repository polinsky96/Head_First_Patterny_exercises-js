import QuackBehavior from "./QuackBehavior/QuackBehavior";

export default abstract class Decoy {
    public quackBehavior: QuackBehavior;
    
    constructor() {}

    public performQuack () {
        return this.quackBehavior.quack();
    }

    abstract display(): string

    /**
     * @param qb
     */

    public setQuackBehavior(qb): string {
        this.quackBehavior = qb;
        return `This Decoy change quack behavior to: ${this.quackBehavior.quack()}`
    }
}