// const {Client} = require("pg");

// const client = new Client({
//   user: "postgres",
//   password: "mango123",
//   host: "localhost",
//   port: 5432,
//   database: "teebay"
// });
// client.connect();
// module.exports = client;

//-------Testing Database Connection
// client.query(`Select * From users`, (err,res)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
//     client.end;
// })
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

module.exports = {
  prisma,
}