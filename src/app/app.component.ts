import { Component, ElementRef, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InnovativememoryService } from "./services/innovativememory.service";
import { Discussion } from "../utils/discussion";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { DiscussionService } from "./services/discussion.service";

declare function handleMenuOpen(): any;
declare function handleMenuClose(): any;

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
export class AppComponent implements OnInit {
  file!: File;
  fileName: string = "";
  fileUpload: boolean = false;
  audiofileUpload: boolean = false;
  question!: string;
  result!: string;
  discussion!: Discussion;
  audioFile!: File;
  audioFileInput!: ElementRef;
  fileInput!: ElementRef;

  showFileUploadButton: boolean = false;
  showAudioUploadButton: boolean = false;

  constructor(
    private innovativememoryService: InnovativememoryService,
    private discussionService: DiscussionService
  ) {}

  ngOnInit() {
    handleMenuClose();
  }

  title = 'app-web';
  protected readonly handleMenuClose = handleMenuClose;
  protected readonly handleMenuOpen = handleMenuOpen;

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.file = fileInput.files[0];
      this.fileName = this.file.name;
      this.fileUpload = true;
      this.showFileUploadButton = true;
      this.showAudioUploadButton = false;
      this.audiofileUpload = false;
    }
  }

  onAudioFileSelected(event: Event) {
    const audiofileInput = event.target as HTMLInputElement;
    if (audiofileInput.files && audiofileInput.files.length > 0) {
      this.audioFile = audiofileInput.files[0];
      this.fileName = this.audioFile.name;
      this.audiofileUpload = true;
      this.showAudioUploadButton = true;
      this.showFileUploadButton = false;
      this.fileUpload = false;
    }
  }

  chatComponent() {
    this.discussionService.question = this.question;
    this.discussion = new Discussion(this.question, true);
    this.discussionService.discussions.push(this.discussion);

    this.innovativememoryService.chat(this.question).subscribe({
      next: value => {
        this.discussion = new Discussion(value, false);
        this.discussionService.discussions.push(this.discussion);
      },
      error: err => {
        console.log("Pas de reponse" + JSON.stringify(err));
      }
    });
  }

  uploadAudioFile() {
    if(this.audioFile) {
      this.innovativememoryService.uploadAudio(this.audioFile).subscribe({
        next: value => {
          this.discussion = new Discussion(value, false);
          this.discussionService.discussions.push(this.discussion);
        },
        error: err => {
          console.log("erreur lors de l'upload du document" + JSON.stringify(err));
        }
      });
    }
  }

  uploadFile() {
    if(this.file) {
      this.innovativememoryService.upload(this.file).subscribe({
        next: value => {
          this.result = value;
          this.discussion = new Discussion(value, false);
          this.discussionService.discussions.push(this.discussion);
          console.log(this.discussionService.discussions.length);
          console.log("============>" + value);
        },
        error: err => {
          console.log("erreur lors de l'upload du document" + err);
        }
      });
    }
  }
}