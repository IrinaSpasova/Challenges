function clock() {
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    if (h < 10) {
        h = "0" + h;
    }
    let m = new Date().getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    let s = new Date().getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    /* other variant:
    h=(h<10)? '0'+h:h;
    h=(m<10)? '0'+m:m;
    h=(s<10)? '0'+s:s;*/



    var am = 'AM';
    if (h > 12) {
        h = h - 12;
        var am = 'PM';
    }


    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}
let interval = setInterval(clock, 1000);