import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CursosService } from './../services/cursos.service';


import { Component, OnInit } from '@angular/core';
import { Curso } from '../modelo/curso';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$ : Observable<Curso[]>;
  displayedColumns : string[] = ['name', 'category'];


  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog
    ) {
    this.cursos$ = this.cursosService.list()
    .pipe(
      catchError(error => {
        this.onError([
          'Ops...',
          'Erro ao carregar lista',
          'OK :('
        ])
        return of([])
      })
    );
   }

  ngOnInit(): void {
  }

  onError(errorMsg: string[]) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}

