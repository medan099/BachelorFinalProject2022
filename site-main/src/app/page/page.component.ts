import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: any;

  constructor(private router:Router
    ) { }

  ngOnInit(): void {
   }
   
   redirect(path:String): void {
    this.router.navigate(['/'+path]).then(() => {
             window.location.reload();
           });}


}
