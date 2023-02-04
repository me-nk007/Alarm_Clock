console.log('We will be making a wall clock');

function updateClock() {
    // Get the current date
    let currentTime = new Date();

    //Extracting Hour, minutes and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let currentYear = currentTime.getFullYear();
    let currentMonth = currentTime.getMonth();
    let currentDate = currentTime.getDate();

    // Pad 0 if minute or second is less than 10(single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;


    // Convert Railway clock to AM/PM clock
    let timeofDay = (currentHour < 12) ? "AM" : "PM";
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;


    // Prepare the time string from hour, minute and second
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeofDay
    let currentDateStr = currentYear + "/" +  currentMonth+1 + "/" + currentDate;

    // Insert the time string inside the DOM.
    document.getElementById("clock").innerHTML = currentDateStr + " " + currentTimeStr;

}



// setTimeout runs only once according to argument given to it but setInterval runs each time the interval is set ot it.