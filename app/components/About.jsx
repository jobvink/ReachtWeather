var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>Welkom op de About pagina, Deze app is gemaakt om de oefenen met React</p>
			<p>Tijdens het maken van deze app heb ik allerlei dingen geleerd over het maken van websites</p>
			<p>zo heb ik bijvoorbeeld geleerd over de volgende tools</p>
			<ul>
				<li>
					<a href="https://facebook.github.io./react">React</a>
				</li>
				<li>
					<a href="http://openweathermap.org">Open weather map</a>
					- weIk heb open weathter map gebruikt al api
				</li>
			</ul>
		</div>
	);
};

module.exports = About;