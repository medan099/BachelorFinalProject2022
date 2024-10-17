import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from './offre';
import { OffreService } from './offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  public offres: Offre[] = [];
  constructor(private offreService: OffreService,public router:Router) { }

  ngOnInit(): void {
    this.getOffres();
  }
  redirect(path:String): void {
    this.router.navigate(['/'+path]).then(() => {
             window.location.reload();
           });
          }
          public getOffres(): void {
            this.offreService.getOffres().subscribe(
              (response: Offre[]) => {
                this.offres = response;
        
              },
              (error: HttpErrorResponse) => {
                alert(error.message);
              }
            );
          }
        
          
          public searchOffresTitre(key: string): void {
            console.log(key);
            const results: Offre[] = [];
            for (const offre of this.offres) {
              if (offre.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
              || offre.profilRecherche.toLowerCase().indexOf(key.toLowerCase()) !== -1
              || offre.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
              || offre.titre.toUpperCase().indexOf(key.toUpperCase()) !== -1
              || offre.profilRecherche.toUpperCase().indexOf(key.toUpperCase()) !== -1
              || offre.type.toUpperCase().indexOf(key.toUpperCase()) !== -1
              ) {
                results.push(offre);
              }
            }
            this.offres = results;
           
            if(!key){
              this.getOffres();
            }
          }
        
          public onSelected(val: string):void{

            let results: Offre[] = [];
        
            for (let offre of this.offres) {
              if (offre.type==val ) {
                results.push(offre);
              }
            }
            this.offres = results;
        
            if ( val=='tout') {
              this.getOffres();
            }
         
          }
          public onSelectedSal(val: string):void{

            let results: Offre[] = [];
        
            for (let offre of this.offres) {
              if (val=='Inférieur à 1000' ) {
                if(offre.salaire<1000 )
                results.push(offre);
              }
              else {
                if(offre.salaire>=1000 )
                results.push(offre);
              }
            }
            this.offres = results;
         
          }
         
}
