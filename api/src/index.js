const PORT = 3001 
const server = require("./app")  
const { conn } = require("./db");

server.listen(PORT, () => {
    console.log("Servidor levantado en " + PORT); 
    conn.sync({force: false}); 
})