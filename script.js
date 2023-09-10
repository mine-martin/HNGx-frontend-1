function updateDayOfWeek() {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "2-digit",
    month: "short",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    formattedDate;
}

// Function to update the current UTC time
function updateUTCTime() {
  const updateUTCTimeElement = () => {
    const currentTime = new Date().getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
      currentTime;
  };

  updateUTCTimeElement(); // Update the UTC time immediately

  setInterval(updateUTCTimeElement, 100); // update the UTC time every second (100 milliseconds)
}

// Call the functions to update the day of the week and UTC time
updateDayOfWeek();
updateUTCTime();
