import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from './offre';


@Injectable({providedIn: 'root'})
export class OffreService {


  constructor(private http: HttpClient){}

  public getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(`http://localhost:8080/offre/all`);
  }

  public addOffre(offre: Offre): Observable<Offre> {
    return this.http.post<Offre>(`http://localhost:8080/offre/add`, offre);
  }

  public updateOffre(offre: Offre): Observable<Offre> {
    return this.http.put<Offre>(`http://localhost:8080/offre/update`, offre);
  }

  public deleteOffre(offreId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/offre/delete/${offreId}`);
  }
}
