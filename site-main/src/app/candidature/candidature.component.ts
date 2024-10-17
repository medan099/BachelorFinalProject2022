import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidature } from './candidature';
import { CandidatureService } from './candidature.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  constructor(private candidatureService: CandidatureService,private router:Router) { }
  isSent=false;
  sentMessage='Votre candidature a été envoyée'
  ngOnInit(): void {
    this.fileInfos = this.candidatureService.getFiles();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.candidatureService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.candidatureService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
  }

  public onAddCandidature(addFor: NgForm): void {
   
    this.candidatureService.AddCandidature(addFor.value).subscribe(
      (response: Candidature) => {
       /* this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });*/
        this.isSent=true;
        addFor.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addFor.reset();
      }
    );
    }

    public onDownload(Id:number):void{
      this.candidatureService.getFile(Id).subscribe(
        (response: any) => {
        
         },
         (error: HttpErrorResponse) => {
          
         }
      );
    }


}
