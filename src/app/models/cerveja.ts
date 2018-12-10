export interface ICerveja {
    id: number
    nome: string
    familia: string
    litragem: number
    preco: number
    foto: string
    data: any
    ranking: number,
    unidade: string
}

export class Cerveja implements ICerveja {
   constructor(
       public id: number,
       public nome: string,
       public familia: string,
       public litragem: number,
       public preco: number,
       public foto: string,
       public data: any,
       public ranking: number,
       public unidade: string
   ) { }
   
}