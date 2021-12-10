const linkDaily = document.getElementById("paradaily");
const linkWeekly = document.getElementById("paraweekly");
const linkMonthly = document.getElementById("paramonthly");
const hours = document.getElementsByClassName("print-data");
const lastWeek = document.getElementsByClassName("lastweek");

function getDailyDates(click) {
    for (let i = 0; i < hours.length; i++) {
        fetch('./dist/data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(i);
                hours[i].textContent = data[i].timeframes.daily.current + ' hrs';
                lastWeek[i].textContent = data[i].timeframes.daily.previous + ' hrs';
            })

            .catch((err) => {
                console.log(err)
                // Do something for an error here
            })
    }
}

function getWeeklyDates(click) {
    for (let i = 0; i < hours.length; i++) {
        fetch('./dist/data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(i);
                hours[i].textContent = data[i].timeframes.weekly.current + ' hrs';
                lastWeek[i].textContent = data[i].timeframes.weekly.previous + ' hrs';
            })

            .catch((err) => {
                console.log(err)
                // Do something for an error here
            })
    }
}

function getMonthlyDates(click) {
    for (let i = 0; i < hours.length; i++) {
        fetch('./dist/data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(i);
                hours[i].textContent = data[i].timeframes.monthly.current + ' hrs';
                lastWeek[i].textContent = data[i].timeframes.monthly.previous + ' hrs';
            })

            .catch((err) => {
                console.log(err)
                // Do something for an error here
            })
    }
}

switchDates("daily");

function switchDates(click) {
if (click==="daily") {
linkDaily.addEventListener("click", getDailyDates("daily"));
console.log("daily");
} else if (click==="weekly") {
linkWeekly.addEventListener("click", getWeeklyDates("weekly"));
console.log("weekly");
} else if (click==="monthly") {
linkMonthly.addEventListener("click", getMonthlyDates("monthly"));
console.log("monthly");
}

}
