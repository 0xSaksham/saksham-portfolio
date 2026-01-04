import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ZardButtonComponent } from '@/shared/components/button/button.component';

type ViewState = 'LANDING' | 'ROLE_SELECTION' | 'GUEST_FLOW';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
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
  }

  protected readonly title = signal('saksham-portfolio');
}
