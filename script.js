var currentDate = dayjs().format("MMMM D, YYYY");
document.getElementById("currentDay").textContent = currentDate;

// Get the current hour in 24-hour format
var currentHour = dayjs().hour();

// Iterate through each time block
var blocks = document.querySelectorAll(".time-block");
blocks.forEach(function (block) {
  var blockHour = parseInt(block.id.split("-")[1]);

  if (blockHour < currentHour) {
    block.classList.add("past");
  } else if (blockHour === currentHour) {
    block.classList.add("present");
  } else {
    block.classList.add("future");
  }
});



//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
