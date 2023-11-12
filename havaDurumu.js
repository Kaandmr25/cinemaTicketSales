const url = "https://api.openweathermap.org/data/2.5/";
const key = "d929f2e61171fdbbbd0542d4a64425e3";


const searchBar = document.getElementById("searchBar"); // inputu aldık.

searchBar.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        getResult(searchBar.value);
    }
});

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}`;
    console.log(query)

    fetch(query).then(response => response.json())
        .then(data)
}

const data = (result) => {
    console.log(result);




    if (result.cod !== "404") {
        let city = document.querySelector(".city");
        city.innerText = `${result.name},${result.sys.country}`;



        let temp = document.querySelector(".temp");
        temp.innerText = `${Math.round(result.main.temp - 273.15)}°C`;


        const turkishDescriptions = {
            "clear sky": "Açık Hava",
            "broken clouds": "Parçalı Bulutlu",
            "light rain": "Hafif Yağmurlu",
            "few clouds": "Bulutlu"
        };


        let description = document.querySelector(".description");
        const weatherDescription = result.weather[0].description;
        const turkishDescription = turkishDescriptions[weatherDescription] || weatherDescription; // türkçe açıklama yoksa ingizicesini yazar.
        description.innerText = turkishDescription;

        let minMax = document.querySelector(".minMax");
        minMax.innerText = `Münervver Enver${Math.round(result.main.temp_min - 273.15)}°C / ${Math.round(result.main.temp_max - 273.15)}°C`;
    }
    else {
        let city=document.querySelector(".city");
        city.innerText = "Şehir Bulunamadı";

    }

}






// result:sonuc
// query:sorgu
// keypress : bastığımız anda.
// keyup : basıp çektiğimizde.