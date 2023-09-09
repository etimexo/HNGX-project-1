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
    let currentTimeUTC = Date.now()
    utcDisplay.innerHTML = currentTimeUTC;
  }

  updateTime(); // Initial display
  setInterval(updateTime, 1000);
}

displayTime();
