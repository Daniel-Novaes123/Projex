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

O projeto está disponível em: [projex.vercel.app](https://projex.vercel.app)

## Licença

MIT
