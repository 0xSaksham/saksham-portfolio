import { Component, signal, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Zard UI Imports
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardBadgeComponent } from '@/shared/components/badge/badge.component';

type ViewState = 'LANDING' | 'ROLE_SELECTION' | 'GUEST_FLOW';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ZardButtonComponent, ZardCardComponent, ZardBadgeComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
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
    // This now navigates AWAY from HomeComponent, solving the overlap issue
    this.router.navigate(['/projects', role.toLowerCase()]);
  }
}
