import QuackBehavior from "./QuackBehavior"

export default class Quack implements QuackBehavior {
    quack(): string {
        return 'quack-quack'
    }
}