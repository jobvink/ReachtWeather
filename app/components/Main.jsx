var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<Nav/>
// 				<h2>Nav component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });

var Main = (props) => {
	return (
		<div>
			<Nav/>
			<div className="row">
				<div className="column medium-6 large-6 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;