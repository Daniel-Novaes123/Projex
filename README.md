<!-- @format -->

<<<<<<< HEAD

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

=======

# Projex

> Plataforma para desenvolvedores publicarem, gerenciarem e exibirem seus projetos.

## Sobre

O Projex é uma plataforma web onde desenvolvedores podem criar uma conta, cadastrar seus projetos e publicá-los para o mundo ver. Cada usuário tem um painel administrativo completo para gerenciar seus projetos, enquanto a área pública exibe todos os projetos publicados de todos os desenvolvedores.

## Funcionalidades

- Autenticação completa (cadastro, login e logout)
- Painel administrativo com CRUD de projetos
- Upload de imagem via URL
- Controle de status dos projetos (rascunho ou publicado)
- Área pública com todos os projetos publicados
- Página de detalhes de cada projeto
- Perfil de usuário editável
- Proteção de rotas para áreas privadas

## Tecnologias

- **React** + **TypeScript** — base da aplicação
- **Vite** — bundler e dev server
- **Tailwind CSS v4** — estilização
- **React Router v7** — roteamento
- **React Hook Form** + **Zod** — formulários e validação
- **Supabase** — autenticação, banco de dados e storage
- **TanStack Query** — gerenciamento de estado assíncrono e cache
- **Zustand** — gerenciamento de estado global (autenticação)
- **Lucide React** — ícones

## Pré-requisitos

- Node.js 18+
- Conta no [Supabase](https://supabase.com)

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/projex.git

# Entre na pasta
cd projex

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Rode o projeto
npm run dev
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

Você encontra esses valores em **Project Settings → API** no painel do Supabase.

## Banco de dados

O projeto usa duas tabelas no Supabase:

**projects**
| Coluna | Tipo |
|--------|------|
| id | uuid |
| title | text |
| description | text |
| techs | text[] |
| image_url | text |
| status | text |
| author | text |
| user_id | uuid |
| created_at | timestamp |

**profiles**
| Coluna | Tipo |
|--------|------|
| id | uuid |
| display_name | text |
| bio | text |
| avatar_url | text |

## Deploy

O projeto está disponível em: [projex-swart.vercel.app](https://projex-swart.vercel.app)

## Licença

MIT

> > > > > > > 0e43cd5e05a8a9ecf6f789078c91e1f0716bd9b2
