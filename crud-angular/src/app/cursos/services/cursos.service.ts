import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators'

import { Curso } from '../modelo/curso';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = './assets/cursos.json';

  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      first(),
      tap(cursos=>console.log(cursos))
    );
  }
}
