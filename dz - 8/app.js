const movies = [
    {title: 'The Dark Knight', rating: 9.0, year: 2008, director: 'Christopher Nolan'},
    {title: 'Twilight', rating: 9.8, year: 2010, director: 'Anna Nolan'},
    {title: 'Spider man', rating: 8.9, year: 2013, director: 'Bob Collinz'},
    {title: 'It 2', rating: 3.4, year: 2022, director: 'Andrey Minin'},
];

function createBuyButton(row) {
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Купить';
    buyButton.className = 'buyButton';
    buyButton.addEventListener('click', () => showConfirmationModal(row));
    return buyButton;
}

function showConfirmationModal(row) {
    const modalOverlay = document.getElementById('confirmationModalOverlay');
    const modal = document.getElementById('confirmationModal');
    const confirmButton = document.getElementById('confirmButton');

    modalOverlay.style.display = 'block';
    modal.style.display = 'block';

    confirmButton.onclick = function () {
        hideConfirmationModal(row);
    };
}

function hideConfirmationModal(row) {
    const modalOverlay = document.getElementById('confirmationModalOverlay');
    const modal = document.getElementById('confirmationModal');

    modalOverlay.style.display = 'none';
    modal.style.display = 'none';

    markAsPurchased(row);
}

function markAsPurchased(row) {
    row.classList.add('grayed');
    const buyButton = row.querySelector('.buyButton');
    buyButton.style.display = 'none';
}

function populateTable() {
    const tableBody = document.getElementById('moviesTableBody');

    tableBody.innerHTML = '';

    movies.forEach(movie => {
        const row = tableBody.insertRow();
        const titleCell = row.insertCell(0);
        const yearCell = row.insertCell(1);
        const ratingCell = row.insertCell(2);
        const directorCell = row.insertCell(3);
        const actionCell = row.insertCell(4);

        titleCell.textContent = movie.title;
        yearCell.textContent = movie.year;
        ratingCell.textContent = movie.rating;
        directorCell.textContent = movie.director;

        const buyButton = createBuyButton(row);
        actionCell.appendChild(buyButton);
    });
}

populateTable();