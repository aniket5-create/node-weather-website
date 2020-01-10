const request = require('request');

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/37353ace23ca338a93f8d1dc483fa81b/' + latitude + ',' + longitude + '?units=si';

    request({url,json: true},(error,{body}) => {
        if(error){
            callback('Unable to connect to weather service',undefined);
        }
        else if(body.error){
            callback('Unable to find location',undefined);
        }
        else{
            callback(undefined,`${body.daily.data[0].summary} it is currently ${body.currently.temperature} degrees out this high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow} there is ${body.currently.precipProbability}% chance of rain`);
        }
    });
}

module.exports = forecast;