let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let duration = [6,7,8,9,5,6,4];

let $ = function(id) { return document.querySelector("#"+id); };

document.addEventListener("DOMContentLoaded", function() {
    //event handlers here
    $("user_details").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get the values from the form
        let username = $("username").value;
        let age = parseInt($("age").value);
        // Validate the age input
        if (isNaN(age) || age < 5 || age > 120) {
            alert("Please enter a valid age between 5 and 120.");
            return;
        }
        // Display the user information
        alert("Username: " + username + "\nAge: " + age);
    });

    // event handler for sleep duration
    $("update_sleep_duration").addEventListener("click", updateSleep);

    // event handler for calculating average, minimum, and max sleep duration
    $("calculate_average_sleep").addEventListener("click", showAverageMinMaxSleep);

    // event handler for showing sleep durations less than 5 hours
    $("track_sleep").addEventListener("mouseover", displaySleepDuration);
});

// define functions here
// update sleep function
function updateSleep() {
    // get day of the week
    let selectedDay = document.querySelector('input[name="day"]:checked');

    // get sleep duration
    let sleepDurationInput = $("sleep_duration").value;

    // input validation
    if (!sleepDurationInput.trim()) {
        alert("Enter a valid number for sleep duration");
        $("sleep_duration").value = ""; // Clear the input field
        return;
    }

    // convert input into an int
    let sleepDuration = parseInt(sleepDurationInput);

    // validating input is a valid number
    if (isNaN(sleepDuration) || sleepDuration < 0) {
        alert("Enter a valid positive number for sleep duration");
        return;
    }

    // selecting the day of the week
    let index = days.indexOf(selectedDay.value);

    // updating the sleep duration of the selected day of the week
    duration[index] = sleepDuration;

    // an alert box comfirming sleep duration
    alert("Your updated sleep duration is " + sleepDuration + " hrs on " + selectedDay.value);
}

// function to calculate average, minimal, and maximal sleep durations for the week
function showAverageMinMaxSleep() {
    // calculate total sleep duration
    let totalSleep = duration.reduce((acc, curr) => acc + curr, 0);
    
    // calculate average sleep duration
    let averageSleep = totalSleep / days.length;
    
    // minimal sleep duration
    let minSleep = Math.min(...duration);
    
    // maximal sleep duration
    let maxSleep = Math.max(...duration);
    
    // display the results into the the input
    let averageSleepInput = $("average_sleep_input");
    averageSleepInput.value = "Average sleep duration for this week: " + averageSleep.toFixed(2) + " hrs (Min: " + minSleep + " hrs, Max: " + maxSleep + " hrs)";
    
    // using javascript to apply styles
    averageSleepInput.style.color = "green";
    averageSleepInput.style.borderColor = "red";
}

// function to display sleep durations less than 5 hours
function displaySleepDuration() {
    // Get the username entered by the user
    let username = $("username").value;

    // display the username and sleep duration message
    let usernameParagraph = document.createElement("p");
    usernameParagraph.textContent = "Hello " + username + "! You slept less than " + 5 + " hours on on the following days";

    // display days with sleep less than 5 hours
    let sleepTable = document.createElement("table");
    sleepTable.innerHTML = "<tr><th>Day</th><th>Sleep Duration (hrs)</th></tr>";

    // find days with less than 5 hours of sleep duration
    for (let i = 0; i < days.length; i++) {
        if (duration[i] < 5) {
            let row = sleepTable.insertRow();
            let cellDay = row.insertCell(0);
            let cellDuration = row.insertCell(1);
            cellDay.textContent = days[i];
            cellDuration.textContent = duration[i];
        }
    }

    // clear previous results
    $("results").innerHTML = "";

    // Append username paragraph and sleep table to the result div
    $("results").appendChild(usernameParagraph);
    $("results").appendChild(table);
}