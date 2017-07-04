var yw = require('weather-yahoo');

exports.getWeather = function getWeather(city, cb) {
	yw.getSimpleWeather(city).then(function(res){
		var temp = res.weather.temperature.value;
		var tempScale = res.weather.temperature.units;
		var condition = res.weather.condition;

    	cb(null, "Weather in " + city + " - " + temp + tempScale + "," + condition);
	})
}
