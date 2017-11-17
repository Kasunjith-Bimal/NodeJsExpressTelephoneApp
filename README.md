# NodeJsExpressTelephoneApp

#A TelephoneApp Node.js app using Express.

`git clone https://github.com/Kasunjith-Bimal/NodeJsExpressTelephoneApp.git # or clone your own fork1`
`cd NodeJsExpressTelephoneApp`



#use Mysql database 
`database\telephonebookdb.sql`
#If You change your seetings in wamp config/connection.js
`var settings = {`
  `  host: "localhost",`
  ` user: "root",`
  `  password: "root",`
  `database: "telephonebookdb",`
`}`
#In this App use  http://localhost:81/phpmyadmin/ 
#change node_module/mysql/lib/ConnectionConfig file section host
` this.host               = options.host || 'localhost:81';`

#if use http://localhost/phpmyadmin/ 
#change node_module/mysql/lib/ConnectionConfig file section host
` this.host               = options.host || 'localhost';`
# install npm
`npm install`

# run using 
`npm start`
