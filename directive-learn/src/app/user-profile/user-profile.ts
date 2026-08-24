import { Component } from '@angular/core';
import { AppHighlight } from "../directive/app-highlight";
import { Highlight } from "../directive/highlight2";

@Component({
  imports: [AppHighlight, Highlight],
  selector: 'app-user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {

}
