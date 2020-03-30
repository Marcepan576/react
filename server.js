
const express = require('express');

const favicon = require('express-favicon');

const cors = require('cors')

const path = require('path');

const port = process.env.PORT || 8080;

const knex = require('knex');

const connection = knex({    
    client: 'mysql',
    connection: {
        host        : '0.0.0.0',
        port        : '7777',
        user        : 'root',
        password    : 'supersecretpassowrd',
        database    : 'app',
        // charset     : 'utf8mb4_general_ci',
        multipleStatements  : true, // this flag makes possible to execute queries like this:
        // `SET @x = 0; UPDATE :table: SET :sort: = (@x:=@x+1) WHERE :pid: = :id ORDER BY :l:`
        // its mainly for nested set extension library https://github.com/stopsopa/knex-abstract/blob/master/src/lr-tree.js
    },
})

const app = express();

app.use(cors());

app.use(favicon(__dirname + '/build/favicon.ico'));

// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', require('./api')({
    connection,
}));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {


    console.log(`\n 🌎  Server is running ${port} ` + "\n")
});