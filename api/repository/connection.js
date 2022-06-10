import mysql from 'mysql2/promisse'

const con = await mysql.createconnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PWD,
    database:process.env.MYSQL_DB
})

console.log('DB conected')

export { con }
