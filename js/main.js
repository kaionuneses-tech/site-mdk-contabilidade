// Menu mobile
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    btn.setAttribute('aria-expanded', aberto);
    btn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
  menu.addEventListener('click', e => {
    if (e.target.closest('a')) { menu.classList.remove('aberto'); btn.setAttribute('aria-expanded', false); }
  });
}

// Ano no rodapé
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();

// Mês atual na fita de calculadora do hero
const mes = document.getElementById('mes');
if (mes) mes.textContent = new Date().toLocaleDateString('pt-BR', { month: 'long' });

// Formulário: monta a mensagem e abre o WhatsApp.
// shortcut: nada é salvo em servidor; se quiser receber por e-mail/CRM, troque por Formspree ou similar.
const form = document.getElementById('form-contato');
if (form) {
  const erro = form.querySelector('.form__erro');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const falta = !d.nome?.trim() ? 'Informe seu nome.'
      : (d.telefone || '').replace(/\D/g, '').length < 10 ? 'Informe um telefone com DDD.'
      : !d.lgpd ? 'Marque a concordância com a Política de Privacidade.'
      : '';
    erro.hidden = !falta;
    erro.textContent = falta;
    if (falta) return;
    const texto = `Olá! Vim pelo site.\nNome: ${d.nome.trim()}\nTelefone: ${d.telefone.trim()}\nAssunto: ${d.assunto}` +
      (d.mensagem?.trim() ? `\nMensagem: ${d.mensagem.trim()}` : '');
    window.open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  });
}
