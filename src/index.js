const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  if (!user) response.status(400).json({ error: "User not found" });

  request.user = user;

  return next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const userAlreadyExist = users.some((user) => user.username === username);

  if (userAlreadyExist) response.status(400).json({ error: "User already exist!" });

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: []
  };

  users.push(user);

  return response.status(201).json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  const { title, deadline } = request.body;

  const newTask = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(newTask);

  return response.status(201).json(newTask);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  const { title, deadline } = request.body;

  user.todos.forEach(task => {
    if (task.id === id) {
      task.title = title;
      task.deadline = deadline;
    }
  });

  return response.status(201).send();
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  const { done } = request.body;

  user.todos.forEach(task => {
    if (task.id === id) task.done = true;
  });

  return response.status(201).send();
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  const task = user.todos.find((task) => task.id === id);

  if (!task) response.status(404).json({ error: "Task does not exists!" });

  user.todos.splice(task, 1);

  return response.status(202).send();
});

module.exports = app;