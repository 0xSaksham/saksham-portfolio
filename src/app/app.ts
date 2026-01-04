import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardBadgeComponent } from '@/shared/components/badge/badge.component';

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
  showTechModal: WritableSignal<boolean> = signal(false);

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

  openTechModal() {
    this.showTechModal.set(true);
  }

  closeTechModal() {
    this.showTechModal.set(false);
  }

  goToGithub() {
    window.open('https://github.com/0xsaksham/saksham-portfolio', '_blank');
    this.closeTechModal();
  }

  protected readonly title = signal('saksham-portfolio');
}
