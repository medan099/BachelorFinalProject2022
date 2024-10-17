import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from './reclamation';
import { ReclamationService } from './reclamationservice';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isSent=false;
  sentMessage='Votre message a été envoyé'
  constructor(private reclamationService: ReclamationService,private router:Router) { }

  ngOnInit(): void {
  }
  public onAddReclamation(addFor: NgForm): void {
   
    this.reclamationService.addReclamation(addFor.value).subscribe(
      (response: Reclamation) => {
       /* this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });*/
        this.isSent=true;
        addFor.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addFor.reset();
      }
    );
    }

}
