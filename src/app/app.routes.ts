import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  // This single line now handles Angular, Java, React, Node, etc.
  { path: 'projects/:role', component: ProjectsComponent },

  { path: '**', redirectTo: '' },
];
