const request = require('request')

var geocodeAddress = (address)=>{
  return new Promise((resolve,reject)=>{
    address =encodeURIComponent(address)
    if(address === ""){
      reject('Please Enter Your Address')
    }
    request({
      url:'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyCYYeo4bSrgy-8MI4yRUi2ykFz2yhpJo0M',
      json: true
    },(error,response,body)=>{
      if(error){
        reject('Unable to connect google servers !!!')
      }else if (body.status === 'ZERO_RESULTS'){
        reject('Unable to find that address !!!')
      }else if (body.status === 'OK'){
        resolve({
          address:body.results[0].formatted_address,
          lat : body.results[0].geometry.location.lat,
          lng :body.results[0].geometry.location.lng
        })
      }
    })
  })
}
module.exports.geocodeAddress = geocodeAddress
