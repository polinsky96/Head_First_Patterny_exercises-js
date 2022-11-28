import DisplayElement from "../DisplayElement/DisplayElement";
import Observer from "../Observer/Observer";
import Subject from "../Subject/Subject";

export default class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number
    private humidity: number
    private weatherData: Subject

    public constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    
    update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
    
    display(): void {
        console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity} humidity`);
    }
}