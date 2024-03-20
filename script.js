let apikey = '63c6c99b98f1512e86cd8a7163e8216c'
let URL = `https://api.openweathermap.org/data/2.5/weather?`
let search = document.querySelector(".header button")

// let response = fetch(URL).then((v) =>{
//   data = v.json()
//   return data
// }).then((a)=>{console.log(a)})
async function weatherApi(city){
  
  let response = await fetch(URL+ `q=${city}&appid=${apikey}&units=metric`)
  let data = await response.json()
  if(data.cod==200){
    document.querySelector('#error').style.display = 'none'
    console.log(data)
  document.querySelector('#temp').innerHTML = data.main.temp + "&deg; c"
  document.querySelector('#city').innerHTML = data.name
  document.querySelector('#percentage').innerHTML = data.main.humidity + '%'
  document.querySelector('#speed').innerHTML = data.wind.speed + ' km/h'

  if(data.weather[0].main==='Clouds'){
    document.querySelector('#weather-icon').classList = "fa-solid fa-cloud"
  }
  else if(data.weather[0].main==='Clear'){
    document.querySelector('#weather-icon').classList = "fa-solid fa-sun"
  }
  else if(data.weather[0].main==='Rain'){
    console.log('ENtere')
    document.querySelector('#weather-icon').classList = "fa-solid fa-cloud-rain"
  }
  else if(data.weather[0].main==='Drizzle'){
    document.querySelector('#weather-icon').classList = "fa-solid fa-cloud-sun-rain"
  }
  else {
    document.querySelector('#weather-icon').classList = "fa-solid fa-cloud-sun"
  }

}
else{
  document.querySelector('#error').style.display = 'block'
}
}
// weatherApi()

search.addEventListener('click',function(){
  let city = document.querySelector('.header input').value
  weatherApi(city) 
 })
 