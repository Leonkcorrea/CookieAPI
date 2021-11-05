import { Router } from "express";
import { validationResult } from "express-validator";
import { CookieController } from "../controller/CookieController";
import { Cookie } from "../entity/Cookie";
import { Cores, Formatos, Sabores } from "../entity/enums";
export const routerCookie = Router();
const cookieCtrl = new CookieController();

routerCookie.post('/',async (req,res)=>{
 const {Nome,Formato,Cor,Sabor, Quantidade} = req.body;

 if (!Nome || !Formato || !Cor || !Sabor || !Quantidade) {
   return res.status(400).json({ errors: "Há parametros faltando..." });
 }

 var cookieSalvo  = await cookieCtrl.ValidarCookie(Nome, Number(Formatos[Formato as Formatos]), Number(Cores[Cor as Cores]) ,Number(Sabores[Sabor as Sabores]) );
 if (cookieSalvo){
    cookieSalvo = await cookieCtrl.salvar(cookieSalvo.AdicionarCookie(Quantidade));
 }
 else{

    const cookie = new Cookie(Nome, Number(Formatos[Formato as Formatos]), Number(Cores[Cor as Cores]) ,Number(Sabores[Sabor as Sabores]), Quantidade);
    cookieSalvo = await cookieCtrl.salvar(cookie);
 }
 res.json(cookieSalvo);
});

routerCookie.get('/', async (req,res)=>{
    const cookies = await cookieCtrl.ListarTodos();
    res.json(cookies);
});

routerCookie.delete('/:id', async (req,res)=>{
   const cookie = await cookieCtrl.ObterPorId(Number(req.params.id))
   if (!cookie){
      return res.json({ errors: "Infelizmente ainda não temos esse cookie :´(" });
   }
   else{
      const cookies = await cookieCtrl.deletar(cookie);
      res.json(`Cookie ${cookies.nome} Apagado`);
   }
  
});
routerCookie.get('/:id', async (req,res)=>{
   const cookie = await cookieCtrl.ObterPorId(Number(req.params.id))
   if (!cookie){
      return res.json({ errors: "Infelizmente ainda não temos esse cookie :´(" });
   }
   else{
      res.json(cookie);
   }
    
});
routerCookie.post('/:id', async (req,res)=>{
   
 const {Nome,Formato,Cor,Sabor, Quantidade} = req.body;
   var cookie = await cookieCtrl.ObterPorId(Number(req.params.id))
   if (!cookie){
      return res.json({ errors: "Infelizmente ainda não temos esse cookie :´(" });
   }
   else{
      if (!Nome || !Formato || !Cor || !Sabor || !Quantidade) {
         return res.status(400).json({ errors: "Há parametros faltando..." });
      }
      else{
         cookie = await cookieCtrl.salvar(cookie.CompararDados(Nome,Number(Formatos[Formato as Formatos]), Number(Cores[Cor as Cores]) ,Number(Sabores[Sabor as Sabores]),Quantidade));
      }
      res.json(cookie);
   }
    
});