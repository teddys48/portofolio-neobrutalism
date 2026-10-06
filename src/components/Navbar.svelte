<script lang="ts">
  import { theme } from '../lib/theme.svelte';
  import { Sun, Moon, Menu, X, ArrowUpRight, Terminal } from 'lucide-svelte';

  let mobileMenuOpen = $state(false);

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }
</script>

<!-- Top Alert / Marquee System Status Bar -->
<div class="bg-black text-[#FFE600] border-b-2 border-black dark:border-white py-1 px-4 text-xs font-mono font-bold tracking-wider flex items-center justify-between overflow-hidden">
  <div class="flex items-center gap-2 shrink-0">
    <span class="inline-block w-2.5 h-2.5 rounded-full bg-[#54E346] animate-pulse-fast"></span>
    <span class="uppercase">STATUS: ALL SERVICES HEALTHY // 4+ YRS BACKEND EXP // JAKARTA, ID</span>
  </div>
  <div class="hidden md:flex items-center gap-4 text-white text-[11px]">
    <span>LATENCY: 12ms</span>
    <span>RUNTIME: BUN + GO + NODE</span>
    <span class="text-[#00F0FF]">UPTIME: 99.98%</span>
  </div>
</div>

<!-- Sticky Main Navbar -->
<header class="sticky top-0 z-50 bg-[#FFFDF0]/95 dark:bg-[#0D0E15]/95 backdrop-blur-sm border-b-3 border-black dark:border-white transition-colors duration-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
    
    <!-- Brand Logo -->
    <a href="/" class="flex items-center gap-2 group">
      <div class="bg-[#FFE600] text-black font-mono font-extrabold text-xl px-3 py-1.5 border-3 border-black shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#fff] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform flex items-center gap-1.5">
        <Terminal class="w-5 h-5 stroke-[2.5]" />
        <span>TEDDY.STWN</span>
      </div>
      <span class="hidden sm:inline-block bg-[#00F0FF] text-black text-xs font-bold font-mono px-2 py-1 border-2 border-black rotate-2 shadow-[2px_2px_0_#000]">
        BACKEND
      </span>
    </a>

    <!-- Desktop Nav Links -->
    <nav class="hidden lg:flex items-center gap-3">
      <a href="#experience" class="px-3.5 py-1.5 font-bold text-sm tracking-tight border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#FFE600] hover:text-black dark:text-zinc-200 dark:hover:text-black hover:shadow-[3px_3px_0_#000] dark:hover:shadow-[3px_3px_0_#fff] transition-all">
        EXPERIENCE
      </a>
      <a href="#skills" class="px-3.5 py-1.5 font-bold text-sm tracking-tight border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#00F0FF] hover:text-black dark:text-zinc-200 dark:hover:text-black hover:shadow-[3px_3px_0_#000] dark:hover:shadow-[3px_3px_0_#fff] transition-all">
        TECH STACK
      </a>
      <a href="#projects" class="px-3.5 py-1.5 font-bold text-sm tracking-tight border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#54E346] hover:text-black dark:text-zinc-200 dark:hover:text-black hover:shadow-[3px_3px_0_#000] dark:hover:shadow-[3px_3px_0_#fff] transition-all flex items-center gap-1">
        GITHUB PROJECTS
        <span class="bg-black text-white text-[10px] font-mono px-1 py-0.2 rounded-none">PAGE</span>
      </a>
      <a href="#education" class="px-3.5 py-1.5 font-bold text-sm tracking-tight border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#FF8A00] hover:text-black dark:text-zinc-200 dark:hover:text-black hover:shadow-[3px_3px_0_#000] dark:hover:shadow-[3px_3px_0_#fff] transition-all">
        CREDENTIALS
      </a>
      <a href="#contact" class="px-3.5 py-1.5 font-bold text-sm tracking-tight border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#FF5E97] hover:text-black dark:text-zinc-200 dark:hover:text-black hover:shadow-[3px_3px_0_#000] dark:hover:shadow-[3px_3px_0_#fff] transition-all">
        CONTACT
      </a>
    </nav>

    <!-- Header Actions -->
    <div class="flex items-center gap-3">
      <!-- Theme Switcher -->
      <button 
        onclick={() => theme.toggle()} 
        type="button"
        aria-label="Toggle theme mode"
        class="p-2 sm:px-3 sm:py-2 bg-white dark:bg-[#1C1D2E] text-black dark:text-white border-2 border-black dark:border-white shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#FFE600] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-transform flex items-center gap-2 cursor-pointer"
      >
        {#if theme.isDark}
          <Sun class="w-5 h-5 text-[#FFE600] stroke-[2.5]" />
          <span class="hidden sm:inline font-mono font-bold text-xs uppercase tracking-wider text-[#FFE600]">LIGHT</span>
        {:else}
          <Moon class="w-5 h-5 text-black stroke-[2.5]" />
          <span class="hidden sm:inline font-mono font-bold text-xs uppercase tracking-wider">DARK</span>
        {/if}
      </button>

      <!-- Get In Touch CTA -->
      <a 
        href="#contact" 
        class="hidden sm:inline-flex items-center gap-1.5 bg-[#FF5E97] text-black font-extrabold text-sm px-4 py-2 border-2 border-black dark:border-white shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#FFE600] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#000] dark:hover:shadow-[5px_5px_0_#FFE600] transition-all"
      >
        <span>HIRE ME</span>
        <ArrowUpRight class="w-4 h-4 stroke-[3]" />
      </a>

      <!-- Mobile Menu Toggle Button -->
      <button 
        onclick={toggleMenu}
        aria-label="Toggle mobile menu"
        class="lg:hidden p-2 bg-[#FFE600] text-black border-2 border-black shadow-[3px_3px_0_#000] cursor-pointer"
      >
        {#if mobileMenuOpen}
          <X class="w-6 h-6 stroke-[3]" />
        {:else}
          <Menu class="w-6 h-6 stroke-[3]" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Dropdown Menu -->
  {#if mobileMenuOpen}
    <div class="lg:hidden bg-[#FFE600] border-b-3 border-black p-4 space-y-2 shadow-[0_6px_0_#000]">
      <a 
        href="#experience" 
        onclick={closeMenu} 
        class="block w-full text-center py-2.5 font-black text-black bg-white border-2 border-black shadow-[3px_3px_0_#000] active:translate-x-1 active:translate-y-1"
      >
        EXPERIENCE
      </a>
      <a 
        href="#skills" 
        onclick={closeMenu} 
        class="block w-full text-center py-2.5 font-black text-black bg-white border-2 border-black shadow-[3px_3px_0_#000] active:translate-x-1 active:translate-y-1"
      >
        TECH STACK
      </a>
      <a 
        href="#projects" 
        onclick={closeMenu} 
        class="block w-full text-center py-2.5 font-black text-black bg-[#54E346] border-2 border-black shadow-[3px_3px_0_#000] active:translate-x-1 active:translate-y-1"
      >
        GITHUB PROJECTS (BY PAGE)
      </a>
      <a 
        href="#education" 
        onclick={closeMenu} 
        class="block w-full text-center py-2.5 font-black text-black bg-white border-2 border-black shadow-[3px_3px_0_#000] active:translate-x-1 active:translate-y-1"
      >
        CREDENTIALS
      </a>
      <a 
        href="#contact" 
        onclick={closeMenu} 
        class="block w-full text-center py-2.5 font-black text-black bg-[#FF5E97] border-2 border-black shadow-[3px_3px_0_#000] active:translate-x-1 active:translate-y-1"
      >
        GET IN TOUCH
      </a>
    </div>
  {/if}
</header>
