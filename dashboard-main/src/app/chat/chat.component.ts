import { Component } from '@angular/core';
import { YourService } from './your.service'; // Import your service for API calls

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css']
})
export class YourComponent {
  governorates: string[] = ['Ariana', 'Tunis', 'Sousse', 'Sidi Bouzid']; // Populate with your governorates
  selectedGovernorate: string;
  regions: string[] = [];

  constructor(private yourService: YourService) {} // Inject your service

  onGovernorateChange() {
    this.yourService.getRegionsByGovernorate(this.selectedGovernorate)
      .subscribe((regions: string[]) => {
        this.regions = regions;
      });
  }
}
