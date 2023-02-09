function alertMessage() {
    alert("Message sent!");
  }
  
  //Date and time
  function displayDateTime() {
    const dateTimeDisplay = document.getElementById("dateTime");
    const currentDateTime = new Date();
    dateTimeDisplay.innerHTML = currentDateTime.toLocaleString();
  }
  
  displayDateTime();
  setInterval(displayDateTime, 1000);
  