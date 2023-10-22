import mysql from 'mysql2'

let connectionInfo = mysql.createConnection({
    host :'localhost',
    user:"group44",
    password :'group4',
    database :'group4DB'
})

export default connectionInfo