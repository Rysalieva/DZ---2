function printDelimiter() {
    console.log('-------------------------');
}

// для вычисления средней арифметической положительных чисел
function averagePositives() {
    var sum = 0;
    var count = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > 0) {
            sum += arguments[i];
            count++;
        }
    }

    return count === 0 ? 0 : sum / count;
}

// для вычисления суммы квадратов четных чисел
function sumOfEvenSquares(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i] * numbers[i];
        }
    }

    return sum;
}

// для фильтрации слов, содержащих буквы "t" и "a"
function filterWordsByLetters(words) {
    var result = [];

    for (var i = 0; i < words.length; i++) {
        var lowerCaseWord = words[i].toLowerCase();
        if (lowerCaseWord.includes('t') && lowerCaseWord.includes('a')) {
            result.push(words[i]);
        }
    }

    return result;
}

var numbersArray = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8];
console.log('Average of Positive Numbers:', averagePositives.apply(null, numbersArray));
printDelimiter();

var anotherNumbersArray = [1, 2, 3, 4, 5];
console.log('Sum of Squares of Even Numbers:', sumOfEvenSquares(anotherNumbersArray));
printDelimiter();

var wordsArray = ['text', 'frontend', 'apple', 'banana', 'orange', 'Test'];
console.log('Filtered Words:', filterWordsByLetters(wordsArray));
printDelimiter();
