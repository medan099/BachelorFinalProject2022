import { Component, OnInit } from '@angular/core';
import { Reclamation } from './reclamation';
import { ReclamationService } from './reclamationservice';
import { TokenStorageService } from '../_services/token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gerer-reclamation',
  templateUrl: './gerer-reclamation.component.html',
  styleUrls: ['./gerer-reclamation.component.css']
})
export class GererReclamationComponent implements OnInit {

  public reclamations: Reclamation[];
  public editReclamation: Reclamation;
  public deleteReclamation: Reclamation;
  public showReclamation: Reclamation;
 
  constructor(private reclamationService: ReclamationService,public router:Router){}

  ngOnInit() {
    this.getReclamations();

  }

  public getReclamations(): void {
    this.reclamationService.getReclamations().subscribe(
      (response: Reclamation[]) => {
        this.reclamations = response;
     
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddReclamation(addForm: NgForm): void {
    document.getElementById('add-reclamation-form').click();
    this.reclamationService.addReclamation(addForm.value).subscribe(
      (response: Reclamation) => {
        console.log(response);
        this.getReclamations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateReclamation(reclamation: Reclamation): void {
    this.reclamationService.updateReclamation(reclamation).subscribe(
      (response: Reclamation) => {
        console.log(response);
        this.getReclamations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteReclamation(reclamationId: number): void {
    this.reclamationService.deleteReclamation(reclamationId).subscribe(
      (response: void) => {
        console.log(response);
        this.getReclamations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchReclamations(key: string): void {
    console.log(key);
    const results: Reclamation[] = [];
    for (const reclamation of this.reclamations) {
      if (reclamation.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || reclamation.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || reclamation.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || reclamation.nom.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || reclamation.email.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || reclamation.prenom.toUpperCase().indexOf(key.toUpperCase()) !== -1
      
      ) {
        results.push(reclamation);
      }
    }
    this.reclamations = results;
    if (results.length === 0 || !key) {
      this.getReclamations();
    }
  }

  public onOpenModal(reclamation: Reclamation, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'delete') {
      $("#deleteReclamationModal").prependTo("body");
      this.deleteReclamation = reclamation;
      button.setAttribute('data-target', '#deleteReclamationModal');
    }
    if (mode === 'show') {
      $("#loupeModal").prependTo("body");
      this.showReclamation = reclamation;
      button.setAttribute('data-target', '#loupeModal');
    }
    container.appendChild(button);
    button.click();
  }



}
