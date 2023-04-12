import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  country: string = 'Belgium';
  weatherData: any;
  weatherIcon: string | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  onSubmit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.getCurrentWeather(this.country)
      .subscribe(data => {
        this.weatherData = data;
        this.weatherIcon = this.getWeatherIcon(this.weatherData.main.temp);
      });
  }

  getWeatherIcon(temp: number): string {
    if (temp > 20) {
      return 'https://img.icons8.com/color/48/000000/sun.png';
    } else {
      return 'https://img.icons8.com/color/48/000000/snow.png';
    }
  }
}