# Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `docker-compose up -d` command
4. Run `npm start` command

## Endpoints

[GET] 'https:localhost:3000/cookie' Lista todos os cookies <br />
[POST] 'https:localhost:3000/cookie' Cria o cookie<br />
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
[DELETE] 'https:localhost:3000/cookie/:id' Deleta o cookie por ID <br />
[POST] 'https:localhost:3000/cookie/:id' Atualizar dados do cookie<br />
 ```json  
 
{
    "Nome":"Cookie Salgado",
    "Formato":"Quadrado",
    "Cor": "Preto",
    "Sabor": "Morango",
    "Quantidade":2
}
```
