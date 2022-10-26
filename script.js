function startTime(){
    let am_pm = "AM";
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let day = weekday[time.getDay()];

    if (hour>12){
        am_pm = "PM";
    }
    document.getElementById('time').innerHTML = "Time :-"+" " +hour + " : "+ min + ":" + sec +" "+ am_pm;
    document.getElementById('date').innerHTML = "Date :-"+" "+year + " : "+ month + ":" + date;
    document.getElementById('day').innerHTML = "Day :-"+" "+day;

    
}
setInterval(startTime,1000);
// console.log(hour,min,sec)