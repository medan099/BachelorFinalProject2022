import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('scroll', this.onWindowScroll, true);
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 50)  {
      document.getElementById('navbar')!.classList.add('fixed-top');
      document.getElementById('logo')!.setAttribute('src','assets/Logo_Mezzo_BW.png');
      
    }
    else{
      document.getElementById('navbar')!.classList.remove('fixed-top');
      document.getElementById('logo')!.setAttribute('src','assets/Logo_Mezzo.png');
     
    }
  }
  
  
  
      

  }


