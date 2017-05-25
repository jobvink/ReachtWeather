var React = require('react');

// var WeattherForm = React.createClass({
// 	render: function () {
// 		var {temp, location} = this.props;
// 		return (
// 			<div>
// 				<h3>Het is {temp} in {location}</h3>
// 			</div>
// 		);
// 	}
// });

var WeatherMessage = ({temp, location}) => {
	return (
		<h3>Het is {temp} in {location}</h3>
	);
};

module.exports = WeatherMessage;