import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from './evenement';


@Injectable({providedIn: 'root'})
export class EvenementService {


  constructor(private http: HttpClient){}

  public getEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`http://localhost:8080/evenement/all`);
  }

  public addEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(`http://localhost:8080/evenement/add`, evenement);
  }

  public updateEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(`http://localhost:8080/evenement/update`, evenement);
  }

  public deleteEvenement(evenementId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/evenement/delete/${evenementId}`);
  }
}
