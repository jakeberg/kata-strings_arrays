const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

// List

const destination = document.querySelector("main");


// result is what will be written into the document
function printResult(result) {
    var newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(result);
    destination.appendChild(newElement);
}


// 1. Display an array from the cities in gotCitiesCSV

printResult(gotCitiesCSV);

// 2. Display an array of words from the sentence in bestThing

printResult(bestThing.split(" "));

// 3. Display a string separated by semi-colons instead of commas from gotCitiesCSV

printResult(gotCitiesCSV.replace(/,/g, ";"));

// 4. Display a CSV (comma-separated) string from the lotrCitiesArray

printResult(lotrCitiesArray.join(","));

// 5. Display the first 5 cities in lotrCitiesArray

printResult(lotrCitiesArray.slice(0, 5));

// 6. Display the last 5 cities in lotrCitiesArray

printResult(lotrCitiesArray.slice(-5));

// 7. Display the 3rd to 5th city in lotrCitiesArray

printResult(lotrCitiesArray.slice(3, 6));
// 8. Using splice, remove "Rohan" from lotrCitiesArray

lotrCitiesArray.splice(2, 1)
printResult(lotrCitiesArray);

// 9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray

lotrCitiesArray.splice(5, 2)
printResult(lotrCitiesArray);

// 10. Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"

lotrCitiesArray.splice(2, 0, 'Rohan');
printResult(lotrCitiesArray);

// 11. Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray

lotrCitiesArray.splice(5, 1, 'Deadest Marshes');
printResult(lotrCitiesArray);

// 12. Using slice, display the first 14 characters from bestThing



function fourteen(input) {
    let re = input.replace(/ /g, "");
    let spli = re.split("");
    let sli = spli.slice(0, 14);
    return sli;
}

printResult(fourteen(bestThing));



// 13. Using slice, display the last 12 characters from bestThing

function lastTwelve(input) {
    let re = input.replace(/ /g, "");
    let spli = re.split("");
    let sli = spli.slice(-14);
    return sli;
}

printResult(lastTwelve(bestThing));


// 14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"

function between(input) {
    let re = input.replace(/ /g, "");
    let spli = re.split("");
    let sli = spli.slice(23, 39);
    return sli;
}

printResult(between(bestThing));

// 15. Repeat #13 using substring instead of slice.

function lastTwelveSub(input) {
    let re = input.replace(/ /g, "");
    let sli = re.substring(re.length - 14);
    return sli;
}

printResult(lastTwelveSub(bestThing));

// 16. Repeat #14 using substr instead of slice.

function betweenSub(input) {
    let re = input.replace(/ /g, "");
    let sli = re.substring(23, 39);
    return sli;
}

printResult(betweenSub(bestThing));

// 17. Find and display the index of "only" in bestThing

// 18. Find and display the index of the last word in bestThing

// 19. Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)

// 20. Find and display all cities from lotrCitiesArray that end with "or"

// 21. Find and display all the words in bestThing that start with a "b"

// 22. Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"

// 23. Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"

// 24. Display the index of "Mirkwood" in lotrCitiesArray

// 25. Find and display the first city in lotrCitiesArray that has more than one word

// 26. Reverse the order in lotrCitiesArray

// 27. Sort lotrCitiesArray alphabetically

// 28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)

// 29. Using pop, remove the last city from lotrCitiesArray

// 30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array

// 31. Using shift, remove the first city from lotrCitiesArray

// 32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the