let URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=63c6c99b98f1512e86cd8a7163e8216c&units=metric';
console.log('hello');
// let response = fetch(URL).then((v) =>{
//   data = v.json()
//   return data
  
// }).then((a)=>{console.log(a)})
async function weatherApi(){
  let response = await fetch(URL)
  console.log('started')
  let data = await response.json()
  console.log(data)
  document.querySelector('#temp').innerHTML = data.main.temp 
  document.querySelector('#city').innerHTML = data.name

  
}
weatherApi()