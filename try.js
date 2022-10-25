const request = new XMLHttpRequest();
// request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=London&appid=9bef09c5f612d5e9d330f7e944a21f1a`);
request.open('GET', `http://api.weatherapi.com/v1/current.json?key=c2e7f6f6dfd642fea0b113356222510&q=London`);
request.send();

request.addEventListener('load', function() {
  const data = JSON.parse(this.responseText);
  console.log(data);
})
