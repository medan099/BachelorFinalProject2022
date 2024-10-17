import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actualite } from './actualite';


@Injectable({providedIn: 'root'})
export class ActualiteService {

  constructor(private http: HttpClient){}

  public getActualites(): Observable<Actualite[]> {
    return this.http.get<Actualite[]>(`http://localhost:8080/actualite/all`);
  }

  public AddActualite(actualite: Actualite): Observable<Actualite> {
    return this.http.post<Actualite>(`http://localhost:8080/actualite/add`, actualite);
  }


}