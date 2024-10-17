import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  public isUpdated = false;

  constructor( private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    console.log(this.user);

  }

}
