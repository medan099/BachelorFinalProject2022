import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from './email';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }


  
    public addEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(`http://localhost:8080/email/add`, email);
  }
}
