import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { OffreService } from './Offre.service';
import { Offre } from './offre';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gerer-offre',
  templateUrl: './gerer-offre.component.html',
  styleUrls: ['./gerer-offre.component.css']
})
export class GererOffreComponent implements OnInit {

  public offres: Offre[];
  public editOffre: Offre;
  public deleteOffre: Offre;
  private roles: string[];
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard=false;
  constructor(private offreService: OffreService,private tokenStorageService: TokenStorageService,public router:Router){}

  ngOnInit() {
    this.getOffres();
    const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard= this.roles.includes('ROLE_USER');
      
  }

  public getOffres(): void {
    this.offreService.getOffres().subscribe(
      (response: Offre[]) => {
        this.offres = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddOffre(addForm: NgForm): void {
    
    document.getElementById('add-offre-form').click();
    this.offreService.addOffre(addForm.value).subscribe(
      (response: Offre) => {
        console.log(response);
        this.getOffres();
        addForm.reset();
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateOffre(offre: Offre): void {
    this.offreService.updateOffre(offre).subscribe(
      (response: Offre) => {
        console.log(response);
        this.getOffres();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteOffre(offreId: number): void {
    this.offreService.deleteOffre(offreId).subscribe(
      (response: void) => {
        console.log(response);
        this.getOffres();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchOffres(key: string): void {
    console.log(key);
    const results: Offre[] = [];
    for (const offre of this.offres) {
      if (offre.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || offre.profilRecherche.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || offre.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || offre.titre.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || offre.profilRecherche.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || offre.type.toUpperCase().indexOf(key.toUpperCase()) !== -1
      ) {
        results.push(offre);
      }
    }
    this.offres = results;
    if (results.length === 0 || !key) {
      this.getOffres();
    }
  }

  public onOpenModal(offre: Offre, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      $("#addOffreModal").prependTo("body");

      button.setAttribute('data-target', '#addOffreModal');
    }
    if (mode === 'edit') {
      $("#updateOffreModal").prependTo("body");
      this.editOffre = offre;
      button.setAttribute('data-target', '#updateOffreModal');
    }
    if (mode === 'delete') {
      $("#deleteOffreModal").prependTo("body");
      this.deleteOffre = offre;
      button.setAttribute('data-target', '#deleteOffreModal');
    }
    container.appendChild(button);
    button.click();
  }



}
