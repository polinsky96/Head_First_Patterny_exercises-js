import FlyBehavior from "./FlyBehavior";

export default class FlyWithReaction implements FlyBehavior {
    fly(): string {
        return 'I fly with super reaction'
    }
}