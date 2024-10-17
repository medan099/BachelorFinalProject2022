import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidature } from './candidature';


@Injectable({providedIn: 'root'})
export class CandidatureService {


  constructor(private http: HttpClient){}

  public getCandidatures(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`http://localhost:8080/candidature/all`);
  }

  public addCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>(`http://localhost:8080/candidature/add`, candidature);
  }

  public updateCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.put<Candidature>(`http://localhost:8080/candidature/update`, candidature);
  }

  public deleteCandidature(candidatureId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/candidature/delete/${candidatureId}`);
  }
  public sendEmail(candidature: Candidature): Observable<void>{
    return  this.http.post<void>(`http://localhost:8080/mail/sendcandidature`,candidature);
  }
}
