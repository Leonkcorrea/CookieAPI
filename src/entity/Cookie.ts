import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Formatos,Cores,Sabores} from  './enums';
 
@Entity()
export class Cookie {
 constructor  (Nome: string, Formato: Formatos, Cor: Cores, Sabor: Sabores, Quantidade: number ){
 this.nome = Nome;
 this.formato = Formato;
 this.cor = Cor;
 this.sabor = Sabor;
 this.quantidade = Quantidade;
 }
 
 
     
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    formato: Formatos;

    @Column()
    cor: Cores;

    @Column()
    sabor: Sabores;

    @Column()
    quantidade: number;

    AdicionarCookie(qtd:number) {

        this.quantidade += qtd;
        return this;
    }
    CompararDados(Nome:string, Formato: number,Cor: number, Sabor:number, Quantidade: number ){
        this.nome = Nome == this.nome ? this.nome : Nome;
        this.formato = Formato == this.formato ? this.formato : Formato;
        this.cor = Cor == this.cor ? this.cor : Cor;
        this.sabor = Sabor == this.sabor ? this.sabor : Sabor;
        this.quantidade = Quantidade == this.quantidade ? this.quantidade : Quantidade;
        return this;
    }
}