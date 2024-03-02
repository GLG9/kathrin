import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { AusbildungComponent } from './pages/ausbildung/ausbildung.component';
import { CoachingComponent } from './pages/coaching/coaching.component';
import { ContactComponent } from './pages/contact/contact.component';
import { homedir } from 'os';
import { HomeComponent } from './pages/home/home.component';
import { KosmetikComponent } from './pages/kosmetik/kosmetik.component';
import { RechtlichesComponent } from './pages/rechtliches/rechtliches.component';
import { SchmerzbehandlungComponent } from './pages/schmerzbehandlung/schmerzbehandlung.component';
import { TherapieComponent } from './pages/therapie/therapie.component';
import { WorkingComponent } from './pages/working/working.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    AusbildungComponent,
    CoachingComponent,
    ContactComponent,
    HomeComponent,
    KosmetikComponent,
    RechtlichesComponent,
    SchmerzbehandlungComponent,
    TherapieComponent,
    WorkingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'kathrin';
}