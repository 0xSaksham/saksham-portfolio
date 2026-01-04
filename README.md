# 🚀 Portfolio_v2 Angular: The "Over-Engineered" Portfolio

> **"Why build a simple HTML page when you can build a state-managed, signal-driven, zoneless Angular application?"** - *Every Engineer, ever.*

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 👋 Welcome, Technical Recruiter!

If you are reading this, you probably clicked the **"Ready to be more impressed?"** button on my site.

I like your curiosity!

This isn't just a portfolio; it's a playground where I demonstrate that I actually keep up with the chaotic Javascript ecosystem.

### 🛠️ The Tech Stack (The "Good Stuff")

This project is built on the **Bleeding Edge™**:

*   **⚡ Angular 17+ (Zoneless):** No `Zone.js`. Change detection is manually triggered or Signal-based. Performance is O(1).
*   **📡 Signals:** No `BehaviorSubject` soup. No `.subscribe()`. Just pure, reactive primitives.
*   **🎨 Tailwind CSS v4:** The new engine. Zero runtime, pure CSS variables, instant builds.
*   **🧩 Zard UI:** A headless/styled component architecture (similar to shadcn/ui) because I like full control over my components.

### 🎮 How to "Play" the Portfolio

I treated the UX like a mini-RPG:

1.  **Select your Class:** Are you a `Recruiter` or a `Guest`?
2.  **Choose your Weapon:** Hiring for `Angular`? `React`? `Java`?
3.  **The Routing Strategy:** Dynamic routes (`/projects/:role`) using **Component Input Binding** (no `ActivatedRoute` boilerplate).

### 🏗️ Architecture Highlights

If you look at `src/app/app.ts`, you won't find a single RxJS subscription.
```typescript
// The old way (RxJS) 🤮
this.state$.subscribe(val => this.val = val);

// The Saksham way (Signals) 🚀
viewState = signal('LANDING');
// HTML updates instantly.
```

🏃‍♂️ Run it locally
Want to critique my code formatting? Be my guest:

```Bash
fork it!
git clone https://github.com/[YOUR_GITHUB_USERNAME]/saksham-portfolio.git
cd saksham-portfolio
npm install
ng serve
```
### 🤝 Let's Talk Code

If you like what you see (and how I write), let's schedule that interview. I promise I can explain standard change detection vs. OnPush without sweating.

### ❤️ A Note from the Creator
Built with ❤️ and way too much coffee ☕ by Saksham.
