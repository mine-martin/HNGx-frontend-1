// Function to update the current day of the week
function updateDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    dayOfWeek;
}

// // Function to update the current UTC time
// function updateUTCTime() {
//     const currentTime = new Date().getTime();
//     document.querySelector('[data-testid="currentUTCTime"]').textContent = currentTime;
// }

// Function to update and continuously count the current UTC time in "HH:MM:SS:MM" format
function updateUTCTime() {
  setInterval(() => {
    const currentTime = new Date();
    const hours = currentTime.getUTCHours().toString().padStart(2, "0");
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
    const milliseconds = currentTime
      .getUTCMilliseconds()
      .toString()
      .padStart(3, "0");

    const formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
      formattedTime;
  }, 100); // Update every 100 milliseconds (0.1 seconds)
}

// Call the functions to update the day of the week and UTC time
updateDayOfWeek();
updateUTCTime();
