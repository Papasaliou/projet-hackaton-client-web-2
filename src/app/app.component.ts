import {Component, ElementRef, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {InnovativememoryService} from "./services/innovativememory.service";
import {Discussion} from "../utils/discussion";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import {NgIf} from "@angular/common";
import {DiscussionService} from "./services/discussion.service";
import {parseJson} from "@angular/cli/src/utilities/json-file";
declare function handleMenuOpen(): any;
declare function handleMenuClose(): any;
// declare function activatebtnSubmit(): any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
file!:File;
fileName:string = "";
fileUpload:boolean = false;
  question!:string;
  result!:string;
  discussion!:Discussion;

fileInput!: ElementRef;

  ngOnInit() {
    handleMenuClose();
  }

  constructor(private innovativememoryService:InnovativememoryService,private  discussionService:DiscussionService) {
  }
  title = 'app-web';
  protected readonly handleMenuClose = handleMenuClose;
  protected readonly handleMenuOpen = handleMenuOpen;


  onFileSelected(event: Event) { // Changé de MouseEvent à Event
    const fileInput = event.target as HTMLInputElement; // Corrigé la typo "fileInpute"
    if (fileInput.files && fileInput.files.length > 0) {
      this.file = fileInput.files[0];
      this.fileName = this.file.name; // Pas besoin de split() car file.name donne déjà le nom du fichier
      this.fileUpload = true;
    }
  }

  chatComponent() {
    this.discussionService.question = this.question;
    console.log("==========>"+this.discussionService.question);
    this.discussion=new Discussion(this.question,true)
    this.discussionService.discussions.push(this.discussion);
    console.log(this.discussionService.discussions.length);

    this.innovativememoryService.chat(this.question).subscribe({
      next : value => {
        this.result = value;
        this.discussion=new Discussion(value,false)
        this.discussionService.discussions.push(this.discussion);
        console.log(this.discussionService.discussions.length);
        console.log("============>"+value);
      },
      error:err => {
        console.log("Pas de reponse"+err.json);
      }
    })
  }


  uploadFile() {
    if(this.file){
      this.innovativememoryService.upload(this.file).subscribe({
        next:value => {
          console.log("Le document est bien uploder");

        },
        error:err => {
          console.log("erreur lors de l'upload du document"+err);
        }
      })
    }

  }

  // activatebtnSubmit($event: Ke) {
  //   const miInput = document.getElementById("icon-buttonSubmit") as HTMLInputElement;
  //   miInput.addEventListener("even",function (e){
  //     miInput.setAttribute("style","visibility:collapse");
  //   });
  // }
  // protected readonly activatebtnSubmit = activatebtnSubmit;
}
