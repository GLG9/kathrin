import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.sass'
})

export class StartComponent {
  navigateTo() {
    window.location.href = "./#";
  }
}

