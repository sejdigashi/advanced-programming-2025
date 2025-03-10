// Function to greet the user by name
function greetUser(name) {
  if (!name) {
    throw new Error("Name cannot be empty!"); // Error handling for empty input
  }
  return `Hello, ${name}!`;
}

// Function to get the current date and time in a readable format
function getCurrentDateTime() {
  const now = new Date();
  return now.toLocaleString(); // Formats date and time in a user-friendly way
}

try {
  // Print "Hello, World!" to the console
  console.log("Hello, World!");

  // Ask for the user's name and store it
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("What is your name? ", (name) => {
    try {
      // Greet the user by name
      console.log(greetUser(name.trim())); // Trim to remove extra spaces

      // Print the current date and time
      console.log(`Current Date and Time: ${getCurrentDateTime()}`);
    } catch (error) {
      // Handle errors (e.g., empty name)
      console.error(`Error: ${error.message}`);
    } finally {
      // Close the readline interface
      readline.close();
    }
  });
} catch (error) {
  // Handle unexpected errors
  console.error(`An unexpected error occurred: ${error.message}`);
}