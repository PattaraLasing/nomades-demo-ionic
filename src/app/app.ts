import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ionic-demo');
}
