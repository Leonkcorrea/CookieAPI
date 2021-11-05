import { createConnection } from "typeorm";
export const conectarServidoraoBD = async () =>{
    const conexao = await createConnection();
    console.log(`app conectado ao BD ${conexao.options.database}}`);

    process.on ('SIGINT', ()=>{
   conexao.close().then(()=> console.log('COnexão com o BD fechada'));
    });
}