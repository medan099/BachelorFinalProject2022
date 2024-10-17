import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../user-list/employee';
import { EmployeeService } from '../user-list/employee.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router'
import { Candidature } from '../gerer-candidature/candidature';
import { CandidatureService } from '../gerer-candidature/candidature.service';
import { Reclamation } from '../gerer-reclamation/reclamation';
import { ReclamationService } from '../gerer-reclamation/reclamationservice';
import { ActualiteService } from '../gerer-actualite/actualite.service';
import { Actualite } from '../gerer-actualite/actualite';
import { EvenementService } from '../gerer-evenement/evenement.service';
import { Evenement } from '../gerer-evenement/evenement';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  content: string;
  imageUrl: string;
  isLoggedIn = false;
  public editEmployee: Employee;
  private roles: string[];
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard=false;
  public deleteEmployee: Employee;
  public employees: Employee[];
  public candidatures: Candidature[];
  public reclamations: Reclamation[];
  public actualites: Actualite[];
  public evenements: Evenement[];
  constructor(private tokenStorageService: TokenStorageService,private employeeService: EmployeeService,public router: Router,private candidatureService: CandidatureService,private reclamationService: ReclamationService,private actualiteService: ActualiteService,private evenementService: EvenementService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
	const user = this.tokenStorageService.getUser();
  this.username = user.username;
  this.imageUrl = user.imageUrl;
  console.log(this.imageUrl);
  
  this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard= this.roles.includes('ROLE_USER');
      this.getActualites();
      this.getEmployees();
      this.getEvenements();
      this.getCandidatures();
      this.getReclamations();
  }



  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }



  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getReclamations(): void {
    this.reclamationService.getReclamations().subscribe(
      (response: Reclamation[]) => {
        this.reclamations = response;
        console.log(this.reclamations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getCandidatures(): void {
    this.candidatureService.getCandidatures().subscribe(
      (response: Candidature[]) => {
        this.candidatures = response;
        console.log(this.candidatures);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public getActualites(): void {
    this.actualiteService.getActualites().subscribe(
      (response: Actualite[]) => {
        this.actualites = response;
        console.log(this.actualites);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getEvenements(): void {
    this.evenementService.getEvenements().subscribe(
      (response: Evenement[]) => {
        this.evenements = response;
        console.log(this.evenements);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onAddActualite(addForm: NgForm): void {
    
    document.getElementById('add-actualite-form').click();
    this.actualiteService.addActualite(addForm.value).subscribe(
      (response: Actualite) => {
        console.log(response);
        this.getActualites();
        addForm.reset();
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onAddEvenement(addForm: NgForm): void {
    
    document.getElementById('add-evenement-form').click();
    this.evenementService.addEvenement(addForm.value).subscribe(
      (response: Evenement) => {
        console.log(response);
        this.getEvenements();
        addForm.reset();
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  public searchCandidatures(key: string): void {
    console.log(key);
    const results: Candidature[] = [];
    for (const candidature of this.candidatures) {
      if (candidature.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || candidature.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || candidature.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      
      ) {
        results.push(candidature);
      }
    }
    this.candidatures = results;
    if (results.length === 0 || !key) {
      this.getCandidatures();
    }
  }
  

  
  public searchActualites(key: string): void {
    console.log(key);
    const results: Actualite[] = [];
    for (const actualite of this.actualites) {
      if (actualite.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || actualite.details.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(actualite);
      }
    }
    this.actualites = results;
    if (results.length === 0 || !key) {
      this.getActualites();
    }
  }

  
  public searchEvenements(key: string): void {
    console.log(key);
    const results: Evenement[] = [];
    for (const evenement of this.evenements) {
      if (evenement.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || evenement.details.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(evenement);
      }
    }
    this.evenements = results;
    if (results.length === 0 || !key) {
      this.getEvenements();
    }
  }
  public onOpenModalEmployee(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }

    container.appendChild(button);
    button.click();
  }



  public onOpenModalActualite(actualite: Actualite, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addActualiteModal');
    }

    container.appendChild(button);
    button.click();
  }


  public onOpenModalEvenement(evenement: Evenement, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEvenementModal');
    }

    container.appendChild(button);
    button.click();
  }


  }

  







