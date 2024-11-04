import { Injectable } from '@angular/core';
import {Discussion} from "../../utils/discussion";

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  question!:string;
  result!:string;
  discussion!:Discussion;
  public discussions:Array<Discussion>=[];

  constructor() { }
}
