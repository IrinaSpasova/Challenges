function clockInit(){
    var date = new Date();
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var clockDivs = [document.getElementById("hr"), document.getElementById("mn"), document.getElementById("sc")];
   /* 
    console.log(time);
    console.log(time[1]);
    console.log(time[1]/2);
    console.log(time[0]);
    console.log(time[0]*30);
    console.log(hour);
    https://dev.to/code_mystery/simple-analog-clock-using-html-css-javascript-2c6a
*/
    var hour = time[1]/2+time[0]*30;
    
    clockDivs[0].style.transform="rotate("+ hour +"deg)";
    clockDivs[1].style.transform="rotate("+ time[1]*6 +"deg)";
    clockDivs[2].style.transform="rotate("+ time[2]*6 +"deg)";
}

window.onload = function() {
    // Load clockInit function
    clockInit();
    
    // Call clockInit function at 1 second interval
    setInterval(clockInit, 1000);
};


/*
for 12:12:12
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();
  */