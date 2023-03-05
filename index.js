var ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages[ages.length - 1] - ages[0])

ages.push(43);
console.log(ages[ages.length - 2] - ages[ages.length - 1])

sum = 0
for (var i = 0; i < ages.length; i++){
    sum += ages[i]
}

var average = sum / ages.length;

console.log(average);

var names = ["sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
var lengthOfNamesArray = []

for (i = 0; i < names.length; i++){
    var individualName = names[i];
    var individualNameLength = individualName.length;
    lengthOfNamesArray.push(individualNameLength);
}
console.log(lengthOfNamesArray);

sumOfNameLengths = 0

for (i = 0; i < lengthOfNamesArray.length; i++){
    sumOfNameLengths += lengthOfNamesArray[i]
}

var averageNamelengths = sumOfNameLengths / lengthOfNamesArray.length;

console.log(averageNameLengths);