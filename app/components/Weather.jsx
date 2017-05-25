var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;


		this.setState({
			isLoading: true
		});

		OpenWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (err) {
			alert(err);
			that.setState({
				isLoading: false
			});
		});
		// this.setState({
		// 	location: location,
		// 	temp: 23
		// });
	},
	render: function () {
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if(isLoading){
				return <h3>Ophalen van data...</h3>
			} else if (temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}

		return (
			<div>
				<h3>Weather component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;