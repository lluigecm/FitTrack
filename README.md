# 🏋️ FitTrack

Aplicação de acompanhamento de treinos de academia: cadastro de exercícios, registro de treinos com séries, repetições e carga, e um dashboard com estatísticas. Projeto full-stack com frontend Angular e backend NestJS persistindo em PostgreSQL.

🔗 **Online:** [fit-track-rosy.vercel.app](https://fit-track-rosy.vercel.app)

## Stack

| Camada   | Tecnologia                                        |
| -------- | ------------------------------------------------- |
| Frontend | Angular 21 (standalone components, Reactive Forms), SCSS |
| Backend  | NestJS 11, Prisma 7 (driver adapter `@prisma/adapter-pg`) |
| Banco    | PostgreSQL                                        |
| Deploy   | Frontend na Vercel · Backend + banco na Railway   |

## Funcionalidades

- **Login** — autenticação simples no frontend (dois usuários de demonstração). As rotas internas são protegidas por um guard.
- **Dashboard** — estatísticas reais vindas da API: treinos no mês, último treino, exercícios cadastrados e gráfico de treinos por mês (últimos 6 meses).
- **Exercícios** — CRUD do catálogo de exercícios, com categoria por grupo muscular.
- **Treinos** — criação de treino com múltiplos exercícios (séries, repetições, carga), listagem, página de detalhe e remoção.

### Usuários de demonstração

| Usuário | Senha   |
| ------- | ------- |
| `admin` | `admin` |
| `teste` | `0000`  |

> Observação: o login é apenas uma camada de demonstração no frontend. Os dados de treinos/exercícios são compartilhados entre os usuários.

## Rodando localmente

Pré-requisitos: Node.js, npm e uma instância PostgreSQL local.

### 1. Backend (`fittrack-api`)

```bash
cd fittrack-api
npm install
```

Crie um arquivo `.env` em `fittrack-api/`:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/fittrack"
PORT=3000
```

Crie as tabelas no banco e inicie a API:

```bash
npx prisma db push
npm run start:dev
```

A API sobe em `http://localhost:3000/api`.

### 2. Frontend (raiz do projeto)

```bash
npm install
npm start
```

O app abre em `http://localhost:4200` e consome a API local (configurado em `src/environments/environment.ts`).

## Build de produção

```bash
# Frontend
npm run build      # gera dist/fittrack/browser e copia para browser/

# Backend
cd fittrack-api
npm run build      # prisma generate + nest build → dist/main.js
```

A URL da API de produção fica em `src/environments/environment.prod.ts`.

## Estrutura

```
FitTrack/
├── src/                  # Aplicação Angular
│   ├── app/
│   │   ├── pages/        # login, dashboard, treinos, treino-detalhe, treino-form, exercicios
│   │   ├── shared/       # navbar, card, treino-item, exercicio-item
│   │   └── services/     # treino, exercicio, auth.guard
│   └── environments/     # apiUrl por ambiente (dev/prod)
└── fittrack-api/         # API NestJS
    ├── src/
    │   ├── exercicio/    # controller, service, dto
    │   ├── treino/       # controller, service, dto
    │   └── prisma/       # PrismaService
    └── prisma/schema.prisma
```

## Endpoints da API

| Método | Rota                 | Descrição                |
| ------ | -------------------- | ------------------------ |
| GET    | `/api/exercicios`    | Lista exercícios         |
| POST   | `/api/exercicios`    | Cria exercício           |
| DELETE | `/api/exercicios/:id`| Remove exercício         |
| GET    | `/api/treinos`       | Lista treinos            |
| GET    | `/api/treinos/:id`   | Detalhe de um treino     |
| POST   | `/api/treinos`       | Cria treino              |
| DELETE | `/api/treinos/:id`   | Remove treino            |
