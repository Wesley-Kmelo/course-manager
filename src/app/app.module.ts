import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaCursos } from './course/course-list-component';
import { CursoInfo } from './course/curso-info-component';
import { Error404Component } from './error404/error-component';
import { NavBarComponent } from './nav-bar/nav-bar-component';
import { StarComponent } from './star/star-component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursos,
    StarComponent,
    NavBarComponent,
    Error404Component,
    CursoInfo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo:'cursos', pathMatch:'full'
      },
      {
        path: 'cursos', component:ListaCursos
      },
      {
        path: 'info/:id', component:CursoInfo
      },
      {
        path:'**', component:Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
