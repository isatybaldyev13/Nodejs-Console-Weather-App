const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather.js')
const argv = yargs.options({
  a:{
    demand : true,
    alias:'address',
    describe:'Address to fetch weather for ',
    string: true
  }}).help().alias('help','h').argv;
geocode.geocodeAddress(argv.address).then((location)=>{
  console.log('Address  :'+location.address);
  weather.getWeather(location.lat,location.lng).then((weatherResult)=>{
    console.log("It's currently "+weatherResult.temperature+". It feels like "+weatherResult.apparentTemperature)
  }).catch((err)=>{
    console.log(err)
  })
}).catch((err)=>{
  console.log(err)
})
