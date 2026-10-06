<script lang="ts">
  import type { EducationItem, CertificationItem } from '../types/portfolio';
  import { GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-svelte';

  let { education, certifications }: { education: EducationItem[]; certifications: CertificationItem[] } = $props();
</script>

<section id="education" class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    <!-- Left Column: Education -->
    <div class="lg:col-span-6 space-y-6">
      
      <div class="space-y-2">
        <div class="inline-block bg-[#FF8A00] text-black font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
          // 04. ACADEMICS
        </div>
        <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white flex items-center gap-2.5">
          <span>EDUCATION</span>
          <GraduationCap class="w-7 h-7 text-[#FF8A00]" />
        </h2>
      </div>

      {#each education as edu}
        <div class="bg-white dark:bg-[#151624] border-4 border-black dark:border-white shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#FFE600] p-6 sm:p-7 space-y-4">
          
          <div class="flex flex-wrap items-start justify-between gap-2 border-b-2 border-black/10 dark:border-white/10 pb-4">
            <div>
              <span class="bg-[#FFE600] text-black font-mono font-black text-xs px-2.5 py-0.5 border border-black uppercase shadow-[2px_2px_0_#000]">
                {edu.period}
              </span>
              <h3 class="text-xl sm:text-2xl font-black uppercase text-black dark:text-white mt-2">
                {edu.institution}
              </h3>
              <p class="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                {edu.degree}
              </p>
            </div>
            
            <div class="bg-[#54E346] text-black border-2 border-black px-3 py-1.5 font-mono text-center shadow-[3px_3px_0_#000]">
              <div class="text-[10px] font-bold uppercase">CUMULATIVE GPA</div>
              <div class="text-lg font-black">{edu.gpa} / 4.00</div>
            </div>
          </div>

          <div class="space-y-2 pt-1">
            <div class="font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase">
              CONCENTRATION AREAS:
            </div>
            {#each edu.details as detail}
              <div class="p-3 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700 font-medium text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                <CheckCircle2 class="w-4 h-4 text-[#54E346] shrink-0" />
                <span>{detail}</span>
              </div>
            {/each}
          </div>

        </div>
      {/each}

    </div>

    <!-- Right Column: Certifications -->
    <div class="lg:col-span-6 space-y-6">
      
      <div class="space-y-2">
        <div class="inline-block bg-[#FF5E97] text-black font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
          // 05. LICENSES
        </div>
        <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white flex items-center gap-2.5">
          <span>CERTIFICATIONS</span>
          <Award class="w-7 h-7 text-[#FF5E97]" />
        </h2>
      </div>

      <div class="space-y-4">
        {#each certifications as cert}
          <div class="bg-white dark:bg-[#151624] border-3 border-black dark:border-white shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#FFE600] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:-translate-y-1 transition-transform">
            
            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 bg-[#00F0FF] text-black border-2 border-black flex items-center justify-center font-mono font-black shrink-0 shadow-[2px_2px_0_#000]">
                <ShieldCheck class="w-5 h-5" />
              </div>
              <div class="space-y-1">
                <h3 class="font-black text-base sm:text-lg text-black dark:text-white uppercase leading-snug">
                  {cert.title}
                </h3>
                <p class="font-mono text-xs text-zinc-600 dark:text-zinc-400">
                  ISSUER: <span class="font-bold text-black dark:text-zinc-200">{cert.issuer}</span>
                </p>
              </div>
            </div>

            <div class="sm:text-right shrink-0">
              <span class="inline-block bg-[#FFE600] text-black font-mono font-black text-xs px-2.5 py-1 border border-black shadow-[2px_2px_0_#000]">
                ISSUED {cert.year}
              </span>
            </div>

          </div>
        {/each}
      </div>

    </div>

  </div>

</section>
