import { Injectable } from "@angular/core";
import { Curso } from "./cursos";

@Injectable({
    providedIn:'root'
})

export class CursoService{
    todosItens():Curso[] {
        return CURSOS;
    }    

    umItemById (id:number) : Curso{
        return CURSOS.find((item:Curso)=> item.id === id)!;
    }

    salvarItens(curso:Curso):void{
        if(curso.id){
            const indice = CURSOS.findIndex((item:Curso) => item.id===curso.id);
            CURSOS[indice] = curso
        }
    }
}

var CURSOS: Curso[]= [
    {
        id: 1,
        nome:'Angular',
        imageUrl:'https://picsum.photos/200?random=1',
        preco:120,
        codigo:'SAQ1-0987',
        duracao:120,
        avaliacao:2.75
    },
    {
        id: 2,
        nome:'React',
        imageUrl:'https://picsum.photos/200?random=2',
        preco:235,
        codigo:'SAP-1250',
        duracao:88,
        avaliacao:3
    },
    {
        id: 3,
        nome:'Javascript com Angular',
        imageUrl:'https://picsum.photos/200',
        preco:125,
        codigo:'HAG-3680',
        duracao:124,
        avaliacao:1.5
    },

    {
        id: 4,
        nome:'React com Angular',
        imageUrl:'https://picsum.photos/200?random=3',
        preco:125,
        codigo:'RCT-5478',
        duracao:230,
        avaliacao:3.5
    }
]

