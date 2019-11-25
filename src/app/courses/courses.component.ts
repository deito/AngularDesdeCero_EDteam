import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {
  titulo: string = 'Lista de Cursos (Interpolacion)';
  anchoImagen: string = '40px';

  @ViewChild('filtro',{static: false})
  filtro: ElementRef;
  private _textoFiltro: string = '';

  set textoFiltro(t: string){
    console.log('textoFiltro',  t);
    this._textoFiltro = t;
    // filtrar los cursos
    this.cursos = t? this.filtrarCursos(t): this.cursosService.getCourses();
  }

  get textoFiltro(){
    return this._textoFiltro;
  }


  cursos: Curso[];
  constructor(private router: Router, private cursosService: CoursesService) { 
    //this.eliminarCursos();
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCourses();
    setTimeout(() => {
      this.textoFiltro = 'Angular';
    }, 1000);
  }

  ngAfterViewInit(){
    this.filtro.nativeElement.value = 'Angular';
  }

  filtrarCursos(texto: string){
    return this.cursos.filter((curso: Curso)=> curso.name.toLowerCase().indexOf(texto.toLowerCase())>=0);
  }

  eliminarCursos(){
    setTimeout(()=> {
      this.cursos = [];
    }, 5000);
  }

  onEditCurso(curso: Curso){``
    console.log('[Courses] Edit', event);
    this.router.navigate([`course/${curso.id}`]);
  }

  onDeleteCurso(curso: Curso){
    console.log('[Courses] Delete', event);
    this.cursos = this.cursos.filter((c: Curso)=>{
      return c.id !== curso.id
    });
  }

}
