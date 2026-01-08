import { Component, signal, WritableSignal, inject, effect } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

// Zard UI Imports
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardBadgeComponent } from '@/shared/components/badge/badge.component';
import { ZardIconComponent } from '@/shared/components/icon/icon.component';

type ViewState = 'LANDING' | 'ROLE_SELECTION' | 'GUEST_FLOW';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ZardButtonComponent,
    ZardCardComponent,
    ZardBadgeComponent,
    ZardIconComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private router = inject(Router);
  private document = inject(DOCUMENT);

  viewState: WritableSignal<ViewState> = signal('LANDING');
  isDarkMode = signal(true); // Default to dark

  constructor() {
    // Effect to apply class to body whenever signal changes
    effect(() => {
      if (this.isDarkMode()) {
        this.document.body.classList.add('dark');
      } else {
        this.document.body.classList.remove('dark');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.update((v) => !v);
  }

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
    this.router.navigate(['/projects', role.toLowerCase()]);
  }
}
