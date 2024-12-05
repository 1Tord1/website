const hourEl = document.getElementById("hours");
const minuteEL = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

updateclock();

function updateclock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let a = "am";

    if(h > 12){
        a = "pm";
    }

     // conditinal operator

        h = h < 10 ? "0" + h : h;

        m = m < 10 ? "0" + m : m;

        s = s < 10 ? "0" + s : s;

     // if statement
       /* 
        if(h < 10){
            h = "0" + h;
        }

        if(m < 10){
            m = "0" + m;
        }

        if(s < 10){
            s = "0" + s;
        }
        */

    hourEl.innerText = h;
    minuteEL.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = a;

    // event
    
    setTimeout(() => {
        updateclock();
    }, 1000);

}