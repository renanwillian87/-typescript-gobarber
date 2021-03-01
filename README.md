## Docs
typeorm: https://typeorm.io/#/

## Dependencies

### server
> $ yarn add express
> $ yarn add @types/express -D

### uuid
> $ yarn add uuidv4

### typeorm
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
