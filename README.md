<div align="center">
<img src="./src/assets/logo-chap1-rem.png" width="450px">
  <h1>🏆 Champions League API</h1>
</div>

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
│   ├── assets/           # Imagens e logos para documentação
│   │   └── logo.png
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
├── .env                  # Variáveis de ambiente
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

## ⚙️ Configurações do Projeto
Abaixo, os arquivos essenciais para o funcionamento do ambiente e do compilador:

.env

Arquivo responsável pelas variáveis de ambiente (como a porta do servidor).
```
env

PORT=3333
```
.gitignore

Utilizado para evitar que arquivos desnecessários ou sensíveis sejam enviados para o GitHub.

```
node_modules/
dist/
.env
```
tsconfig.json

Arquivo de configuração do TypeScript, definindo como o código deve ser transpilado para JavaScript. 
Os principais pontos configurados são:
```
    Target: ES6
    Module: CommonJS
    OutDir: ./dist
    rootDir: ./src
    Strict Mode: Ativado para maior segurança no código.
```  
## 🛣️ Endpoints da API
Método	Rota	Descrição
GET	/api/players/list	Lista todos os jogadores
GET	/api/players/:id	Detalhes de um jogador específico
POST	/api/players	Adiciona um novo jogador
DELETE	/api/players/:id	Remove um jogador
PATCH	/api/players/:id	Atualiza dados de um jogador
GET	/api/clubs/list	Lista todos os clubes

##   ⚡ Scripts do Projeto
Adicione ou utilize os comandos abaixo configurados no seu package.json:
json

"scripts": {
    "dist": "tsup src",
    "start:dev": "tsx --env-file=.env src/server.ts",
    "start:watch": "tsx watch --env-file=.env src/server.ts",
    "start:dist": "npm run dist && node dist/server.js"
}

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



## ⚖️📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes. 🚨🔎
