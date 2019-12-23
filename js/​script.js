// Vacation Type
var vacationType = prompt ("What kind of trip would you like to go on, musical, tropical, or adventurous?");

if (vacationType == "Musical") {
    console.log(destination = "New Orleans");
} else if (vacationType == "Tropical") {
    console.log(destination ="Beach Vacation in Mexico");
} else if (vacationType == "Adventurous") {
    console.log(destination = "Whitewater Rafting the Grand Canyon");
}

// Group Size
var groupSize = prompt ("How many are in your group?");

if (groupSize >= 1 && groupSize <= 2) {
    console.log(travelSuggestion ="First Class");
} else if (groupSize >= 3 && groupSize <= 5) {
    console.log(travelSuggestion = "Helicopter");
} else if (groupSize >= 6) {
    console.log(travelSuggestion = "Charter Flight");
}

// Results
function results() {
    return("Since you’re a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + travelSuggestion + " to " + destination);
}

console.log(results());
