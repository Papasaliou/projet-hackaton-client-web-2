import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-newchat',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './newchat.component.html',
  styleUrl: './newchat.component.css'
})
export class NewchatComponent {

  onFileselected($event: MouseEvent) {

  }

  chatComponent() {

  }

  uploadFile() {

  }
}
