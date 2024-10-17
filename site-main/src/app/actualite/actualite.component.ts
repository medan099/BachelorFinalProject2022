import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Actualite } from './actualite';
import { ActualiteService } from './actualite.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  public actualites: Actualite[] = [];

  constructor(private actualiteService: ActualiteService,public router:Router,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getActualites();
    
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

  public getActualites(): void {
    this.actualiteService.getActualites().subscribe(
      (response: Actualite[]) => {
        this.actualites = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
