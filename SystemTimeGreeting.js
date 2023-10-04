// Get the current hour from the Date object (0-23)
const currentHour = new Date().getHours();

// Function to issue a greeting based on the current hour
function getGreeting() {
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return greeting;
}

// Display the greeting message
const greetingMessage = getGreeting();
console.log(greetingMessage);
