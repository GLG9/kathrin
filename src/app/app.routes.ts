import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AusbildungComponent } from './pages/ausbildung/ausbildung.component';
import { CoachingComponent } from './pages/coaching/coaching.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KosmetikComponent } from './pages/kosmetik/kosmetik.component';
import { RechtlichesComponent } from './pages/rechtliches/rechtliches.component';
import { SchmerzbehandlungComponent } from './pages/schmerzbehandlung/schmerzbehandlung.component';
import { TherapieComponent } from './pages/therapie/therapie.component';
import { WorkingComponent } from './pages/working/working.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'über-mich', component: AboutComponent },
    { path: 'ausbildung', component: AusbildungComponent },
    { path: 'coaching', component: CoachingComponent },
    { path: 'kontakt', component: ContactComponent },
    { path: 'kosmetik', component: KosmetikComponent },
    { path: 'rechtliches', component: RechtlichesComponent },
    { path: 'schmerzbehandlung', component: SchmerzbehandlungComponent },
    { path: 'therapie', component: TherapieComponent },
    { path: 'wie-ich-arbeite', component: WorkingComponent },

    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];