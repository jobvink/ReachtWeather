var React = require('react');

// var Examples = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>Examples component</h3>
// 		);
// 	}
// });

var Examples = (props) => {
	return (
		<div>
			<h3>Examples component!</h3>
			<p>Welkom op de Examples pagina</p>
		</div>
	)
};

module.exports = Examples;