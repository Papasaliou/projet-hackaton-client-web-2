import { Routes } from '@angular/router';
import {NewchatComponent} from "./newchat/newchat.component";
import {HomechatComponent} from "./homechat/homechat.component";

export const routes: Routes = [
  {path:"",component:HomechatComponent},
  {path: "newchat",component:NewchatComponent}
];
