// Массив с возрастами детей
var children = [1994, 2015, 2024, 2023, 2019, 2017, 2018, 1998, 2000, 2018, 2018, 2019];

// Получение текущего года
var currentYear = new Date().getFullYear();

// Переменная для хранения количества подарков
var gifts = 0;

// Подсчет подарков для детей в возрасте от 3 до 17 лет
for (var i of children){
    var childAge = currentYear - i;
    if (childAge >= 3 && childAge <= 17){
        gifts++;
    }
}

// Вывод информации о количестве подарков
console.log(`Всего подарков - ${gifts} из ${children.length}`);

// Сортировка возрастов в порядке убывания
children.sort(function(a, b) {
    return b - a;
});

// Вывод отсортированных возрастов
console.log("Отсортированный возраст по убыванию:", children);

//////////////////////////////////////////////////

// Функция для создания краткой формы ФИО
function createShortName(lastName, firstName, middleName) {
    // Получаем первую букву имени и отчества и формируем краткую форму
    var shortFirstName = firstName.charAt(0) + ".";
    var shortMiddleName = middleName.charAt(0) + ".";

    // Возвращаем краткую форму ФИО
    return `${lastName} ${shortFirstName}${shortMiddleName}`;
}

// Пример использования функции
var shortName = createShortName("Рысалиева", "Айзирек", "Аскаровна");
console.log(shortName);

// Функция для фильтрации книг по наличию буквы "у" в названии
function filterBooksByLetterU(...books) {
    // Разделяем книги на два списка
    var booksWithLetterU = [];
    var otherBooks = [];

    for (var book of books) {
        if (book.includes('у')) {
            booksWithLetterU.push(book);
        } else {
            otherBooks.push(book);
        }
    }

    // Выводим результаты
    console.log("Книги с буквой 'у':", booksWithLetterU);
    console.log("Остальные книги:", otherBooks);
}

// Пример использования функции для фильтрации книг
filterBooksByLetterU("Книга", "Учебник", "Программирование", "Алгоритмы");

// Массив с пользователями
var users = [
    { name: "Иван", birthdate: "1990-05-15" },
    { name: "Мария", birthdate: "1985-12-03" },
    { name: "Петр", birthdate: "1993-08-21" },
    { name: "Анна", birthdate: "1988-04-10" },
    { name: "Сергей", birthdate: "1995-11-27" }
];

// Функция для вывода данных о пользователях
function printUserData(user) {
    console.log(`- Пользователь ${user.name} родился ${user.birthdate}`);
}

// Проходимся по массиву и выводим данные о каждом пользователе
for (var user of users) {
    printUserData(user);
}
