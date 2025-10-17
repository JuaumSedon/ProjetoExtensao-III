const app = require('./app');
const dbConn = require('./Config/dbConn');

const porta = 3000;


const initServer = async()=>{

    try {

        await dbConn();

        app.listen(porta,()=>{

            console.log(`Servidor rodando na porta ${porta}`)
        })
        
    } catch (error) {

        console.log("Erro ao iniciar servidor",error);
        
    }
}



initServer();

