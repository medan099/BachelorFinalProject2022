import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  role: string;
  username: string;
  content: string;
  isLoggedIn = false
  public employees: Employee[];
  public editEmployee: Employee;
  public deleteEmployee: Employee;
  private roles: string[];
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard=false;
  constructor(private tokenStorageService: TokenStorageService,private employeeService: EmployeeService,public router: Router){}

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    const user = this.tokenStorageService.getUser();
    this.username = user.username;
    this.roles = user.roles;
        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
        this.showUserBoard= this.roles.includes('ROLE_USER');
        this.getEmployees();
      
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

  public onAddEmloyee(addForm: NgForm): void {
    
    document.getElementById('add-employee-form').click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUpdateManager(employee: Employee): void {
    this.employeeService.updateManager(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateAdmin(employee: Employee): void {
    this.employeeService.updateAdmin(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmloyee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.sexe.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.poste.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.username.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || employee.email.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || employee.nom.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || employee.prenom.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || employee.sexe.toUpperCase().indexOf(key.toUpperCase()) !== -1
      || employee.poste.toUpperCase().indexOf(key.toUpperCase()) !== -1
      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      $("#addEmployeeModal").prependTo("body");
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      $("#updateEmployeeModal").prependTo("body");
      this.editEmployee = employee;
      this.role=employee.roles[0].name;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      $("#deleteEmployeeModal").prependTo("body");
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }


}
