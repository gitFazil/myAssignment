import React, { Component } from "react";
import "./weather.css";

export class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weather: {
        city: "NA",
        cityId: "NA",
        maxTemp: "NA",
        minTemp: "NA",
        icon: "",
        iconPharse: "",
      },
      citySearch: "",
    };
  }
  search = () => {
    let apiKey = "avG3hptrHo6qZK6l4ONj9db7ajY3qC0V";
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${this.state.citySearch}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result[0] && result[0].Key !== null) {
            let city = result[0].LocalizedName;

            console.log(result[0]);
            let locationId = result[0].Key;
            fetch(
              `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationId}?apikey=avG3hptrHo6qZK6l4ONj9db7ajY3qC0V&metric=true`
            )
              .then((res) => res.json())
              .then(
                (result) => {
                  console.log(result);
                  let dailyForecasts = result.DailyForecasts[0];
                  console.log(dailyForecasts);
                  this.setState({
                    weather: {
                      maxTemp: dailyForecasts.Temperature.Maximum.Value,
                      minTemp: dailyForecasts.Temperature.Minimum.Value,
                      city: city,
                      cityId: locationId,
                      icon: dailyForecasts.Day.Icon,
                      iconPharse: dailyForecasts.Day.IconPhrase,
                    },
                  });
                },
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error,
                  });
                }
              );
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };
  render() {
    var svg = `https://www.accuweather.com/images/weathericons/${this.state.weather.icon}.svg`;
    return (
      <div className="wrapper">
        <h1>Weather App</h1>
        <div className="weather-form">
          <input
            id="citySearch"
            name="citySearch"
            value={this.state.citySearch}
            onChange={(e) => this.setState({ citySearch: e.target.value })}
          />
          <button onClick={this.search}>Search</button>
        </div>
        <div className="weather-content">
          <span>City Name : {this.state.weather.city}</span>
          <span>City ID : {this.state.weather.cityId}</span>
          <span>Maximum Temp : {this.state.weather.maxTemp}</span>
          <span>Minimum Temp : {this.state.weather.minTemp}</span>
          {this.state.weather.icon !== "" && (
            <img
              style={{ width: "150px", marginTop: "5px" }}
              src={svg}
              alt="icon"
            />
          )}

          <p>{this.state.weather.iconPharse}</p>
        </div>
      </div>
    );
  }
}
export default Weather;
