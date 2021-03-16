# docs

typeorm: https://typeorm.io/#/

# links

http://www.md5.cz/

# dependencies

## server

> $ yarn add express
> $ yarn add @types/express -D

## uuid

> $ yarn add uuidv4

## typeorm

> $ yarn add typeorm
> $ yarn add reflect-metadata

### typeorm - db - postgres

> $ yarn add typeorm pg

### typeorm - migration

**To better experience** create inside package.json > {"script": {"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"}}, with this setup use command below.
**To Create file**
> $ yarn typeorm migration:create -n [MigrationName]
**To Run**
> $ yarn typeorm migration:run
**To Revert**
> $ yarn typeorm migration:revert

## crypt

> $ yarn add bcryptjs

## jwt

> $ yarn add jsonwebtoken
> $ yarn add @types/jsonwebtoken

## multer (file upload backend)

> $ yarn add multer
> $ yarn add @types/multer

## handling exception (errors)

> $ yarn add express-async-errors

## cors install

> $ yarn add cors
> $ yarn add @types/cors

## using tsconfig.json path on development environment

> $ yarn add tsconfig-paths -D

## dependency injection install

> $ yarn add tsyringe

## jest tests install

> $ yarn add jest -D
> $ yarn add @types/jest -D
> $ yarn add ts-jest -D

### jest - command to init

> $ yarn jest --init

## mongodb

> $ yarn add mongodb
> $ yarn add @types/mongodb -D

## celebrate (middleware function that wraps the joi validation library)

> $ yarn add celebrate
> $ yarn add @types/hapi__joi -D

## dotenv (variable environment)

> $ yarn add dotenv

## class-transformer (to transformer objects)

> $ yarn add class-transformer

# requisitos

## recuperação de senha

**RF**
- o usuário deve poder recuperar sua senha informando o seu e-mail;
- o usuário deve receber um e-mail com instruções de recuperação de senha;
- o usuário deve poder resetar sua senha;

**RNF**
- utilizar mailtrap para testar envios em ambiente de dev;
- utilizar Amazon SES para envios em produção;
- o envio de e-mails deve acontecer em segundo plano (background job);

**RN**
- o link enviado por email para resetar senha, deve expirar em 2h;
- o usuário precisa informar a nova senha ao resetar sua senha;

## atualizacao do perfil

**RF**
- o usuário deve poder atualizar seu nome, email e senha:

**RN**
- o usuário não pode alterar seu email para um email já utilizado;
- para atualizar sua senha, o usuário deve informar a senha antiga;
- para atualizar sua senha, o usuário precisa confirmar a nova senha;

## painel do prestador

**RF**
- o usuário deve poder listar seus agendamentos de um dia específico;
- o prestador deve receber uma notificação sempree que houver um novo agendamento;
- o prestador deve poder visualizar as notificações não lidas;

**RNF**
- os agendamentos do prestador no dia devem ser armazenados em cache;
- as notificações do prestador devem ser armazenadas no MongoDB;
- as notificações do prestador devem ser enviadas em tempo-real utilizando socket.io

**RN**
- a notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

## agendamento de serviço

**RF**
- o usuário deve poder listar todos os prestadortes de serviço cadastrado;
- o usuário deve poder listar os dias de um mês com pelo um horário disponível de um prestador;
- o usuário deve poder listar horários disponíveis de um dia específico de um prestador;
- o usuário deve poder realizar um novo agendamento com um prestador;

**RNF**
- a listagem de prestadores deve ser armazenada em cache;

**RN**
- cada agendamento deve durar 1h exatamente;
- os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h, último às 17h);
- o usuário não pode agendar em um horário já ocupado;
- o usuário não pode agendar em um horário que já passou;
- o usuário não pode agendar serviços consigo mesmo;


## provider mail: ethereal mail
link: https://ethereal.email/

### server
> $ yarn add nodemailer
> $ yarn add @types/nodemailer

## provider mail:  template
link: https://handlebarsjs.com/

### server
> $ yarn add handlebars
