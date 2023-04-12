import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'd9475731bd7a83cf2c1b0e3a496cde3a';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${environment.apiKey}&units=metric`;

    return this.http.get(url);
  }
}