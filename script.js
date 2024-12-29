const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

// Faz o botão "Não" se mover
noButton.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const offsetX = Math.random() * (containerRect.width - buttonRect.width);
    const offsetY = Math.random() * (containerRect.height - buttonRect.height);

    noButton.style.position = 'absolute';
    noButton.style.left = `${offsetX}px`;
    noButton.style.top = `${offsetY}px`;
});

// Redireciona para o vídeo do YouTube ao clicar no "Sim"
yesButton.addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/watch?v=LMD6MqwErzc";
});
