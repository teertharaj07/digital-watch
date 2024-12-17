
     
const currentTime=()=>{
    const localTime =new Date().toLocaleTimeString();
    document.getElementById("clock").innerText=localTime;

}
// currentTime();
setInterval(currentTime,1000)
// const realTime = currentTime();
// console.log(realTime);

