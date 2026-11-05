# Site MDK Contabilidade

Site estático (HTML + CSS + um pouco de JS). Não precisa instalar nada: abra `index.html` no navegador.
Para publicar, envie a pasta inteira para qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, Hostinger etc.).

## Arquivos
- `index.html` — página inicial (todas as seções)
- `privacidade.html` — Política de Privacidade (LGPD)
- `css/style.css` — visual (cores no topo do arquivo, em `:root`)
- `js/main.js` — menu mobile e formulário

## O que substituir antes de publicar

Tudo que precisa ser trocado aparece **com fundo amarelo** no site. Depois de revisar tudo,
apague o bloco "Marcação de textos a substituir" no começo de `css/style.css`.

Use "Localizar e substituir" (Ctrl+H no VS Code) em todos os arquivos:

| Procurar | Trocar por | Onde |
|---|---|---|
| `SEU_NUMERO` | número do WhatsApp só com dígitos, ex.: `5527999998888` | links, botão flutuante, formulário, dados estruturados |
| `SEU-DOMINIO.com.br` | seu domínio | SEO / Open Graph |
| `SEU_PERFIL` | usuário do Instagram / LinkedIn | rodapé |
| `[EXEMPLO...]`, `[SUBSTITUIR...]`, `[Confirmar...]` | texto real (ou apague o item) | várias seções |
| `[00.000.000/0001-00]` | CNPJ | rodapé e política |
| `[000000/O]` | registro CRC-ES | rodapé e política |

Também:
- **Depoimentos**: são todos EXEMPLO. Use apenas depoimentos reais e autorizados pelo cliente.
- **Mapa**: no Google Maps, busque o endereço → Compartilhar → Incorporar mapa → copie o `src` e cole no `<iframe>` do rodapé.
- **Imagem de compartilhamento**: crie `img/og-image.jpg` (1200×630) — aparece quando o link é enviado no WhatsApp/redes.
- **Logo**: `img/logo.png` (fundo transparente) e `img/logo-claro.png` (letras brancas, para o rodapé escuro) foram gerados a partir de `Logo.png`. Se trocar o logo, gere as duas versões de novo.
- **Política de Privacidade**: é um modelo. Revise com advogado(a) e preencha os campos amarelos.
- **Cores**: tiradas do logo (marinho, dourado e azul). Altere as variáveis em `:root` no topo de `css/style.css`.

## Formulário
Como o site não tem servidor, o formulário monta a mensagem e abre o WhatsApp com tudo preenchido.
Se preferir receber por e-mail, dá para trocar por um serviço como Formspree (ajuste em `js/main.js`).
