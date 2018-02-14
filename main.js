const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

// Creates a List

const destination = document.querySelector("main");

function printResult(result) {
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(result);
    destination.appendChild(newElement);
}

// This gets the string bestThing ready by taking out the spaces.
const noSpace = bestThing.replace(/ /g, "");
const bestThingArray = bestThing.split(" ")

// This creates an array out of the gotCitiesCSV
const splitGot = gotCitiesCSV.split(",")


// 1. Display an array from the cities in gotCitiesCSV

printResult("1. " + gotCitiesCSV);

// 2. Display an array of words from the sentence in bestThing

printResult("2. " + bestThing.split(" "));

// 3. Display a string separated by semi-colons instead of commas from gotCitiesCSV

printResult("3. " + gotCitiesCSV.replace(/,/g, ";"));

// 4. Display a CSV (comma-separated) string from the lotrCitiesArray

printResult("4. " + lotrCitiesArray.join(","));

// 5. Display the first 5 cities in lotrCitiesArray

printResult("5. " + lotrCitiesArray.slice(0, 5));

// 6. Display the last 5 cities in lotrCitiesArray

printResult("6. " + lotrCitiesArray.slice(-5));

// 7. Display the 3rd to 5th city in lotrCitiesArray

printResult("7. " + lotrCitiesArray.slice(3, 6));
// 8. Using splice, remove "Rohan" from lotrCitiesArray

lotrCitiesArray.splice(2, 1)
printResult("8. " + lotrCitiesArray);

// 9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray

lotrCitiesArray.splice(5, 2)
printResult("9. " + lotrCitiesArray);

// 10. Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"

lotrCitiesArray.splice(2, 0, 'Rohan');
printResult("10. " + lotrCitiesArray);

// 11. Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray

lotrCitiesArray.splice(5, 1, 'Deadest Marshes');
printResult("11. " + lotrCitiesArray);


// 12. Using slice, display the first 14 characters from bestThing

printResult("12. " + noSpace.slice(0, 14));

// 13. Using slice, display the last 12 characters from bestThing

printResult("13. " + noSpace.slice(-14));

// 14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"

printResult("14. " + noSpace.slice(23, 39));

// 15. Repeat #13 using substring instead of slice.

printResult("15. " + noSpace.substring(noSpace.length - 14));

// 16. Repeat #14 using substr instead of slice.


printResult("16. " + noSpace.substring(23, 39));

// 17. Find and display the index of "only" in bestThing

printResult("17. " + bestThing.indexOf("only"));

// 18. Find and display the index of the last word in bestThing

printResult("18. " + bestThing.lastIndexOf("bit"));

// 19. Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)

for (let i = 0; i < splitGot.length; i++) {
    if (splitGot[i].includes("aa") || splitGot[i].includes("ee") || splitGot[i].includes("ii") || splitGot[i].includes("oo") || splitGot[i].includes("uu")){
       printResult("19. " + splitGot[i]);
    }
}

// 20. Find and display all cities from lotrCitiesArray that end with "or"

for (let i = 0; i < lotrCitiesArray.length; i++) {
    if (lotrCitiesArray[i].substring(lotrCitiesArray[i].length - 2) === "or"){
       
        printResult("20. " + lotrCitiesArray[i]);
    }
}


// 21. Find and display all the words in bestThing that start with a "b"

for (let i = 0; i < bestThingArray.length; i++) {
    if (bestThingArray[i].substring(0, 1) === "b"){
        printResult("21. " + bestThingArray[i]);
    }
}

// 22. Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"

    if (lotrCitiesArray.includes("Mirkwood") == true) {
        printResult("22. " + "Yes");
    }

// 23. Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"

    if (lotrCitiesArray.includes("Hollywood")  == false) {
        printResult("23. " + "No");
    } 

// 24. Display the index of "Mirkwood" in lotrCitiesArray

printResult("24. " + lotrCitiesArray.indexOf("Mirkwood"));

// 25. Find and display the first city in lotrCitiesArray that has more than one word

for (let i = 0; i < lotrCitiesArray.length; i++) {
    if (lotrCitiesArray[i].includes(" ")){
        printResult("25. " + lotrCitiesArray[i]);
    }
}

// 26. Reverse the order in lotrCitiesArray

printResult("26. " + lotrCitiesArray.reverse());

// 27. Sort lotrCitiesArray alphabetically

printResult("27. " + lotrCitiesArray.sort());

// 28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)

printResult("28. " + lotrCitiesArray.sort(function(a, b){
   return a.length - b.length
}));

// 29. Using pop, remove the last city from lotrCitiesArray

printResult("29. " + lotrCitiesArray.pop());

// 30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array


lotrCitiesArray.push("Rohan")
printResult("30. " + lotrCitiesArray);

// 31. Using shift, remove the first city from lotrCitiesArray

printResult("31. " + lotrCitiesArray.shift());

// 32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the

lotrCitiesArray.unshift("Beleriand");
printResult("32. " + lotrCitiesArray);



