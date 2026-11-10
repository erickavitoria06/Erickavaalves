/* ========================================
   MENU MOBILE
======================================== */

const botaoMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

function fecharMenu() {
    menu.classList.remove('ativo');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
    botaoMenu.textContent = '☰';
}

botaoMenu.addEventListener('click', () => {
    const aberto = menu.classList.toggle('ativo');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
    botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    botaoMenu.textContent = aberto ? '✕' : '☰';
});

// Fecha o menu ao clicar em um link
menu.querySelectorAll('.menu-link').forEach((link) => {
    link.addEventListener('click', fecharMenu);
});

// Fecha com a tecla Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharMenu();
});

// Fecha ao voltar para a tela de PC
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) fecharMenu();
});


/* ========================================
   FORMULÁRIO → WHATSAPP
======================================== */

// Troque pelo seu número: código do país + DDD + número, só dígitos
const NUMERO_WHATSAPP = '55XXXXXXXXXXX';

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const texto = `Olá, meu nome é ${nome}.\n\n${mensagem}`;
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank', 'noopener');
});/* ========================================
   MENU MOBILE
======================================== */

const botaoMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

function fecharMenu() {
    menu.classList.remove('ativo');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
    botaoMenu.textContent = '☰';
}

botaoMenu.addEventListener('click', () => {
    const aberto = menu.classList.toggle('ativo');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
    botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    botaoMenu.textContent = aberto ? '✕' : '☰';
});

// Fecha o menu ao clicar em um link
menu.querySelectorAll('.menu-link').forEach((link) => {
    link.addEventListener('click', fecharMenu);
});

// Fecha com a tecla Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharMenu();
});

// Fecha ao voltar para a tela de PC
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) fecharMenu();
});


/* ========================================
   FORMULÁRIO → WHATSAPP
======================================== */

// Troque pelo seu número: código do país + DDD + número, só dígitos
const NUMERO_WHATSAPP = '55XXXXXXXXXXX';

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const texto = `Olá, meu nome é ${nome}.\n\n${mensagem}`;
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank', 'noopener');
});