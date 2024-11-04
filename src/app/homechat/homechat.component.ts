import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {AppComponent} from "../app.component";
import {InnovativememoryService} from "../services/innovativememory.service";
import {Discussion} from "../../utils/discussion";
import {DiscussionService} from "../services/discussion.service";

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

export class HomechatComponent implements OnInit{
  ngOnInit() {
    this.listDiscussion = this.discussionService.discussions;
  }

  listDiscussion:Array<Discussion>=[];
  protected readonly AppComponent = AppComponent;
  constructor(private innovativememoryService:InnovativememoryService,private discussionService:DiscussionService) {
  }


}
