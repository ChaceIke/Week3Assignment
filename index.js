var ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages[ages.length - 1] - ages[0])

ages.push(43);
console.log(ages[ages.length - 2] - ages[ages.length - 1])

var sum = 0
for (var i = 0; i < ages.length; i++){
    sum += ages[i]
}

var average = sum / ages.length;

console.log(average);

var names = ["sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

var totalLetters = 0;
var averageLetters = 0

for (i = 0; i < names.length; i++){
    var name = names[i];
    totalLetters += name.length;
}

averageLetters = totalLetters / names.length

console.log(averageLetters)

var allNames = ""

for (var i = 0; i < names.length; i++){
    allNames += names[i] + " "
}
console.log(allNames);

//Q: How do you access the last element of any array?
//A: You would use [array.length - 1]

//Q: How do you access the first element of any array?
//A: You would use array[0]

nameLengths = []

for (i = 0; i < names.length; i++){
    var name = names[i];
    var individualNameLengths = name.length
    nameLengths.push(individualNameLengths);
}
console.log(nameLengths)

elementsSum = 0;

for (i = 0; i < nameLengths.length; i++){
    elementsSum += nameLengths[i];
}

console.log(elementsSum);

function myFunction(word, n){
    var repeatedWord = "";
    for (var i = 0; i < n; i++){
        repeatedWord += word;
    }
    return repeatedWord;
}

console.log(myFunction("Cow", 14));


function myNamer(firstName, lastName){
    fullName = firstName + " " + lastName;
    return fullName
}
console.log(myNamer("Chace", "Eichmeier"));

numbersArray = [93, 4, 4, 4, 8]

function numberChecker(numbersArray){
    var sum = 0
    for (var i = 0; i < numbersArray.length; i++){
        sum += numbersArray[i];
    }
    return sum > 100;
}
console.log(numberChecker(numbersArray));

numbersArray2 = [30, 30, 30]

console.log(numberChecker(numbersArray2));

numbersArray3 = [23, 24, 39, 28]

function averageElementsFinder(numbersArray3){
    sum = 0
    for (i = 0; i < numbersArray3.length; i++){
    sum += numbersArray3[i]
    averageOfAllElements = sum / numbersArray3.length
    }
    return averageOfAllElements
}
console.log(averageElementsFinder(numbersArray3));

function isSecondArrayAverageBiggerThanThird(numbersArray2, numbersArray3){
    numbersArray2Sum = 0;
    numbersArray3Sum = 0;

    for (var i = 0; i < numbersArray2.length; i++){
        numbersArray2Sum += numbersArray2[i]
    }
    for (var i = 0; i < numbersArray3.length; i++){
        numbersArray3Sum += numbersArray3[i]
    }
    
    numbersArray2Average = numbersArray2Sum / numbersArray2.length
    numbersArray3Average = numbersArray3Sum / numbersArray3.length
    return numbersArray2Average > numbersArray3Average
}
console.log(isSecondArrayAverageBiggerThanThird(numbersArray2, numbersArray3));

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === false){
        return false
    } else if (moneyInPocket > 10.50){
        return true
    }
    return false;
}
console.log(willBuyDrink(true, 9.50))

function canIBuyVideoGame(cardBalance, priceOfGame){
    if (cardBalance > priceOfGame){
        return true && console.log("YES!")
    }
    return false;
}
canIBuyVideoGame(80, 60);