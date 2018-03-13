const request = require('request')
var getWeather = (lat,lng) =>{
  return new Promise((resolve,reject)=>{
    request({
      url:'https://api.forecast.io/forecast/6eab6a3975df9a8f23887ba84baa95d1/'+lat+','+lng,
      json: true
    },(error,response,body)=>{
      if(!error && response.statusCode === 200){
        resolve({
          temperature : body.currently.temperature,
          apparentTemperature : body.currently.apparentTemperature
        })
      }else{
        reject('Unable to fetch weather')
      }
    })
  })
}
module.exports.getWeather = getWeather
