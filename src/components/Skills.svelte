<script lang="ts">
  import type { SkillCategory } from '../types/portfolio';
  import { Code2, Server, Database, Container, Network, ShieldCheck } from 'lucide-svelte';

  let { skillCategories }: { skillCategories: SkillCategory[] } = $props();

  const categoryVisuals: Record<string, { bg: string; color: string; icon: any }> = {
    "cat-1": { bg: "bg-[#FFE600]", color: "text-black", icon: Code2 },
    "cat-2": { bg: "bg-[#00F0FF]", color: "text-black", icon: Server },
    "cat-3": { bg: "bg-[#54E346]", color: "text-black", icon: Database },
    "cat-4": { bg: "bg-[#FF8A00]", color: "text-black", icon: Container },
    "cat-5": { bg: "bg-[#FF5E97]", color: "text-black", icon: Network },
  };
</script>

<section id="skills" class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  
  <!-- Section Title -->
  <div class="mb-10 space-y-2">
    <div class="inline-block bg-[#00F0FF] text-black font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
      // 02. CORE COMPETENCIES
    </div>
    <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white flex items-center gap-3">
      <span>TECH MATRIX & STACK</span>
      <span class="text-[#FFE600] text-2xl sm:text-4xl">⚡</span>
    </h2>
    <p class="text-zinc-600 dark:text-zinc-300 font-medium max-w-2xl text-sm sm:text-base">
      High-throughput backend engineering, scalable data persistence, enterprise connectors, and deep production observability.
    </p>
  </div>

  <!-- Skills Category Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each skillCategories as cat, idx}
      {@const visual = categoryVisuals[cat.id] || { bg: "bg-[#FFE600]", color: "text-black", icon: Code2 }}
      {@const Icon = visual.icon}
      
      <div class="bg-white dark:bg-[#151624] border-3 border-black dark:border-white shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#FFE600] flex flex-col justify-between group hover:-translate-y-1 transition-transform">
        
        <div>
          <!-- Header Bar with Distinct Neo-brutalist Pop Color -->
          <div class="{visual.bg} {visual.color} p-4 border-b-3 border-black dark:border-white flex items-center justify-between font-mono font-black">
            <div class="flex items-center gap-2.5">
              <Icon class="w-5 h-5 stroke-[2.5]" />
              <h3 class="text-base uppercase tracking-tight">{cat.category}</h3>
            </div>
            <span class="bg-black text-white text-xs px-2 py-0.5 border border-black font-mono font-bold">
              0{idx + 1}
            </span>
          </div>

          <!-- Skills List -->
          <div class="p-5 flex flex-wrap gap-2.5">
            {#each cat.skills as skill}
              <div class="bg-[#FFFDF0] dark:bg-[#1E1F30] text-black dark:text-white font-mono font-bold text-xs sm:text-sm px-3 py-1.5 border-2 border-black dark:border-zinc-500 shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#fff] flex items-center gap-2 hover:bg-[#FFE600] hover:text-black dark:hover:bg-[#FFE600] dark:hover:text-black transition-colors cursor-default">
                <span class="w-1.5 h-1.5 bg-[#FF5E97] rounded-none inline-block"></span>
                <span>{skill}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Card Footer Technical Tag -->
        <div class="px-5 py-2.5 bg-zinc-100 dark:bg-[#1C1D2E] border-t-2 border-black/10 dark:border-white/10 text-[11px] font-mono font-bold text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
          <span>DEPLOYED IN PRODUCTION</span>
          <span class="text-[#54E346]">VERIFIED ✓</span>
        </div>

      </div>
    {/each}

    <!-- Extra Neobrutalist Stack Highlights Box -->
    <div class="bg-[#FFE600] border-3 border-black dark:border-white shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff] p-6 flex flex-col justify-between text-black">
      <div class="space-y-3">
        <div class="inline-block bg-black text-[#FFE600] font-mono font-black text-xs px-2.5 py-1 uppercase">
          // ARCHITECTURE PILLARS
        </div>
        <h4 class="text-2xl font-black uppercase leading-tight">
          RELIABILITY, SPEED & OBSERVABILITY
        </h4>
        <p class="text-xs sm:text-sm font-medium leading-relaxed">
          Zero-guesswork telemetry: Every endpoint traced with Loki, monitored via Prometheus alerts, and deployed container-first for high-stress resilience.
        </p>
      </div>

      <div class="pt-4 border-t-2 border-black flex items-center justify-between font-mono font-bold text-xs">
        <span>SLA STANDARD: 99.9%</span>
        <span class="bg-black text-white px-2 py-0.5">READY</span>
      </div>
    </div>

  </div>

</section>
