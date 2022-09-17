import {WeatherData} from './WeatherData';
import {CurrentConditionsDisplay} from './CurrentConditionsDisplay';

export class WeatherStation {
  weatherData: WeatherData = new WeatherData();
  currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(this.weatherData);

  WeatherStationTest(): void {
    this.weatherData
    this.weatherData.setMeasurements(82, 70, 29.2);
    this.weatherData.setMeasurements(78, 90, 29.2);
    this.weatherData.setMeasurements(80, 65, 27.4);
  }
}

const weatherStationTest = new WeatherStation();
weatherStationTest.WeatherStationTest();