import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  URL:string = 'https://api.nasa.gov/planetary/apod?api_key=';
  API_KEY:string = 'h87JMQzuTjVzBwAycFKZpBm8aa667BhK8FX4OPzE';
  constructor(private http:HttpClient) { }

  public getInfo():Observable<any>{
    return this.http.get(this.URL+this.API_KEY);
  }
}
