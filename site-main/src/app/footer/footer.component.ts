import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FooterService } from './footer.service';
import { EmailService } from './email.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Email } from './email';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  form: any = {};
  successMessage="Bienvenue dans notre Newsletter";
  isSubmitted=false;

  constructor(private footerService:  FooterService,private router:Router,private emailService:  EmailService  ) { }

  ngOnInit(): void {
    
  }
  subscribe(){
    
    var subscribe_button = document.querySelector(".subscribe_button");

    subscribe_button!.addEventListener('click', function(){
      var subscribing = document.querySelector(".subscribing");
      var thanks = document.querySelector(".thanks");
      var login = document.querySelector(".login");
    
      subscribing!.classList.add("subscribing_active");
      subscribe_button!.classList.add("subscribe_button_active");
      setTimeout(function(){
        login!.classList.add("login_active");
      }, 1200);
      setTimeout(function(){
        thanks!.classList.add("thanks_active");
      }, 1400);
    
      setTimeout(function(){
        thanks!.classList.remove("thanks_active");
        login!.classList.remove("login_active");
        subscribing!.classList.remove("subscribing_active");
        subscribe_button!.classList.remove("subscribe_button_active");
      }, 4000);
    });
  }
  onSubmit(f: NgForm): void {
   
   
    this.emailService.addEmail(f.value).subscribe(
      (response: any) => {
        console.log(response);
        this.isSubmitted=true;

  }
  ,
  (error: HttpErrorResponse) => {
    alert(error.message);
    f.reset();
  }
    
    )


    this.footerService.sendEmail(f.value.value).subscribe(
      (response: any) => {
        console.log(response);

  }
  ,
  (error: HttpErrorResponse) => {
    alert(error.message);
    f.reset();
  }
    
    )
}
 
  }
    
  

