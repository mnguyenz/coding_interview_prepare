import {Observer} from './Observer';
import {Display} from './Display';
import { WeatherData } from './WeatherData';

export class CurrentConditionsDisplay implements Observer, Display {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherDataParam: WeatherData) {
    this.weatherData = weatherDataParam;
    weatherDataParam.registerObserver(this);
  }
    
  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
    }

  display(): void {
    console.log(`Current conditions: ${this.temperature} F degree and ${this.humidity} % humidity`);
  }
}