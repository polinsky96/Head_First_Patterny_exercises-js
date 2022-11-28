import QuackBehavior from "./QuackBehavior"

export default class MuteQuack implements QuackBehavior {
    quack(): string {
        return 'I cannot quack!'
    }
}