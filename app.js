function getZodiacSign(month, day) {
    var daysInMonth = {
        1: 31,
        2: 28, // Может потребоваться это скорректировать для високосных годов
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };

    if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > daysInMonth[month]) {
        return "Неверные данные";
    }

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Овен";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Телец";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Близнецы";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Рак";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Лев";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Дева";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Весы";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Скорпион";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Стрелец";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Козерог";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Водолей";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Рыбы";

    return "Неверные данные";
}

var inputMonth = prompt("Введите месяц вашего рождения:");
var inputDay = prompt("Введите день вашего рождения:");

var month = getMonthNumber(inputMonth.toLowerCase());
var day = parseInt(inputDay);

if (isNaN(month) || isNaN(day)) {
    alert("Неверные данные");
} else {
    var zodiacSign = getZodiacSign(month, day);
    alert("Ваш знак зодиака: " + zodiacSign);
}

function getMonthNumber(month) {
    var months = {
        "январь": 1,
        "февраль": 2,
        "март": 3,
        "апрель": 4,
        "май": 5,
        "июнь": 6,
        "июль": 7,
        "август": 8,
        "сентябрь": 9,
        "октябрь": 10,
        "ноябрь": 11,
        "декабрь": 12,
    };

    return months[month.toLowerCase()] || NaN;
}
