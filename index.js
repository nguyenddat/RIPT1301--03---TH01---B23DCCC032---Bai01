var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

function time() {
    {
        let dateToday = new Date();
        let hr = dateToday.getHours();
        let min = dateToday.getMinutes();
        let sec = dateToday.getSeconds();

        if (hr < 10) {
            hr = '0' + hr
        }
    
        if (min < 10) {
            min = '0' + min
        }
    
        if (sec < 10) {
            sec = '0' + sec
        }
    
        hour.textContent = hr;
        minute.textContent = min;
        second.textContent = sec;
        
    }
}
const clock = setInterval(time, 1000)


clock;
