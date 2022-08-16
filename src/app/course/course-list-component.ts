import { Component, OnInit } from "@angular/core";
import { CursoService } from "./course-service";
import { Curso } from "./cursos";

@Component({
    templateUrl:'./course-list-component.html'
})

//método que implementa a função OnInit que vai inicar a lógica . Criado uma variavel cursos que vai ser
//do tipo componente array de Curso e vai ser inicializado com um array vazio[]. Em seguida é criado um 
//construtor que possui um atributo do tipo private e tipo componente CursoService, que nesse caso é um 
//JSON. A função ngOnInit atribui o resultado do método de CursoService(representado pelo alias de 
//listaCursos), que nesse caso retorna todo o JSON.

export class ListaCursos implements OnInit { 
    
    //esse tipo Curso é um array que contem os parametros que se devem esperar quando for populado 
    //pelo método todositens() do listaCursos.Ou seja, a variável cursos vai ser um array que recebera
    //parametros id, nome, imgUrl etc.
    cursos: Curso[] = [];

    _resInput!:string;
    _resResult: Curso[]=[];

    constructor(private listaCursos:CursoService){}

    ngOnInit(): void {
        this._resResult= this.listaCursos.todosItens();
        this.cursos = this._resResult
    }

    set filtro(value:string){
        this._resInput = value;
        this.cursos = this._resResult.filter((item:Curso)=>item.nome.toLowerCase().indexOf(this._resInput.toLowerCase())>-1)
    }
    get filtro(){
        return this._resInput;
    }


}