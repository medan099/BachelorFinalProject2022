import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Projets } from './projets';


@Injectable({providedIn: 'root'})
export class ProjetsService {


  constructor(private http: HttpClient){}

  public getProjets(): Observable<Projets[]> {
    return this.http.get<Projets[]>(`http://localhost:8080/projet/all`);
  }

  public addProjets(projets: Projets): Observable<Projets> {
    return this.http.post<Projets>(`http://localhost:8080/projet/add`, projets);
  }

  public updateProjets(projets: Projets): Observable<Projets> {
    return this.http.put<Projets>(`http://localhost:8080/projet/update`, projets);
  }

  public deleteProjets(projetsId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/projet/delete/${projetsId}`);
  }
}
