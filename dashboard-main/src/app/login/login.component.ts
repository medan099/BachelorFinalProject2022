import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msg='';
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
   if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.successMessage = 'Login Successful';
        this.router.navigate(['/board']).then(() => {
          window.location.reload();
        });
      },
      err => {
        
        this.isLoginFailed = true;
        alert(this.errorMessage);
       

       
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
