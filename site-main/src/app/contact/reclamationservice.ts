import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from './reclamation';


@Injectable({providedIn: 'root'})
export class ReclamationService {


  constructor(private http: HttpClient){}

  public getReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`http://localhost:8080/reclamation/all`);
  }

  public addReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`http://localhost:8080/reclamation/add`, reclamation);
  }

  public updateReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(`http://localhost:8080/reclamation/update`, reclamation);
  }

  public deleteReclamation(reclamationId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/reclamation/delete/${reclamationId}`);
  }
}
