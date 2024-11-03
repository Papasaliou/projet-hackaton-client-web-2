import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {AppComponent} from "../app.component";
import {InnovativememoryService} from "../services/innovativememory.service";

@Component({
  selector: 'app-homechat',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './homechat.component.html',
  styleUrl: './homechat.component.css'
})
export class HomechatComponent  {

  protected readonly AppComponent = AppComponent;
}
