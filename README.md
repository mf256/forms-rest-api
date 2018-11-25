# My Application

The project is generated by [LoopBack](http://loopback.io).

## How to generate project
1.  Install LoopBack CLI via NPM
npm install -g loopback-cli
2. Create application
lb
3. Run application
node .

## How to install MongoDb
1. Install
brew install mongodb
2. Check instalation
mongod --version
mongo
show dbs

## How to connect MongoDb
1. Install MongoDB extension
npm install --save loopback-connector-mongodb
2. Change datasources.json
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
3. Creating model
lb model



## How to add custom methods
https://loopback.io/doc/en/lb3/Remote-methods.html
https://loopback.io/doc/en/lb3/Working-with-data.html
http://apidocs.loopback.io/loopback/#persistedmodel


## License

MIT
