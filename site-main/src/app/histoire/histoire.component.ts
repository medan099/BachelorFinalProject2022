import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
    this.isElementInViewport
    this.callbackFunc();
  }
  @HostListener('window:load', ['$event'])
  onPageLoad(_event: any) {
    this.callbackFunc();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(_event:any) {
    this.callbackFunc();
  }
  
  

isElementInViewport(el:any) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
callbackFunc() {
  let items = document.querySelectorAll(".timeline li");
  for (var i = 0; i < items.length; i++) {
    if (this.isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}}
 

