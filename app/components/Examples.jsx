var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Hier zijn een paar voorbeelden om uit te proberen:</p>
			<ol>
				<li>
					<Link to="/?location=Katwijk">Katwijk, Zuid-Holland</Link>
				</li>
				<li>
					<Link to="/?location=Rio">Rio, Brazil</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports = Examples;