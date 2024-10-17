import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  WeatherData:any;
  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(){
    
    this.getWeatherData();
    console.log(this.WeatherData);
  }
    getWeatherData(){
       let data = JSON.parse('{"coord":{"lon":9,"lat":34},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":307.04,"feels_like":304.61,"temp_min":307.04,"temp_max":307.04,"pressure":1018,"humidity":14,"sea_level":1018,"grnd_level":1015},"visibility":10000,"wind":{"speed":4.96,"deg":261,"gust":4.9},"clouds":{"all":0},"dt":1652532779,"sys":{"type":1,"id":1197,"country":"TN","sunrise":1652502213,"sunset":1652552237},"timezone":3600,"id":2464461,"name":"Tunisia","cod":200}');
       this.setWeatherData(data);
    }
    setWeatherData(data){
      this.WeatherData = data;
      let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
      this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
      let currentDate = new Date();
      this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
      this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
      this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
      this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
      this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    }
}
