import Subject from '../Subject/Subject'
import Observer from '../Observer/Observer'

export default class WeatherData implements Subject {
    private observers: Observer[]
    private temperature: number
    private humidity: number
    private pressure: number

    public constructor() {
        this.observers = new Array
    }

    public registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    public removeObserver(o: Observer): void {
        const index: number = this.observers.indexOf(o);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObserver(): void {
        this.observers.forEach( observer => {
            observer.update(this.temperature, this.humidity, this.pressure);
        })
    }

    public measurementsChanged(): void {
        this.notifyObserver();
    }

    public setMeasurements(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;

        this.measurementsChanged();
    }
    
    //Other methods
}