import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TefterShanComponent } from './Tefter-shan/tefter-shan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TefterShanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Homework3';
}
