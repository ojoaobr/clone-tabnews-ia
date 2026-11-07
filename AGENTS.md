# clone-tabnews-ia

Clone do [TabNews](https://www.tabnews.com.br/), desenvolvido durante o [curso.dev](https://curso.dev/) com a ajuda de agentes de IA.

## Stack

- Next.js com App Router (pasta `app/`) e React, em JavaScript (sem TypeScript)
- As versões ficam fixas no `package.json`. Não atualizar dependências sem pedido explícito.

## Comandos

- `npm run dev`: servidor de desenvolvimento em http://localhost:3000
- `npm run build`: build de produção. Use para validar mudanças.
- `npm start`: serve o build de produção

## Convenções

- Manter o código o mais simples e mínimo possível.
- Seguir as convenções modernas do Next.js: App Router e Server Components por padrão.
- Estilos ficam em arquivos CSS, nunca inline: CSS Modules (`*.module.css`) para cada componente ou página e `globals.css` só para estilos globais.
- O idioma do projeto e das mensagens de commit é português (pt-BR).
- O branch principal é `main`.
