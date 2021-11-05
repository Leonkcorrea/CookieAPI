import { getManager } from "typeorm";
import { Cookie } from "../entity/Cookie";
import { Cores, Formatos, Sabores } from "../entity/enums";
export class CookieController{
    async salvar (cookie: Cookie){
    const cookieSalvo = await getManager().save(cookie);
    return cookieSalvo;
    }
    async ListarTodos(){
        const cookies = await getManager().find(Cookie);
        return cookies;  
    }
    async ValidarCookie(Nome:string,Formato:number ,Cor:number ,Sabor:number ){
        const cookie = await getManager().findOne(Cookie,{
            nome : Nome,
            formato : Formato,
            cor : Cor,
            sabor : Sabor
        });
        return cookie ;  
    }
    async ObterPorId(Id:number){
        const cookie = await getManager().findOne(Cookie,{
          id : Id
        });
        return cookie ;  
    }
    async deletar (cookie: Cookie){
        const cookieSalvo = await getManager().remove(cookie);
        return cookieSalvo;
        }
}