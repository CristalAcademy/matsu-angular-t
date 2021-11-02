
import { Component, OnInit } from '@angular/core';
import { Curso } from '../modelo/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos : Curso[];
  displayedColumns : string[] = ['name', 'category'];


  constructor() {
    this.cursos = [{
      _id:'1', name:'Spring', category: 'Backend'
    },{
      _id:'2', name:'Angular', category: 'Frontend'
    },{
      _id:'3', name:'Vue', category: 'Frontend'
    }
  ];
  }

  ngOnInit(): void {
  }

}

