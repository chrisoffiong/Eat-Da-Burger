let mysql = require("mysql");

 let connection = mysql.createConnection({
        host: "tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "azwqd9cc8p8d6gvs",
        password: "pj3ktbk3nyxeost5",
        database: "gv5y7fy06nyszj9o"
    });
;

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;