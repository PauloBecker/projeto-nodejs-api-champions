## ⚽ Champions League API (Node.js & Express)

Este projeto foi desenvolvido a partir da videoaula "Recriando a API da Champions League com Node.js e Express". O objetivo principal foi colocar em prática conceitos de desenvolvimento back-end, utilizando TypeScript e seguindo uma arquitetura profissional em camadas (N-Layers).

## 🏗️ Arquitetura e Organização
A API foi estruturada para separar responsabilidades, facilitando a manutenção e testes:

*    Controllers: Gerenciam as requisições e respostas.
*    Services: Centralizam a lógica de negócio.
*    Repositories: Responsáveis pela persistência e manipulação dos dados.
*    Models: Definem as interfaces e contratos dos dados.
*    Data: Armazenamento local utilizando arquivos JSON.

## 📂 Árvore de Arquivos

```
champions-league-api/
├── src/
│   ├── controllers/
│   │   ├── players-controller.ts
│   │   └── clubs-controller.ts
│   ├── services/
│   │   ├── players-service.ts
│   │   └── clubs-service.ts
│   ├── repositories/
│   │   ├── players-repository.ts
│   │   └── clubs-repository.ts
│   ├── models/
│   │   ├── player-model.ts
│   │   └── club-model.ts
│   ├── data/
│   │   └── players.json
│   ├── app.ts            # Configuração do Express e Middlewares
│   ├── server.ts         # Inicialização do servidor (Porta 3333)
│   └── routes.ts         # Definição de todas as rotas da API
├── dist/                 # Arquivos compilados em JS (gerado após o build)
├── node_modules/         # Dependências do projeto
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Scripts e dependências
├── package-lock.json     # Trava de versões das dependências
└── tsconfig.json         # Configurações do TypeScript
```

## 🚀 🛠️ Tecnologias e Ferramentas

*   [Node.js](https://nodejs.org) (Runtime)
*   [Express](https://expressjs.com) (Framework Web)
*   [TypeScript](https://typescriptlang.org) (Linguagem)
*   [Nodemon](https://nodemon.io) (Ambiente de desenvolvimento)
*   **JSON** como banco de dados local.

## 🛣️ Endpoints da API
Método	Rota	Descrição
GET	/api/players/list	Lista todos os jogadores
GET	/api/players/:id	Detalhes de um jogador específico
POST	/api/players	Adiciona um novo jogador
DELETE	/api/players/:id	Remove um jogador
PATCH	/api/players/:id	Atualiza dados de um jogador
GET	/api/clubs/list	Lista todos os clubes

## 🔧 Como Executar

    1. Clone o repositório:
    bash

    git clone https://github.com/PauloBecker/projeto-nodejs-api-champions

    2. Entre na pasta:
    bash
    
    cd projeto-nodejs-api-champions

    3. Instale as dependências:
    bash

    npm install

    4. Rode o projeto em modo de desenvolvimento:
    bash

    npm run start:dev

