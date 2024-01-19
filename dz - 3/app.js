//1)
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

var tagCounts = {};

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    // Если ключ уже существует в объекте, увеличиваем значение на 1, иначе устанавливаем значение 1.
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
}

console.log(tagCounts);

//2)
var firstArray = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
var secondArray = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];

var commonElements = [];

for (var i = 0; i < firstArray.length; i++) {
    var currentElement = firstArray[i];
    if (secondArray.includes(currentElement) && !commonElements.includes(currentElement)) {
        commonElements.push(currentElement);
    }
}

console.log(commonElements);
