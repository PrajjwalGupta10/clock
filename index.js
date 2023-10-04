let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a=new Date();
    date=a.toLocaleDateString(undefined,options);
    // time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('zone').innerHTML= "<br>"+date;
}, 1000);

setInterval(() => {
    b=new Date();
    let h=b.getHours();
    let m=b.getMinutes();
    let s=b.getSeconds();
    let session="AM"
    
    if (h>12){
        h=h-12;
    }
    if (h>12){
        session="PM";
    }
    h=h<10 ? "0"+h : h
    m=m<10 ? "0"+m : m
    s=s<10 ? "0"+s : s
    time = h + ':' + m + ':' + s + " " + session;
    document.getElementById('time').innerHTML=time;
}, 1000);

// setInterval(() => {
//     b=new Date();
//     let h=document.getElementById('hrs').innerHTML=b.getHours();
//     let m=document.getElementById('min').innerHTML=b.getMinutes();
//     let s=document.getElementById('sec').innerHTML=b.getSeconds();
    
//     // document.getElementById('time').innerHTML="&nbsp&nbsp"+ time + " <br>on " + date;
// }, 1000);

