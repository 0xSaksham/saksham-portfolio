export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  isFeatured?: boolean;
}

export interface RoleContent {
  title: string;
  badge: string;
  description: string;
  projects: Project[];
}

export const PROJECTS_DATA: Record<string, RoleContent> = {
  // --- ANGULAR CONFIGURATION ---
  angular: {
    title: 'Angular Projects',
    badge: 'v17+ Signals',
    description:
      'A collection of applications demonstrating Signals, Standalone Components, and enterprise-grade architecture.',
    projects: [
      {
        title: 'Modern Angular Concepts',
        description:
          'Deep dive into Angular 17+ features. Implements best practices including Signals for state management and the new Control Flow syntax.',
        tags: ['Angular 17', 'TypeScript', 'Signals'],
        githubUrl: 'https://github.com/0xSaksham/tutorial-follow',
        isFeatured: true,
      },
      {
        title: 'Expense Tracker',
        description:
          'Full-stack financial dashboard. Connects a reactive Angular frontend with a secure Spring Boot backend.',
        tags: ['Angular', 'Tailwind', 'Spring Boot'],
        githubUrl: 'https://github.com/0xSaksham/expense-tracker',
        isFeatured: true,
      },
      {
        title: 'Student Management',
        description:
          'Complex CRUD application utilizing Reactive Forms for data entry, custom validators, and service-based state.',
        tags: ['Angular', 'Reactive Forms'],
        githubUrl: 'https://github.com/0xSaksham/student-management-app',
      },
    ],
  },

  // --- JAVA CONFIGURATION ---
  java: {
    title: 'Java Backend',
    badge: 'Spring Boot',
    description:
      'Scalable backend microservices and REST APIs built with Java and the Spring ecosystem.',
    projects: [
      {
        title: 'Expense Tracker API',
        description:
          'Robust REST API handling secure transactions, user authentication (JWT), and PostgreSQL persistence.',
        tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Security'],
        githubUrl: 'https://github.com/0xSaksham/expense-tracker',
        isFeatured: true,
      },
      // Add more Java projects here easily...
    ],
  },

  // --- REACT CONFIGURATION (Placeholder) ---
  react: {
    title: 'React Projects',
    badge: 'Hooks & Redux',
    description: 'Interactive UIs built with React ecosystem tools.',
    projects: [], // Empty for now, will show "Coming Soon" automatically
  },

  // --- NODE CONFIGURATION (Placeholder) ---
  node: {
    title: 'Node.js APIs',
    badge: 'Express / Nest',
    description: 'Server-side JavaScript implementations.',
    projects: [],
  },
};
