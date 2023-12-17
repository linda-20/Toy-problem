// students marks
// A > 79, 
// B - 60 to 79, 
// C -  59 to 49, 
// D - 40 to 49, 
// E - less 40.


// Prompt the user to input student marks
var marks = 55;


marks = Number(marks);

// Check if the input is a valid number between 0 and 100
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid input! Please enter a number between 0 and 100.");
} else {