var courseGeeks = {
    name: 'Geeks',
    foundingDate: 2017,
    address: {
        street: 'Ibraimova 103',
        number: null,
    },
    branches: undefined,
    showInfo() {
        console.log(`Курсы - ${this.name}`);
    },
    showInfo2() {
        function info() {
            console.log(`Курсы - ${this.name}`);
        }
        info();
    }
};
courseGeeks.showInfo();
courseGeeks.showInfo2();

//DOM
const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector("#todo_list");
const editModal = document.getElementById('editModal');
const editInput = document.getElementById('editInput');
const saveEditButton = document.getElementById('saveEditButton');
const cancelButton = document.getElementById('cancelButton');
const counterInput = document.getElementById('counter_input');
const incrementButton = document.getElementById('increment_button');
const decrementButton = document.getElementById('decrement_button');
let counterValue = 0;
let text; // для доступа к элементу h3

const createTodo = () => {
    if (input.value.trim() === '') {
        return alert('Нельзя вводить пустоту или пробелы');
    }

    const div = document.createElement('div');
    div.setAttribute('class', 'block_text');

    const divButtons = document.createElement('button');
    divButtons.setAttribute('class', 'div_buttons');

    text = document.createElement('h3'); // Присваиваем text глобально

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete_button');

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit_button');

    deleteButton.innerHTML = 'DELETE';
    editButton.innerHTML = 'EDIT';
    text.innerHTML = input.value;
    divButtons.append(deleteButton, editButton);
    div.append(text, divButtons);

    deleteButton.onclick = () => div.remove();
    text.addEventListener('click', () => text.classList.toggle('toggle'));
    editButton.onclick = () => {
        editModal.style.display = 'block';
        editInput.value = text.innerHTML; // Заполняем инпут текущим текстом
    };

    todoList.prepend(div);
    input.value = '';
};

createButton.onclick = () => createTodo();
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo();
    }
};

saveEditButton.onclick = () => {
    const newText = editInput.value.trim();

    if (newText === '') {
        alert('Ошибка: Нельзя сохранять пустоту или пробелы.');
    } else {
        text.innerHTML = newText;
        editModal.style.display = 'none';
    }
};

cancelButton.onclick = () => {
    editModal.style.display = 'none';
};

// Логика для счетчика
const updateCounterDisplay = () => {
    counterInput.value = counterValue;

    if (counterValue > 0) {
        counterInput.style.color = 'green';
    } else if (counterValue < 0) {
        counterInput.style.color = 'red';
    } else {
        counterInput.style.color = 'gray';
    }
};

incrementButton.onclick = () => {
    counterValue++;
    updateCounterDisplay();
};

decrementButton.onclick = () => {
    counterValue--;
    updateCounterDisplay();
};

updateCounterDisplay();
