# Internet Banking

## Tópicos
* [Requerimentos](#requerimentos)
* [Instalação](#instalacao)
* [Banco de dados](#banco-de-dados)
    * [Consultando](#consultando-os-dados)
* [Executando a aplicação](#executando-a-aplicacao)

## Requerimentos
* node (versão >= 8.9.4)
    ```bash
        $ node -v
        v8.9.4
    ```
* npm (versão >= 5.6.0)
    ```bash
        $ npm -v
        5.6.0
    ```

* @angular/cli (versão >= 1.6.3)
    ```bash
        $ ng -v
            _                      _                 ____ _     ___
           / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
          / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
         / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
        /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                       |___/
        Angular CLI: 1.6.3
        Node: 8.9.4
        ...

    ```
* MongoDB (versão >= 3.4.9)
```
mongo --version

MongoDB shell version v3.4.9
```

## Instalação

* node

    Acessar o link e seguir os passos:
    
    [NodeJS](https://nodejs.org/en/download/)
    
* npm

    Npm já vem instalado com o nodejs. Caso não esteja instalado acessar: [NPM](https://www.npmjs.com/get-npm)
    
* MongoDB
   Fazer download
   https://www.mongodb.com/download-center?jmp=nav#community
   
   - Windows:
   
   Abrir Painel de controles >> sistema >> Variaveis de ambiente
   Editar a variavel: Path
   Clicar em novo e adicionar o caminho do mongo/bin
   
   Iniciar o banco no prompt: mongod
   Abrir o banco no prompt: mongo
  
* node-mongo-seeds
   Necessário para população de dados no banco
   
   Run ```$ npm install -g node-mongo-seeds```
   
   Altere os arquivos .json na pasta seed
   
   Run ```$seed```
   
* @angular/cli

    Acessar o link e seguir os passos:
    
    [@angular/cli](https://github.com/angular/angular-cli#installation)


## Api
   
### Rotas:

   #### localhost/v1/login
   
   primeira rota para logar e conseguir o token
   
  ```
  method: post
  Headers: "content-type" : "application/json"
  Body: {cpf: <Number>, senha: <String> }
  ```
   
   #### localhost/v1/*
   qualquer rota pra frente você precisa inserir um header com o nome de "x-access-token" e no conteudo você passa o valor do token devolvido.
   ```
   Headers: "x-access-token" : "token"
   ```

   #### localhost/v1/correntistas/ 
   rota para acessar os correntistas correntistas
   ```
   method: get.
   Headers: "content-type" : "application/json"
   ```

   #### localhost/v1/correntistas/:cpf
   ```
   method: post.
   Headers: "content-type" : "application/json"
   ```
    
## Banco de dados
### Consultando os dados

   Executar 'mongod' no terminal.
    
   Em outro terminal executar 'mongo' para iniciar a pesquisa.
   
    use internetbanking
    db.correntistas.find().pretty() //para ver os dados da collection correntistas
    
    db.transferencias.find().pretty() //para ver os dados da collection transferencias
    

## Executando a aplicação

### Back-end
   - Na pasta 'back-end' executar o comando 
   ```
   npm install
   
   node app
   
   ```
   
   - Na pasta 'front-end' executar o comando
   ```
   npm install
   
   ng serve --open
   
   ``` 
