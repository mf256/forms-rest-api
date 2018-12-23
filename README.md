# forms-rest-api

The project is generated by [LoopBack](http://loopback.io).
LoopBack is a highly-extensible, open-source Node.js framework. It helps quickly create dynamic end-to-end REST APIs and connect it to database.

## Architecture

![Forms applications architecture](/doc/forms-architecture.png)

## Getting Started

1. Clone this repo

2. To run, go to project folder and run

`$ npm install`

3. Install MongoDb (see below)

4. Import database

`mongoimport --db forms --collection Form --file dump/Form.json`

`mongoimport --db forms --collection Question --file dump/Question.json`

5. Now start dev server by running -

`$ npm start`

6. visit - http://localhost:3005/


## How to install MongoDb
1. Install on MacBook
```
brew install mongodb
```
2. Check instalation
```
mongod --version
mongo
show dbs
```


## How to generate project

https://loopback.io/getting-started/

1.  Install LoopBack CLI via NPM
```
npm install -g loopback-cli
```
2. Create application
```
lb
```
3. Run application
```
node .
```


## How to connect MongoDb
1. Install MongoDB extension
```
npm install --save loopback-connector-mongodb
```
2. Change datasources.json
```
{
  "db": {
    "host": "localhost",
    "port": 27017,
    "url": "",
    "database": "forms",
    "password": "",
    "name": "db",
    "user": "",
    "connector": "mongodb"
  }
}
```
3. Creating model
```
lb model
```

## How to dump database
https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/

Full dump

```
mongodump --db forms
```

Export do json

```
mongoexport --db forms --collection Form --out Form.json
mongoexport --db forms --collection Question --out Question.json
```

## How to import database

Full restore

```
mongorestore dump-dir/
```

Import from json

```
mongoimport --db forms --collection Form --file Form.json
mongoimport --db forms --collection Question --file Question.json
```



## How to add custom methods
* https://loopback.io/doc/en/lb3/Remote-methods.html
* https://loopback.io/doc/en/lb3/Working-with-data.html
* http://apidocs.loopback.io/loopback/#persistedmodel

## Todo
- ACL
- Hide unused methods

## License

MIT
