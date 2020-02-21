//This function is to get the input from the user form and displays it in the form at the bottom of the page;

function greetings() {

//Here, I am putting the information that is grabbed from the input and putting it in the span element to show on the form.
  document.getElementById("recipientName").innerHTML = document.getElementById("userName").value;
  document.getElementById("organizationName").innerHTML =  document.getElementById("orgName").value;
  document.getElementById("eventDate").innerHTML = document.getElementById("userEvent").value;
  document.getElementById("websiteURL").innerHTML = document.getElementById("websiteName").value;
  document.getElementById("hostName").innerHTML = document.getElementById("userHost").value;

}
