import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';

@Component({
  selector: 'ed-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  titulo: string = 'Lista de Cursos (Interpolacion)';
  anchoImagen: string = '40px';
  cursos: any[] = [
    {
      id: 1,
      name: 'TypeScript Desde Cero',
      startDate: 'August 10, 2019',
      description: 'Lleva Javascript al siguiente nivel con tipado estatico y programacion orientada a objetos',
      price: 25.99,
      rating: 4.5,
      imageUrl: 'assets/images/typescript.png'
    },
    {
      id: 2,
      name: 'Angular Desde Cero',
      startDate: 'September 10, 2019',
      description: 'Aprende el framework frontend con mas demanda del mercado',
      price: 29.99,
      rating: 5,
      imageUrl: 'assets/images/angular.png'
    },
    {
      id: 3,
      name: 'Formularios y APIs con Angular',
      startDate: 'October 20, 2019',
      description: 'Aprende a consumir datos de APIs Rest y a gestionar formularios con Anguar',
      price: 23.5,
      rating: 3.9,
      imageUrl: 'assets/images/angular.png'
    }
  ];
  constructor(private router: Router) { 
    //this.eliminarCursos();
  }

  ngOnInit() {
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
