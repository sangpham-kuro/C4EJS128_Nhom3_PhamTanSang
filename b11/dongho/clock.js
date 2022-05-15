function runClock() {
    let toDay = new Date();
    let date = toDay.getDay();
    let hour = toDay.getHours();
    let minute = toDay.getMinutes();
    let second = toDay.getSeconds();
    switch (date) {
        case 0:
            date = "SUN";
            break;
        case 1:
            date = "MON";
            break;
        case 2:
            date = "TUE";
            break;
        case 3:
            date = "WEB";
            break;
        case 4:
            date = "THU";
            break;
        case 5:
            date = "FRI";
            break;
        case 6: a
            date = "SAT";
            break;
        default:

            break;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    document.getElementById("value-date").innerHTML = date;
    document.getElementById("value-hour").innerHTML = hour;
    document.getElementById("value-minute").innerHTML = minute;
    document.getElementById("value-second").innerHTML = second;
    setTimeout("runClock()", 1000);
}