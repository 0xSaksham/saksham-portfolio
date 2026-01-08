import { Component, signal, inject, effect } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardIconComponent } from '@/shared/components/icon/icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ZardButtonComponent, ZardIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private document = inject(DOCUMENT);
  isDarkMode = signal(true);

  constructor() {
    effect(() => {
      this.isDarkMode()
        ? this.document.body.classList.add('dark')
        : this.document.body.classList.remove('dark');
    });
  }

  toggleTheme() {
    this.isDarkMode.update((v) => !v);
  }
}
