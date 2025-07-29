const clock = document.querySelector(".clock");

const getTime = () => {
  let time = new Date();
  let ampm = "AM"
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  hour = hour > 12 ? hour - 12: hour;
  ampm = hour < 12 ? "PM": ampm;
  hour = hour < 10 ? hour = `0${hour}`: hour;
  minute = minute < 10 ? minute = `0${minute}`: minute;
  second = second < 10 ? second = `0${second}`: second;
  clock.innerText = `${hour} : ${minute} : ${second} ${ampm}`;

}
getTime();
setInterval(getTime, 1000)