let Time = {
    hour : "",
    min : "",
    sec : "",
    am_pm:"",
    day:""
}
function updateTime(){
    var obj = new Date();
    Time.hour = obj.getHours();
    Time.min = obj.getMinutes();
    Time.sec = obj.getSeconds();
    Time.day = obj.getDay();
    Time.am_pm = Time.hour >= 12 ? "AM" : "PM";
    render();
    // const date = time.toLocaleDateString() ;
}

function render(){
    const root = document.getElementById("root") ;
    root.innerHTML = "" ;
    
    setInterval(updateTime, 1000);
        
    const dispTime = document.createElement('h1') ;
    let currTime = Time.hour + ":" + Time.min + ":" + Time.sec +" "+ Time.am_pm ;
    dispTime.textContent = currTime ;
    
    const dispDay = document.createElement('h1') ;
    dispDay.textContent = Time.day ;

    root.appendChild(dispTime) ; 
    root.appendChild(dispDay)
    
}



// function showTime(){
//     // console.log(hour + ":"+ min + ":" +sec);

//     if(hour>=12){
//         if(hour>12){
//             hour-=12
//         }
//         am_pm = "PM";
//     }
//     else if(hour==0) {
//         hour = 12;
//         am_pm = "AM";
//     }
    
//     hour = hour<10 ? "0" + hour : hour;
//     min = min<10 ? "0"+min : min;
//     sec = sec< 10 ? "0" + sec : sec;


//     currentTime = hour +":"+ min +":" + sec + " " + am_pm;
//     presentTime.textContent = currentTime +" "+ date ;

//     // clockDiv.appendChild(presentTime);
// }
