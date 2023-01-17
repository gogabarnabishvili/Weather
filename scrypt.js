 const city = document.querySelector(".city");
 const data1 = document.querySelector(".data");
 const celsius = document.querySelector(".celsius");
 const cloudy = document.querySelector(".cloudy");
 const visibility = document.querySelector(".visibility");
 const feels = document.querySelector(".feels");
 const humidity = document.querySelector(".humidity");
 const wind = document.querySelector(".wind");

 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 const d = new Date();
 let day = days[d.getDay()];
 data1.innerHTML = day + " " + "  " + d.getMonth() + 1 + " / " + d.getDate() + " / " + d.getFullYear();

 fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=42c684cdb502434b7bdad542ddabbb30")
     .then((Response) => Response.json())
     .then((data) => {
         console.log(data)

         const cytyBox = document.createElement("div");
         cytyBox.setAttribute("class", "cytyBox")
         const imageCloud = document.createElement("img");


         visibility.innerHTML = `Visibility ${data.visibility}`;
         wind.innerHTML = `Wind ${data.wind.gust}`;
         humidity.innerHTML = `humidity ${data.main.humidity}`
         feels.innerHTML = `feels like ${data.main.feels_like}`;
         celsius.innerHTML = data.main.temp
         city.innerHTML = data.name;
     })