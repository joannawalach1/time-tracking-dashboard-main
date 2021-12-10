const linkDaily = document.getElementById("paradaily");
const hours = document.getElementsByClassName("print-data");
const lastWeek = document.querySelectorAll("p#lastweek")

fetch('./dist/data.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })

    .catch ((err) => {
    // Do something for an error here
})

linkDaily.addEventListener("click", (data) => {
    for (let i = 0; i < hours.length; i++) {
        console.log(i); 
        hours[i].innerHTML = data[i].timeframes.daily.current; 
    }})