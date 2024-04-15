const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

//selecting parent elements
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const formats = document.querySelectorAll(".deadline-format h4");

// setting date of giveaway
//let futureDate = new Date(2024, 0, 22, 12, 50, 0);
let futureDate = new Date(2024, 2, 22, 12, 50, 0);
//console.log(futureDate);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const hour = futureDate.getHours();
let day = futureDate.getDay();
day = weekdays[day];
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

giveaway.textContent = `It will be held on ${day}, ${date} ${month} ${year}, ${hour}:${minutes}am`;

//future time difference in milliseconds
const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime(){
  const currentdate = new Date().getTime();
  //console.log(currentdate);
  //gives time in milliseconds
  
  //1s = 1000ms
  //1minute = 60s = 60*1000ms
  //1hour = 60min = 60*60*60*1000ms
  //1day = 24hr = 24*60*60*60*1000ms
  const t = (futureTime - currentdate);
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //function for adding 0 in single digit days hours etc

  function addZeroFormat(item){
    if(item<10){
      return `0${item}`;
    }
    return item;
  }
  
  //set values arrays
  const values = [days, hours, minutes, seconds];
  formats.forEach(function(format, index){
    format.innerHTML = addZeroFormat(values[index]);
  });

  if(t<0){
    clearInterval(update);
    deadline.innerHTML = `<h4 class="expired">Sorry giveaway has expired.</h4>`
  }
}

//setting auto updating time
let update = setInterval(getRemainingTime, 1000);

getRemainingTime();

