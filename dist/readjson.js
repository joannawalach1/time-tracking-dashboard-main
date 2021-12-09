    const linkDaily = document.getElementById("paradaily");

    const hours = document.getElementsByClassName('printData');
    const lastWeek = document.getElementById("lastweek");

    function getData() {
        fetch('./dist/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((element, i) => {
                hours[i].innerText = data[i].timeframes.daily.current + 'hrs';
                lastWeek[i].innerText = data[i].timeframes.daily.previous + 'hrs';
            })
        })
}

linkDaily.addEventListener('click', getData());
   
    