$(document).ready(function () {
  // Get the current hour in 24-hour format
  var currentHour = dayjs().hour();

  // Iterate through each time timeBlock
  var timeBlocks = document.querySelectorAll(".time-block");
  timeBlocks.forEach(function (timeBlock) {
    var timeBlockHour = parseInt(timeBlock.id.split("-")[1]);

    if (timeBlockHour < currentHour) {
      timeBlock.classList.add("past");
    } else if (timeBlockHour === currentHour) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }
  });

  // Load saved user input from localStorage
  var savedInput = JSON.parse(localStorage.getItem("calendar"));
  if (savedInput) {
    timeBlocks.forEach(function (timeBlock) {
      var timeBlockId = timeBlock.id;
      var textarea = timeBlock.querySelector("textarea");
      if (savedInput[timeBlockId]) {
        textarea.value = savedInput[timeBlockId];
      }
    });
  }

  // Save user input to localstorage when the save button is clicked
  timeBlocks.forEach(function (timeBlock) {
    var saveButton = timeBlock.querySelector(".saveBtn");
    var textarea = timeBlock.querySelector("textarea");
    saveButton.addEventListener("click", function () {
      var timeBlockId = timeBlock.id;
      var userInput = textarea.value.trim();

      var savedInput = JSON.parse(localStorage.getItem("calendar")) || {};
      savedInput[timeBlockId] = userInput;
      localStorage.setItem("calendar", JSON.stringify(savedInput));
    });
  });
  // Get the current date using Day.js
  var date = dayjs().format("MMMM D, YYYY");

  // Find the element where you want to display the date (assuming it has an id of 'current-date')
  var currentDateElement = document.getElementById("currentDay");

  // Set the innerHTML of the element to display the current date
  if (currentDateElement) {
    currentDateElement.innerHTML = "Today is " + date;
  }
});
