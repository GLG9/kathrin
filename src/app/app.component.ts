import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartComponent } from './start/start.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'kathrin';
}