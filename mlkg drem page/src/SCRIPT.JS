const hrs2 = document.querySelector("#hrs");
setInterval(() => {
    let data = new Date();
    let hrs = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();
    if (hrs < 10) { hrs = `0${hrs}` };
    if (min < 10) { min = `0${min}` };
    if (seg < 10) { seg = `0${seg}` };
    hrs2.textContent = `Horas | ${hrs}:${min}:${seg}`;
})