import mysql from "mysql"

const connect = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    database: 'citasveterinaria',
    user: "root",
    password: ""
})

connect.connect((err)=>{
    if(err) console.log('Error: ' + err) //Output error
    console.log('Database connected')
})

export default connect;