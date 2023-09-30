$(function () {
  var currentDate = dayjs().format("MMM, D YYYY");
  var timeDay = [document.querySelector("#hour-9"), document.querySelector("#hour-10"), document.querySelector("#hour-11"), document.querySelector("#hour-12"),
  document.querySelector("#hour-1"), document.querySelector("#hour-2"), document.querySelector("#hour-3"),
   document.querySelector("#hour-4"), document.querySelector("#hour-5"),]; //An array containing all of the slots for time from 9-5
  var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]; //An array for time of day for each hour
  $("#currentDate").text(currentDate);

  const saveBtn = document.querySelectorAll(".saveBtn");  //Trying to add click functionality to all of the save buttons

  saveBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log("Saved");
      var userInput = this.previousElementSibling.value;
      var textAreaId = this.previousElementSibling.id;

      localStorage.setItem(textAreaId, userInput);
      console.log(userInput);
      console.log(textAreaId);
    });
  });

  for (i = 0; i < hour.length; i++) {
    if (dayjs().hour(hour[i]).isBefore(dayjs())) {

      timeDay[i].classList.add("past");

    }
    else if (dayjs().hour(hour[i]).isAfter(dayjs())) {

      timeDay[i].classList.add("future");

    }
    else {

      timeDay[i].classList.add("present");

    }

    var currentValue = localStorage.getItem(`text${hour[i]}`); //Grabbing the value for Text
    var currentId = `text${hour[i]}`; //Grabbing the ID for text.

    document.getElementById(currentId).value = currentValue; //Placing the value on the id into the textarea.
  }

});
