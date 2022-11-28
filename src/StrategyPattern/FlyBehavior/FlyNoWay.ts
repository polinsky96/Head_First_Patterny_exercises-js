import FlyBehavior from "./FlyBehavior";

export default class FlyNoWay implements FlyBehavior {
    fly(): string {
        return 'I cant fly'
    }
}