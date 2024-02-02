function showAnswer(answerId, btn) {
    var answerContainer = document.getElementById(answerId);
    answerContainer.style.display = 'block';
    btn.classList.remove('show-answer');
    btn.classList.add('hide-answer');
}

function hideAnswer(answerId, btn) {
    var answerContainer = document.getElementById(answerId);
    answerContainer.style.display = 'none';
    btn.classList.remove('hide-answer');
    btn.classList.add('show-answer');
}