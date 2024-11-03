import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {InnovativememoryService} from "./services/innovativememory.service";
import {Discussion} from "../utils/discussion";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import {NgIf} from "@angular/common";
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
question!:string;
result!:string;
discussion!:Discussion;
public discussions:Array<Discussion>=[];

  ngOnInit() {
    handleMenuClose();
  }

  constructor(private innovativememoryService:InnovativememoryService) {
  }
  title = 'app-web';
  protected readonly handleMenuClose = handleMenuClose;
  protected readonly handleMenuOpen = handleMenuOpen;


  onFileselected(event: MouseEvent, ) {
    const fileInpute = event.target as HTMLInputElement;
    if(fileInpute.files && fileInpute.files.length > 0){
      this.file = fileInpute.files[0];
      this.fileName = this.file.name.split('/').pop() || '';
    }
  }

  chatComponent() {
    console.log("===================>"+this.question);
    this.discussion.messages = this.question;
    this.discussion.identite = false;
    this.discussions.push(this.discussion);
    this.innovativememoryService.chat(this.question).subscribe({
      next : value => {
        this.result = value;
        this.discussion.messages=this.question;
        this.discussion.identite=true;
        this.discussions.push(this.discussion)
      },
      error:err => {
        console.log("Pas de reponse"+err);
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
