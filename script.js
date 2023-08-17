document.addEventListener('DOMContentLoaded', () => {
    const primaryButtons = document.querySelectorAll('.btn-primary');

    const winnerIndex = Math.floor(Math.random() * primaryButtons.length);

    primaryButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const message = index === winnerIndex
                ? 'You won! You got the right button!'
                : 'You lost! Try again!'
            alert(message);
        });
    });
});
