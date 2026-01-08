import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Data Source
import { PROJECTS_DATA, RoleContent } from '@/data/projects.data';

// Zard UI
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardBadgeComponent } from '@/shared/components/badge/badge.component';
import { ZardIconComponent } from '@/shared/components/icon/icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ZardButtonComponent,
    ZardCardComponent,
    ZardBadgeComponent,
    ZardIconComponent,
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  // 1. Get the 'role' from the URL (e.g., 'angular', 'java')
  role = input.required<string>();

  // 2. Find the data that matches the role
  pageContent = computed<RoleContent | undefined>(() => {
    const key = this.role().toLowerCase();
    return PROJECTS_DATA[key];
  });

  // 3. Helper to define color themes based on role (Optional visual flair)
  themeColor = computed(() => {
    switch (this.role().toLowerCase()) {
      case 'angular':
        return 'text-red-500';
      case 'react':
        return 'text-blue-500';
      case 'java':
        return 'text-orange-500';
      case 'node':
        return 'text-green-500';
      default:
        return 'text-white';
    }
  });
}
