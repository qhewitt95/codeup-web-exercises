/*// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(input){
    return input.split(" ").length - 1
// // TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
//
//     function countSpaces(input){
//         return input.split(" ").length - 1
//     }
//
//     console.log(countSpaces(" Hello there bob "));
//
// // TODO: Add validation to function above, if the argument pass is not a string it should return false.
//
//     function countSpaces(input){
//
//         if (typeof input !== "string"){
//             return false
//         }
//
//         return input.split(" ").length - 1
//
//     }
//
// // July 6th 2021
//
// // TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// // Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
//
// // TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
// //  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// // Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
//
// function capitalizeFirstLetter(array){
//     var tester = [];
//
//     for(let i = 0; i < array.length; i++){
//         tester[i] = array[i].charAt(0) + array[i].substr(1);
//     }
//     return tester;
// }
// // July 7th 2021
// // TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// // Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
//
// var personOne = {
//         firstName: "silvia",
//         lastName: "floopertan",
//         ageInYears: 34,
//         heightInInches: 65
// }
//
// // TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
// //  users full name with both first letters in the names being capitalized look at example down below for more reference.
// // Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
//
// var personTwo = {
//     firstName: "dan",
//     lastName: "valdarez",
//     ageInYears: 61,
//     heightInInches: 73
// }
//
// // TODO: Create a method on the object below that gives us the behavior that the example implies.
// // Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
//
// var personThree = {
//     firstName: "arlene",
//     lastName: "martinez",
//     ageInYears: 25,
//     heightInInches: 62
// }
//

// July 8th 2021

// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]

    function arrayOfStringsToObjects(arrayStrings){

        var arrayObjects = []

        for (let i = 0; i < arrayStrings.length; i++) {
            // console.log(arrayStrings[i])
            arrayObjects.push({ originalString:arrayStrings[i], lengthOfOriginalString:arrayStrings[i].length })
        }

        console.log(countSpaces(" Hello there bob "));
        return arrayObjects;

// TODO: Add validation to function above, if the argument pass is not a string it should return false.
    }

    function countSpaces(input) {
        var arrayOfObjects = arrayOfStringsToObjects(["hello", "dave"])
        console.log(arrayOfObjects)

        if (typeof input !== "string") {
            return false
        }
// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"

        return input.split(" ").length - 1

        function arrayOfObjectsToStrings(arrayObjectsParam) {

        }

        var results = []

// July 6th 2021
        arrayObjectsParam.forEach(function (singleObject) {

// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
            results.push(singleObject.originalString)

// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
        })

        return results.join(" ")

        function capitalizeFirstLetter(array) {
            var tester = [];

            for (let i = 0; i < array.length; i++) {
                tester[i] = array[i].charAt(0) + array[i].substr(1);
            }
            return tester;
        }

// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"

        var personOne = {
            firstName: "silvia",
            lastName: "floopertan",
            ageInYears: 34,
            heightInInches: 65
        }

// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
        console.log(arrayOfObjectsToStrings(arrayOfObjects))

        var personTwo = {
            firstName: "dan",
            lastName: "valdarez",
            ageInYears: 61,
            heightInInches: 73
        }

// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.

        var people = [personOne, personTwo, personThree];

        var personThree = {
            firstName: "arlene",
            lastName: "martinez",
            ageInYears: 25,
            heightInInches: 62
        }
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//                     {firstName: "dan", lastName: "valdarez", ageInYears: 61, heightInInches: 73}] 
        358
        js / objAndArrPractice.js
    @@
        -0, 0 + 1, 358

        @@
// function max(arrayOfNumbers){
//     return Math.max(...arrayOfNumbers);
// }

            function max(arrayOfNumbers) {

                var largestNumber;

                for (let i = 0; i < arrayOfNumbers.length; i++) {


                    if (largestNumber === undefined) {
                        largestNumber = arrayOfNumbers[0]
                    }

                    if (arrayOfNumbers[i] > largestNumber) {
                        console.log("I got in here")
                        largestNumber = arrayOfNumbers[i]
                    }

                }

                return largestNumber;

            }

        function max(arrayOfNumbers) {

            var largestNumber;

            arrayOfNumbers.forEach(function (singleNumber) {

                if (largestNumber === undefined) {
                    largestNumber = singleNumber
                }

                if (singleNumber > largestNumber) {
                    largestNumber = singleNumber
                }
            })

            return largestNumber;

        }


// function max(input){
//     if(toString.call(input) !== "[object Array]")
//         return false;
//     return Math.max.apply(null, input);
// }

// console.log(max([4,34,193,2,345,46,0]));
// console.log(max([-34,83,21,38,-2039,3.2]));
// console.log(max([54.5,2,34,-93]));


//
// console.log(max([4, 34, 193, 2, 345, 46, 0]));
// // Should return the following
// // 345
//
// console.log(max([-34, 83, 21, 38, -2039, 3.2]));
// // Should return the following
// // 83
//
// console.log(max([54.5, 2, 34, -93]));
// // Should return the following
// // 54.5


// function whoIsPassing(arrayOfStudents){
//
//     var passingResults = [];
//
//
//     for (let i = 0; i < arrayOfStudents.length; i++) {
//
//
//         if (arrayOfStudents[i].classAverage >= 60){
//             // this means they are passing
//
//             passingResults.push(
//                 {
//                 name: arrayOfStudents[i].name,
//                 passing: true
//                 }
//             )
//
//         }else{
//             // this means the student is failing
//
//             passingResults.push(
//                 {
//                     name: arrayOfStudents[i].name,
//                     passing: false
//                 }
//             )
//
//         }
//     }
//
//     return passingResults;
//
// }

// function whoIsPassing(arrayOfStudents){
//
//
//     var passingResults = [];
//
//
//     for (let i = 0; i < arrayOfStudents.length; i++) {
//
//         var currentStudentsName = arrayOfStudents[i].name
//
//
//         var isCurrentStudentPassing = (arrayOfStudents[i].classAverage >= 60);
//
//         passingResults.push(
//             {
//                 name: currentStudentsName,
//                 passing: isCurrentStudentPassing
//             }
//         )
//     }
//
//     return passingResults;
// }
//
// var students = [
//     {
//         name: "Phill Rundy",
//         classAverage: 53
//     },
//     {
//         name: "Samuel Moore",
//         classAverage: 71
//     },
//     {
//         name: "Mark Tendly",
//         classAverage: 84
//     },
//     {
//         name: "Dough Mosh",
//         classAverage: 87
//     },
//     {
//         name: "Bran Thomb",
//         classAverage: 93
//     },
//     {
//         name: "Mario Yushi",
//         classAverage: 82
//     },
//     {
//         name: "Nathan Skywalker",
//         classAverage: 52
//     }
// ]
//                     // arrayOfStudents = students
// console.log(whoIsPassing(students));

// function dateStringToObject(string){
//
//     var splitString = string.split("-")
//
//     var dateObject = {};
//
//     dateObject.year = splitString[0]
//     dateObject.day = splitString[2]
//     dateObject.month = splitString[1]
//
//     return dateObject;
//
// }


// function dateStringToObject(string){
//
//     var splitString = string.split("-")
//
//     return {month: splitString[1], day: splitString[2], year: splitString[0]};
//
// }
//
// console.log(dateStringToObject("2016-2-13"));
// // Should return the following
// // {month: 2, day: 13, year: 2016}
//
// console.log(dateStringToObject("2005-11-29"));
// // Should return the following
// // {month: 11, day: 29, year: 2005}
//
// console.log(dateStringToObject("1994-12-21"));
// // Should return the following
// // {month: 12, day: 21, year: 1994}


// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
//
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
//
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
//
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
//
// console.log(reverseString("squid"));
// // Should return the following
// "diuqs"
//
// console.log(reverseString("tilda"));
// // Should return the following
// "adlit"
//
// console.log(reverseString("2016-02-13"));
// // Should return the following
// "31-21-6102"
//
//
// function reverseString(string){
//
//     var revString = ""
//
//     for (let i = string.length - 1; i >= 0 ; i--) {
//
//         revString += string.charAt(i);
//
//     }
//
//     return revString
// }

// function numberInfo(number){
//
//     var isNumberPositive = (number > 0);
//     var isNumberEven = (number % 2 === 0);
//     var isNumberZero = (number === 0);
//
//
//     return {
//         isPositive: isNumberPositive,
//         isEven: isNumberEven,
//         isZero: isNumberZero
//     }
//
//
// }

// function numberInfo(number){
//
//     return {
//         isPositive: (number > 0),
//         isEven: (number % 2 === 0),
//         isZero: (number === 0)
//     }
// }
//
//
// console.log(numberInfo(-1));
// // Should return the following
// // {
// //     isPositive: false,
// //         isEven: false,
// //     isZero: false
// // }
//
// console.log(numberInfo(6));
// // Should return the following
// // {
// //     isPositive: true,
// //         isEven: true,
// //     isZero: false
// // }
//
// console.log(numberInfo(0));
// // Should return the following
// // {
// //     isPositive: false,
// //         isEven: true,
// //     isZero: true
// // }

// function removeDuplicates(arrayOfStrings){
//     return [...new Set(arrayOfStrings)]
// }

// function removeDuplicates(arrayOfStrings){
//
//     var uniqueStrings = [];
//
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//
//         if (uniqueStrings.includes(arrayOfStrings[i])){
//
//         }else{
//             uniqueStrings.push(arrayOfStrings[i])
//         }
//
//     }
//
//     return uniqueStrings
//
// }
//
// console.log(removeDuplicates(["bob", "squid", "samantha", "bob"]));
// // Should return the following
// // ["bob","squid","samantha"]
//
// console.log(removeDuplicates(["tilda", "tilda"]));
// // Should return the following
// // ["tilda"]
//
// console.log(removeDuplicates(["2016-02-13", "1994-12-21", "2016-02-13", "2016-02-13", "2005-11-29"]));
// // Should return the following
// // ["1994-12-21","2016-02-13","2005-11-29"]


        function mostOccuringNumber(numbers) {
            // 1. count the # of times each number occurs
            var counts = [];
            for (let i = 0; i < numbers.length; i++) {
                var aNumber = numbers[i];
                if (counts[aNumber] === undefined) {
                    counts[aNumber] = 1;
                } else {
                    counts[aNumber]++; // gives us access to the counts element at index "aNumber"
                }
            }
            // console.log(counts);
            // counts[0] = 55;
            // counts["frogs"] = 1;
            // 2. scan through the associative array and keep track of the value with the highest count
            /!*var maxCount = 0;
            var winningNumber = "";
            for (const countsKey in counts) {
                // console.log("the counts element at countsKey " + countsKey + " has a tally of " + counts[countsKey]);
                var currentCount = counts[countsKey];
                // when currentCount is > maxCount, we have a new winner so far
                if (currentCount > maxCount) {
                    // update 2 things when we have a new winner
                    maxCount = currentCount;
                    winningNumber = countsKey;
                }
            }
            return winningNumber;
        }
    }*!/*/
