import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCardComponent } from './shared/components/card/card.component';
import { ZardBadgeComponent } from './shared/components/badge/badge.component';

type ViewState = 'LANDING' | 'ROLE_SELECTION' | 'GUEST_FLOW';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ZardBadgeComponent, ZardButtonComponent, ZardCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private router = inject(Router);
  viewState: WritableSignal<ViewState> = signal('LANDING');

  startRecruiterFlow() {
    this.viewState.set('ROLE_SELECTION');
  }

  startGuestFlow() {
    this.viewState.set('GUEST_FLOW');
  }

  reset() {
    this.viewState.set('LANDING');
  }

  setRole(role: string) {
    console.log(`User Selected: ${role}`);
    // this.router.navigate(['/projects', role.toLowerCase()]);
  }

  protected readonly title = signal('saksham-portfolio');
}
