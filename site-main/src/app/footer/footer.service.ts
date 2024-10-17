import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class FooterService {

  constructor(private http: HttpClient){}
  public sendEmail(email:String): Observable<void>{
    return  this.http.post<void>(`http://localhost:8080/mail/send`, email);
  }
 
}