import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CursoService } from "./course-service";
import { Curso } from "./cursos";

@Component({
    templateUrl:'./curso-info-component.html'
})

export class CursoInfo implements OnInit{
    
    curso!:Curso;

    constructor (private IdCursoInfo : ActivatedRoute, private infoCurso: CursoService){}

    ngOnInit(): void {
        this.curso = this.infoCurso.umItemById(+this.IdCursoInfo.snapshot.paramMap.get('id')!);
    }

    save():void{
        this.infoCurso.salvarItens(this.curso);
    }
}