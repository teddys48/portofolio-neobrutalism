<script lang="ts">
  import type { PersonalInfo } from '../types/portfolio';
  import { ArrowUp, Terminal, Heart } from 'lucide-svelte';

  let { personalInfo }: { personalInfo: PersonalInfo } = $props();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="bg-black text-white border-t-4 border-black dark:border-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
  <div class="max-w-7xl mx-auto space-y-8">
    
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-2 border-zinc-800">
      
      <!-- Brand & Mission -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <div class="bg-[#FFE600] text-black font-mono font-black text-lg px-2.5 py-1 border-2 border-white shadow-[2px_2px_0_#fff]">
            TEDDY SETIAWAN
          </div>
          <span class="bg-[#FF5E97] text-black font-mono font-bold text-xs px-2 py-0.5 border border-white">
            BACKEND ENGINEER
          </span>
        </div>
        <p class="text-zinc-400 font-mono text-xs max-w-md">
          Designing scalable services, resilient enterprise integrations, and high-performance APIs with Go, Node.js, and Docker.
        </p>
      </div>

      <!-- Quick Back to Top Neobrutalist Button -->
      <button 
        onclick={scrollToTop}
        class="neo-btn bg-[#00F0FF] text-black font-mono font-black text-xs px-4 py-2.5 uppercase flex items-center gap-2 border-2 border-white shadow-[3px_3px_0_#fff] cursor-pointer"
      >
        <span>BACK TO TOP</span>
        <ArrowUp class="w-4 h-4 stroke-[3]" />
      </button>

    </div>

    <!-- Tech Stack Blueprint & Copyright -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-zinc-400">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-zinc-500">ENGINEERING SPEC:</span>
        <span class="text-[#FFE600] font-bold">BUN 1.3</span>
        <span>•</span>
        <span class="text-[#FF5E97] font-bold">SVELTE 5</span>
        <span>•</span>
        <span class="text-[#00F0FF] font-bold">VITE</span>
        <span>•</span>
        <span class="text-[#54E346] font-bold">TAILWIND CSS</span>
        <span>•</span>
        <span class="text-white font-bold">EXTREME NEOBRUTALISM</span>
      </div>

      <div class="text-zinc-500 text-[11px]">
        © {new Date().getFullYear()} TEDDY SETIAWAN. ALL RIGHTS RESERVED.
      </div>
    </div>

  </div>
</footer>
