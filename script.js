
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const telefone = '5591985553738';

    if (!nome || !mensagem) {
        alert('Preencha todos os campos!');
        return;
    }

    const texto = `Olá, me chamo ${nome}. ${mensagem}`;
    const msgformatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgformatada}`;

    window.open(url, '_blank');
}

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const linksMenu = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => {
    const aberto = menu.classList.toggle('ativo');

    menuToggle.setAttribute('aria-expanded', aberto);
    menuToggle.setAttribute(
        'aria-label',
        aberto ? 'Fechar menu' : 'Abrir menu'
    );

    menuToggle.textContent = aberto ? '✕' : '☰';
});

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
});
