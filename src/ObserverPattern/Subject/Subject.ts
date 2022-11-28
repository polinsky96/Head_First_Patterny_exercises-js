import Observer from "../Observer/Observer";

export default interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObserver(): void;
}