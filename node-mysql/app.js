var mysql = require("mysql");
var conn = mysql.createConnection({
  host:'localhost',
  user:'nodejs',
  password:'nodejs',
  database:'nodejs',
  port:3306
});
conn.connect();
var insertSQL= 'insert into t_user(name) values("you"),("jiang")';
var selectSQL = 'select * from t_user limit 10';
var deleteSQL = 'delete from t_user';
var updateSQL = 'update t_user set name="you update" where name="you"';

//delete
conn.query(deleteSQL,function(err0,res0){
  if(err0)console.log(err0);
  console.log("delete return ==>");
  console.log(res0);

  //INSERT
  conn.query(insertSQL,function(err1,res1){
    if(err1)console.log(err1);
    console.log("insert return ==>");
        console.log(res1);

//query
  conn.query(selectSQL, function (err2,rows) {
if(err2)console.log(err2);
    console.log("select ==>");
    for(var i in rows){
      console.log(rows[i]);
    }


//update
conn.query(updateSQL, function(err3,res3) {
  if(err3)console.log(err3);
  console.log("update return==>");
  console.log(res3);

conn.query('select 1+1 as solution',function(err,rows,fields){
  if(err)throw err;
  console.log('the solution is:',rows[0].solution);
  //query
  conn.query(selectSQL, function (err4, rows2) {
    if (err4) console.log(err4);

    console.log("SELECT ==> ");
    for (var i in rows2) {
      console.log(rows2[i]);
    }

  });
});
  });
  });
});
});
//conn.end();