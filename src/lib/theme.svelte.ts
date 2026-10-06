class ThemeManager {
  isDark = $state(false);

  constructor() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        this.isDark = true;
        document.documentElement.classList.add('dark');
      } else {
        // Default light mode
        this.isDark = false;
        document.documentElement.classList.remove('dark');
      }
    }
  }

  toggle() {
    this.isDark = !this.isDark;
    if (typeof window !== 'undefined') {
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}

export const theme = new ThemeManager();
