function updateClock() {
  const now = new Date();

  // Get time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format time
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display time
  document.getElementById("time").textContent =
    hours + ":" + minutes + ":" + seconds;

  // Display date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").textContent =
    now.toLocaleDateString(undefined, options);
}

// Update every second
setInterval(updateClock, 1000);
updateClock();