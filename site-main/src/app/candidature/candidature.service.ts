import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidature } from './candidature';


@Injectable({providedIn: 'root'})
export class CandidatureService {

  constructor(private http: HttpClient){}

  public getCandidatures(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`http://localhost:8080/candidature/all`);
  }

  public AddCandidature(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>(`http://localhost:8080/candidature/add`, candidature);
  }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `http://localhost:8080/candidature/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`http://localhost:8080/candidature/files`);
  }
  getFile(Id:number): Observable<any> {
    return this.http.get(`http://localhost:8080/candidature/files/${Id}`);
  }

}