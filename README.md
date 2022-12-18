<h2 align="center">Desafio 01 🚀</h2>
<h5 align="center">Ignite - <a href="https://rocketseat.com.br/" >Rocketseat</a> - Trilha Node js</h5>

## 💻 Descrição

Essa será uma aplicação para gerenciar tarefas(to-do), será permitida a criação de um usuário e suas funcionalidades

## 🛠️ Funcionalidades

- Criar um novo todo;
- Listar todos os todos;
- Listar todos os _todos_;
- Alterar o `title` e `deadline` de um todo existente;
- Marcar um _todo_ como feito;
- Excluir um _todo_;

## 🔗 Rotas

- POST `/users` → criar um usuário.
- GET `/todos` → deve receber pelo header da requisição o `username` e retornar uma lista com todas tarefas desse usuário.
- POST `/todos` → criar um todo.
- PUT `/todos/:id` → atualiza um todo.
- PATCH `/todos/:id/done` → atualiza a propriedade `done` do todo para `true`.
- DELETE `/todos/:id` → deleta um todo pela `id`

### 📝 Clonagem e uso

Para clonar o repositório rode `https://github.com/oleoprado/desafio-02-trilha-nodejs-trabalhando-com-middlewares-rocketseat.git` no seu terminal.
Entre na pasta do projeto e rode `yarn` no seu terminal para instalar as dependências.

#### Uso

Com as dependências instaladas rode `yarn dev` para subir o servidor. Para rodar os testes rode `yarn test`.
