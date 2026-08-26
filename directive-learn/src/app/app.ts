import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from "./user-profile/user-profile";
import { TestAttriDir } from "./directive/test-attri-dir/test-attri-dir";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, TestAttriDir],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directive-learn');
}
