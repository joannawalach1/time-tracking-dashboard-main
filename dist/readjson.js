const linkDaily = document.getElementById("paradaily");
const linkWeekly = document.getElementById("paraweekly");
const linkMonthly = document.getElementById("paramonthly");
const hours = document.getElementsByClassName("print-data");
const dynamicText = document.getElementsByClassName("boxtext");
const lastWeek = document.getElementsByClassName("lastweek");

linkDaily.addEventListener("click", function getDailyDates() {
    for (let i = 0; i < hours.length; i++) {
        fetch('./dist/data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dynamicText[i].textContent = "yesterday";
                hours[i].textContent = data[i].timeframes.daily.current + ' hrs';
                lastWeek[i].textContent = data[i].timeframes.daily.previous + ' hrs';
            })
            .catch((err) => {
                console.log(err)
            })
    }
})


linkWeekly.addEventListener("click", function getWeeklyDates() {
    for (let i = 0; i < hours.length; i++) {
        fetch('./dist/data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dynamicText[i].textContent = "last week";
                hours[i].textContent = data[i].timeframes.weekly.current + ' hrs';
                lastWeek[i].textContent = data[i].timeframes.weekly.previous + ' hrs';
            })

            .catch((err) => {
                console.log(err)
            })
    }
})

linkMonthly.addEventListener("click", function getMonthlyDates() {
    for (let i = 0; i < hours.length; i++) {
        fetch('./dist/data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dynamicText[i].textContent = "last month";
                hours[i].textContent = data[i].timeframes.monthly.current + ' hrs';
                lastWeek[i].textContent = data[i].timeframes.monthly.previous + ' hrs';
            })

            .catch((err) => {
                console.log(err)
            })
    }
})