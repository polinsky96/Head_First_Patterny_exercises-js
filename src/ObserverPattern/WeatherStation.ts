import CurrentConditionsDisplay from "./VisualElements/CurrentConditionsDisplay";
import WeatherData from "./WeatherData/WeatherData";

export default class WeatherStation {
    constructor() {
        let weatherData: WeatherData = new WeatherData();
        let currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    
		let interval = setInterval(() => {
			weatherData.setMeasurements(WeatherStation.getRandomNumber(), WeatherStation.getRandomNumber(), WeatherStation.getRandomNumber());
		}, 1000);

		// stop from running indefinitely
		setTimeout(() => {
			clearInterval(interval);
		}, 5000);
	}

	
	/**
	 * Get a random number for mock data
	 */
	public static getRandomNumber() {
		return Math.round(Math.random() * 100);
	}
}