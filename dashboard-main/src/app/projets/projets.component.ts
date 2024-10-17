import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjetsService } from './projets.service';
import { Projets } from './projets';
import { NgForm } from '@angular/forms';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  public projets: Projets[];
  public editProjets: Projets;
  public deleteProjets: Projets;
  private roles: string[];
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard=false;
  constructor(private projetsService: ProjetsService,private tokenStorageService: TokenStorageService,public router:Router){}

  ngOnInit() {
    this.getProjets();
    const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard= this.roles.includes('ROLE_USER');
      
  }

  public getProjets(): void {
    this.projetsService.getProjets().subscribe(
      (response: Projets[]) => {
        this.projets = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProjets(addForm: NgForm): void {
    
    document.getElementById('add-projet-form').click();
    this.projetsService.addProjets(addForm.value).subscribe(
      (response: Projets) => {
        console.log(response);
        this.getProjets();
        addForm.reset();
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateProjets(projets: Projets): void {
    this.projetsService.updateProjets(projets).subscribe(
      (response: Projets) => {
        console.log(response);
        this.getProjets();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProjets(projetsId: number): void {
    this.projetsService.deleteProjets(projetsId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProjets();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProjets(key: string): void {
    console.log(key);
    const results: Projets[] = [];
    for (const projets of this.projets) {
      if (projets.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || projets.date.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||  projets.statut.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || projets.titre.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || projets.date.toUpperCase().indexOf(key.toUpperCase()) !== -1
      ||  projets.statut.toUpperCase().indexOf(key.toUpperCase()) !== -1
      ) {
        results.push(projets);
      }
    }
    this.projets = results;
    if (results.length === 0 || !key) {
      this.getProjets();
    }
  }

  public onOpenModal(projets: Projets, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      $("#addProjetModal").prependTo("body");

      button.setAttribute('data-target', '#addProjetModal');
    }
    if (mode === 'edit') {
      $("#updateProjetModal").prependTo("body");
      this.editProjets = projets;
      button.setAttribute('data-target', '#updateProjetModal');
    }
    if (mode === 'delete') {
      $("#deleteProjetModal").prependTo("body");
      this.deleteProjets = projets;
      button.setAttribute('data-target', '#deleteProjetModal');
    }
    container.appendChild(button);
    button.click();
  }

}
