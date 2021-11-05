# Project Build with TypeORM

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/). [Docker](https://www.docker.com/)
Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `docker-compose up -d` command
4. Run `npm start` command

## Endpoints

[GET] 'https:localhost:3000/cookie' Lista todos os cookies <br />
<br />
[POST] 'https:localhost:3000/cookie' Cria o cookie<br />
 #### Dados Entrada:
  ```json  
{
    "Nome":"Cookie Salgado",
    "Formato":"Quadrado",
    "Cor": "Preto",
    "Sabor": "Morango",
    "Quantidade":2
}
```
[GET] 'https:localhost:3000/cookie/:id' Retorna o cookie por ID<br />
<br />
[DELETE] 'https:localhost:3000/cookie/:id' Deleta o cookie por ID <br />
<br />
[POST] 'https:localhost:3000/cookie/:id' Atualizar dados do cookie<br />
 #### Dados Entrada:
 ```json  
 
{
    "Nome":"Cookie Salgado",
    "Formato":"Quadrado",
    "Cor": "Preto",
    "Sabor": "Morango",
    "Quantidade":2
}
```
