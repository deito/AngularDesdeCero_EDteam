import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'ed-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.css']
})
export class CourseActionComponent implements OnInit {

  @Input()
  curso: Curso;

  @Output()
  edit: EventEmitter<Curso> = new EventEmitter<Curso>();

  @Output()
  delete: EventEmitter<Curso> = new EventEmitter<Curso>();

  constructor() { }

  ngOnInit() {
  }

  editarCurso(curso: Curso){
    console.log('Edit, ', curso);
    // Propagando el objeto Curso hacia el componente Padre
    this.edit.emit(curso);
  }

  eliminarCurso(curso: Curso){
    console.log('Eliminar, ', curso);
    this.delete.emit(curso);
  }

  onMouseOver(event: any){
    console.log('Mouse Over', event);
  }

  onDoubleclick(event: any){
    console.log('Double Click', event);
  }

}
