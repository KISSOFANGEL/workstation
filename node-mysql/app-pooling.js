/**
 * Created by lenovo on 2015/4/15.
 */
var mysql = require("mysql");
var pool = mysql.createPool({
    hots:'localhost',
    user:'nodejs',
    password:'nodejs',
    database:'nodejs',
    port:'3306'
});
var selectSQL = 'select  * from t_user limit 10';
pool.getConnection(function(err,conn){
    if(err)console.log(err);
    conn.query(selectSQL,function(err,rows){
        if(err)console.log(err);
        console.log("select ==>");
        for(var i in rows){
            console.log(rows[i]);
        }
        conn.release;
    })
})