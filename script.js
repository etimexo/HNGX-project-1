// // function displayCurrentTimeUTC() {
// //     const currentTimeUTC = new Date().toUTCString();
// //     console.log(currentTimeUTC);
// //   }
// //   displayCurrentTimeUTC();
// function displayTime() {
//   let utcDisplay = document.getElementById("utc");
//   let dayOfWeek = document.getElementById("day");
//   let d = new Date();
//   function setTime() {
//     const days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//     dayOfWeek.innerHTML = days[d.getDay()];
//     let currentTimeUTC = new Date().toUTCString();
//     function updateTime() {
//       utcDisplay.innerHTML = currentTimeUTC;
//     //   setInterval(currentTimeUTC, 1000);
//     }
//     updateTime()
//   }
//   setTime()
// //   setInterval(updateTime, 1000)
// }
// displayTime();

// // utcDisplay.innerHTML = currentTimeUTC;
// // dayOfWeek.innerHTML = day;
// // setInterval(currentTimeUTC, 1000)

function displayTime() {
  let utcDisplay = document.getElementById("utc");
  let dayOfWeek = document.getElementById("day");

  function updateTime() {
    const d = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    dayOfWeek.innerHTML = days[d.getDay()];
    // let currentTimeUTC = new Date().toUTCString();
    let currentTimeUTC = Date.now()
    utcDisplay.innerHTML = currentTimeUTC;
  }

  updateTime(); // Initial display

  // Update the time every second (1000 milliseconds)
  setInterval(updateTime, 1000);
}

displayTime();
