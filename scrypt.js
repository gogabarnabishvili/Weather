const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
let mainData12 = day + " " + "  " + d.getMonth() + 1 + " / " + d.getDate() + " / " + d.getFullYear();
const WeatherSection = document.querySelector(".WeatherSection")

function weatherCard() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=42c684cdb502434b7bdad542ddabbb30")
        .then((Response) => Response.json())
        .then((data) => {


            const leftBox = document.createElement("div");
            leftBox.setAttribute("class", "leftBox")

            const moreInfo = document.createElement("dvi");
            moreInfo.classList.add("moreInfo")

            const moreInfo1 = document.createElement("dvi");
            const moreInfo2 = document.createElement("dvi");
            const moreInfo3 = document.createElement("dvi");
            moreInfo1.classList.add("moreInfodiv")
            moreInfo2.classList.add("moreInfodiv")
            moreInfo3.classList.add("moreInfodiv")
            moreInfo.appendChild(moreInfo1)
            moreInfo.appendChild(moreInfo2)
            moreInfo.appendChild(moreInfo3)

            leftBox.appendChild(moreInfo)
            const cytyBox1 = document.createElement("dvi");
            cytyBox1.setAttribute("class", "cytyBox")
            const cytyBoxImg = document.createElement("img");
            cytyBoxImg.setAttribute("src", "img/soon.png");
            cytyBox1.appendChild(cytyBoxImg)
            const cytyBox2 = document.createElement("div");
            cytyBox2.setAttribute("class", "cytiName");
            cytyBox1.appendChild(cytyBox2);
            const cytyBoxH2 = document.createElement("h2");
            cytyBox2.appendChild(cytyBoxH2)
            cytyBoxH2.innerHTML = data.name;
            const cytyBoxP = document.createElement("p");
            cytyBox2.appendChild(cytyBoxP);
            cytyBoxP.innerHTML = mainData12;





            const midelBox1 = document.createElement("dvi");
            midelBox1.setAttribute("class", "midelBox");
            const midelBox1h2 = document.createElement("h2");
            const midelBox1h2P = document.createElement("p");
            midelBox1h2P.classList.add("midelBox1h2P")
            midelBox1h2.innerHTML = data.main.temp;
            midelBox1h2.appendChild(midelBox1h2P);
            midelBox1h2P.innerHTML = "??C"
            midelBox1.appendChild(midelBox1h2)
            const midelBox1p = document.createElement("p");
            midelBox1.appendChild(midelBox1p)
            midelBox1p.innerHTML = data.weather[0].description;

            const moreInfoWraper1 = document.createElement("dvi");
            moreInfoWraper1.setAttribute("class", "moreInfoWraper");



            const moreInfoWraper2 = document.createElement("dvi");
            moreInfoWraper2.setAttribute("class", "moreInfoWraperDiv")

            const moreInfoWraper2Img = document.createElement("img");
            moreInfoWraper2Img.setAttribute("src", "img/eye.png");


            moreInfoWraper2.appendChild(moreInfoWraper2Img);

            const moreInfoWraper2Vis = document.createElement("p");
            moreInfoWraper2Vis.innerHTML = `Visibility ${data.visibility}`;
            moreInfoWraper2.appendChild(moreInfoWraper2Vis)



            const moreInfoWraper3 = document.createElement("dvi");
            moreInfoWraper3.setAttribute("class", "moreInfoWraperDiv");

            const moreInfoWraper3Img = document.createElement("img");
            moreInfoWraper3Img.setAttribute("src", "img/vector.png");
            moreInfoWraper3.appendChild(moreInfoWraper3Img);

            const moreInfoWraper3fee = document.createElement("p");
            moreInfoWraper3fee.innerHTML = `feels like ${data.main.feels_like}`;
            moreInfoWraper3.appendChild(moreInfoWraper3fee)





            const moreInfoWraper4 = document.createElement("dvi");
            moreInfoWraper4.setAttribute("class", "moreInfoWraperDiv")


            const moreInfoWraper4Img = document.createElement("img");
            moreInfoWraper4Img.setAttribute("src", "img/humidity.png");
            moreInfoWraper4.appendChild(moreInfoWraper4Img);

            const moreInfoWraper4hum = document.createElement("p");
            moreInfoWraper4hum.innerHTML = `humidity ${data.main.humidity}`;
            moreInfoWraper4.appendChild(moreInfoWraper4hum);



            const moreInfoWraper5 = document.createElement("dvi");
            moreInfoWraper5.setAttribute("class", "moreInfoWraperDiv")


            const moreInfoWraper5Img = document.createElement("img");
            moreInfoWraper5Img.setAttribute("src", "img/wind.png");
            moreInfoWraper5.appendChild(moreInfoWraper5Img);

            const moreInfoWraper5wind = document.createElement("p");
            moreInfoWraper5wind.innerHTML = `Wind ${data.wind.gust}`;
            moreInfoWraper5.appendChild(moreInfoWraper5wind)


            const smollLIne = document.createElement("div");
            const smollLIne1 = document.createElement("div");
            smollLIne.setAttribute("class", "smollLIne")
            smollLIne1.setAttribute("class", "smollLIne")

            moreInfoWraper1.appendChild(moreInfoWraper2)
            moreInfoWraper1.appendChild(smollLIne)
            moreInfoWraper1.appendChild(moreInfoWraper3)
            moreInfoWraper1.appendChild(moreInfoWraper4)
            moreInfoWraper1.appendChild(smollLIne1)
            moreInfoWraper1.appendChild(moreInfoWraper5)



            WeatherSection.appendChild(leftBox)
            leftBox.appendChild(cytyBox1)
            leftBox.appendChild(midelBox1)
            leftBox.appendChild(moreInfoWraper1)
        })

}

console.log(weatherCard());


const addNewLocation = document.querySelector(".addNewLocation");
addNewLocation.addEventListener("click", () => {
    addNewLocation.classList.toggle("displaNone")
    console.log(weatherCard())
})