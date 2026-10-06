<script lang="ts">
  import type { ExperienceItem } from '../types/portfolio';
  import { Calendar, MapPin } from 'lucide-svelte';

  let { experiences }: { experiences: ExperienceItem[] } = $props();
</script>

<section id="experience" class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  
  <!-- Section Title -->
  <div class="mb-10 space-y-2">
    <div class="inline-block bg-[#FFE600] text-black font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
      WORK HISTORY
    </div>
    <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white flex items-center gap-3">
      <span>PROFESSIONAL EXPERIENCE</span>
      <span class="text-[#FF5E97] text-2xl sm:text-4xl">★</span>
    </h2>
    <p class="text-zinc-600 dark:text-zinc-300 font-medium max-w-2xl text-sm sm:text-base">
      Proven track record building enterprise backend services, integrating business-critical systems, and maintaining production stability.
    </p>
  </div>

  <!-- Experience Cards Timeline -->
  <div class="space-y-8">
    {#each experiences as exp}
      <div class="bg-white dark:bg-[#151624] border-4 border-black dark:border-white shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#FFE600] relative">
        
        <!-- Header Bar -->
        <div class="bg-[#00F0FF] text-black border-b-4 border-black dark:border-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-4 font-mono font-bold">
          <div class="flex items-center gap-3">
            <span class="w-3.5 h-3.5 bg-black inline-block"></span>
            <span class="text-lg uppercase tracking-wider">{exp.company}</span>
            <span class="inline-flex items-center gap-1.5 bg-black text-[#54E346] text-xs px-2.5 py-0.5 border border-black font-bold">
              <span class="w-2 h-2 rounded-full bg-[#54E346] animate-pulse"></span>
              PRESENT
            </span>
          </div>
          <div class="flex items-center gap-4 text-xs font-bold text-black">
            <div class="flex items-center gap-1">
              <Calendar class="w-4 h-4" />
              <span>{exp.period}</span>
            </div>
            <div class="flex items-center gap-1">
              <MapPin class="w-4 h-4" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-6 sm:p-8 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black/10 dark:border-white/10 pb-4">
            <div>
              <span class="text-xs font-mono font-extrabold uppercase text-[#FF5E97] dark:text-[#FFE600]">
                POSITION
              </span>
              <h3 class="text-2xl sm:text-3xl font-black uppercase text-black dark:text-white tracking-tight">
                {exp.role}
              </h3>
            </div>
            <span class="bg-[#FFE600] text-black font-mono font-bold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
              FULL-TIME
            </span>
          </div>

          <!-- Highlight Bullets -->
          <div class="space-y-3">
            <div class="font-mono text-xs uppercase font-extrabold text-zinc-500 dark:text-zinc-400">
              KEY RESPONSIBILITIES & CONTRIBUTIONS:
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm">
              {#each exp.highlights as highlight}
                <li class="flex items-start gap-2.5 p-3.5 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium leading-relaxed">
                  <span class="inline-flex items-center justify-center w-5 h-5 bg-[#54E346] text-black border border-black font-mono font-black text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{highlight}</span>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Skills Badges Array -->
          <div class="pt-4 border-t-2 border-black/10 dark:border-white/10 space-y-2">
            <div class="font-mono text-xs uppercase font-extrabold text-zinc-500 dark:text-zinc-400">
              TECHNOLOGIES USED:
            </div>
            <div class="flex flex-wrap gap-2">
              {#each exp.skills as skill}
                <span class="bg-white dark:bg-[#25273C] text-black dark:text-white font-mono font-bold text-xs px-2.5 py-1 border-2 border-black dark:border-zinc-500 shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#FFE600] hover:-translate-y-0.5 transition-transform">
                  {skill}
                </span>
              {/each}
            </div>
          </div>

        </div>

      </div>
    {/each}
  </div>

</section>
