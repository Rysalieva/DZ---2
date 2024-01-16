// Пункт 1
var numbers = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
// Пункт 2
var cinema = {
    films: [
        {
            title: 'Сумерки',
            genre: 'Драма',
            premiereDate: '2008-11-21',
            duration: 122,
            mainActors: ['Kristen Stewart', 'Robert Pattinson'],
            ticketPrice: 250,
            dimension: '2D'
        },
        {
            title: 'Веном',
            genre: 'Боевик',
            premiereDate: '2018-10-05',
            duration: 112,
            mainActors: ['Tom Hardy', 'Michelle Williams'],
            ticketPrice: 300,
            dimension: '3D'
        }
    ]
};

// Пункт 3
var userDigit = prompt('Введите цифру до 15:');
var romanNumeral;

switch (parseInt(userDigit)) {
    case 1:
        romanNumeral = 'I';
        break;
    case 2:
        romanNumeral = 'II';
        break;
    case 3:
        romanNumeral = 'III';
        break;
    case 4:
        romanNumeral = 'IV';
        break;
    case 5:
        romanNumeral = 'V';
        break;
    case 6:
        romanNumeral = 'VI';
        break;
    case 7:
        romanNumeral = 'VII';
        break;
    case 8:
        romanNumeral = 'VIII';
        break;
    case 9:
        romanNumeral = 'IX';
        break;
    case 10:
        romanNumeral = 'X';
        break;
    case 11:
        romanNumeral = 'XI';
        break;
    case 12:
        romanNumeral = 'XII';
        break;
    case 13:
        romanNumeral = 'XIII';
        break;
    case 14:
        romanNumeral = 'XIV';
        break;
    case 15:
        romanNumeral = 'XV';
        break;
    default:
        console.log('Введите корректную цифру до 15.');
        break;
}

if (romanNumeral) {
    console.log(`Римская цифра для ${userDigit} - ${romanNumeral}`);
}
