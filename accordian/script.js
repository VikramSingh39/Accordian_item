const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');

        // Toggle active class
        answer.classList.toggle('active');
        arrow.classList.toggle('active');
    });
}); 