
/*
MENU MOBILE */

const botaoMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

function fecharMenu() {
    menu.classList.remove('ativo');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
    botaoMenu.textContent = '☰';
}

if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', () => {
        const aberto = menu.classList.toggle('ativo');

        botaoMenu.setAttribute('aria-expanded', String(aberto));
        botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
        botaoMenu.textContent = aberto ? '✕' : '☰';
    });

    menu.querySelectorAll('.menu-link').forEach((link) => {
        link.addEventListener('click', fecharMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fecharMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) fecharMenu();
    });
}


/*
FORMULÁRIO → WHATSAPP*/

const NUMERO_WHATSAPP = '5591985553738';

const formulario = document.getElementById('form');

if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !mensagem) {
            alert('Preencha todos os campos!');
            return;
        }

        const texto = `Olá, meu nome é ${nome}.\n\n${mensagem}`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;

window.location.href = url
    });
}