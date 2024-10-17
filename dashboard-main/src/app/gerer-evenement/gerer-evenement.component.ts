import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { EvenementService } from './evenement.service';
import { Evenement } from './evenement';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gerer-evenement',
  templateUrl: './gerer-evenement.component.html',
  styleUrls: ['./gerer-evenement.component.css']
})
export class GererEvenementComponent implements OnInit {

  public evenements: Evenement[];
  public editEvenement: Evenement;
  public deleteEvenement: Evenement;
  private roles: string[];
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard=false;
  constructor(private Evenementservice: EvenementService,private tokenStorageService: TokenStorageService,public router:Router){}

  ngOnInit() {
    this.getEvenements();
    const user = this.tokenStorageService.getUser();
    if(user!=null){
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard= this.roles.includes('ROLE_USER');
    }
  }

  public getEvenements(): void {
    this.Evenementservice.getEvenements().subscribe(
      (response: Evenement[]) => {
        this.evenements = response;
        console.log(this.evenements);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEvenement(addForm: NgForm): void {
    
    document.getElementById('add-evenement-form').click();
    this.Evenementservice.addEvenement(addForm.value).subscribe(
      (response: Evenement) => {
        console.log(response);
        this.getEvenements();
        addForm.reset();
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEvenement(evenement: Evenement): void {
    this.Evenementservice.updateEvenement(evenement).subscribe(
      (response: Evenement) => {
        console.log(response);
        this.getEvenements();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEvenement(evenementId: number): void {
    this.Evenementservice.deleteEvenement(evenementId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEvenements();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEvenements(key: string): void {
    console.log(key);
    const results: Evenement[] = [];
    for (const evenement of this.evenements) {
      if (evenement.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || evenement.details.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || evenement.date.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || evenement.titre.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || evenement.details.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || evenement.date.toUpperCase().indexOf(key.toUpperCase()) !== -1
      ) {
        results.push(evenement);
      }
    }
    this.evenements = results;
    if (results.length === 0 || !key) {
      this.getEvenements();
    }
  }

  public onOpenModal(evenement: Evenement, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      $("#addEvenementModal").prependTo("body");
      button.setAttribute('data-target', '#addEvenementModal');
    }
    if (mode === 'edit') {
      $("#updateEvenementModal").prependTo("body");
      this.editEvenement = evenement;
      button.setAttribute('data-target', '#updateEvenementModal');
    }
    if (mode === 'delete') {
      $("#deleteEvenementModal").prependTo("body");
      this.deleteEvenement = evenement;
      button.setAttribute('data-target', '#deleteEvenementModal');
    }
    container.appendChild(button);
    button.click();
  }



}
