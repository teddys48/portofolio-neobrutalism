<script lang="ts">
  import type { PersonalInfo } from '../types/portfolio';
  import GithubIcon from './icons/GithubIcon.svelte';
  import LinkedinIcon from './icons/LinkedinIcon.svelte';
  import { 
    Mail, 
    Phone, 
    MapPin, 
    ArrowDownRight, 
    CheckCircle2,
    FileText,
    Server,
    ShieldCheck,
    Layers,
    Cpu
  } from 'lucide-svelte';

  let { personalInfo }: { personalInfo: PersonalInfo } = $props();
</script>

<section class="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
  
  <!-- Neobrutalist decorative shapes -->
  <div class="absolute -top-12 -right-12 w-64 h-64 bg-[#FFE600] rounded-none rotate-12 -z-10 border-4 border-black opacity-30 dark:opacity-10 pointer-events-none"></div>
  <div class="absolute bottom-4 -left-12 w-48 h-48 bg-[#00F0FF] rounded-none -rotate-6 -z-10 border-4 border-black opacity-25 dark:opacity-10 pointer-events-none"></div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    <!-- Left Column: Personal Brand & Intro -->
    <div class="lg:col-span-7 space-y-6">
      
      <!-- Role Badge -->
      <div class="inline-flex items-center gap-2 bg-[#00F0FF] text-black font-mono font-bold text-xs px-3.5 py-1.5 border-3 border-black dark:border-white shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
        <span>BACKEND SOFTWARE ENGINEER</span>
      </div>

      <!-- Main Headline -->
      <div class="space-y-2">
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-black dark:text-white">
          {personalInfo.name}
        </h1>
        <div class="flex flex-wrap items-center gap-3 pt-1">
          <span class="inline-block bg-[#FFE600] text-black font-mono font-black text-xl sm:text-2xl px-3 py-1 border-3 border-black shadow-[3px_3px_0_#000] -rotate-1">
            {personalInfo.role.toUpperCase()}
          </span>
          <span class="bg-[#54E346] text-black font-mono font-bold text-xs sm:text-sm px-2.5 py-1 border-2 border-black rotate-1 shadow-[2px_2px_0_#000]">
            4+ YEARS EXPERIENCE
          </span>
        </div>
      </div>

      <!-- Bio / Summary -->
      <p class="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed border-l-4 border-black dark:border-[#FFE600] pl-4 bg-white/80 dark:bg-[#181926]/90 p-4 border-2 border-black dark:border-white shadow-[5px_5px_0_#000] dark:shadow-[5px_5px_0_#FFE600]">
        {personalInfo.summary}
      </p>

      <!-- Contact Info Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs font-bold">
        <div class="flex items-center gap-2 p-2.5 bg-white dark:bg-[#1C1D2E] text-black dark:text-white border-2 border-black dark:border-white shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#fff]">
          <MapPin class="w-4 h-4 text-[#FF5E97] shrink-0" />
          <span class="truncate">{personalInfo.location}</span>
        </div>
        <a href="mailto:{personalInfo.email}" class="flex items-center gap-2 p-2.5 bg-white dark:bg-[#1C1D2E] text-black dark:text-white border-2 border-black dark:border-white shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#fff] hover:bg-[#FFE600] hover:text-black transition-colors">
          <Mail class="w-4 h-4 text-[#00F0FF] shrink-0" />
          <span class="truncate">{personalInfo.email}</span>
        </a>
        <a href="tel:{personalInfo.phone}" class="flex items-center gap-2 p-2.5 bg-white dark:bg-[#1C1D2E] text-black dark:text-white border-2 border-black dark:border-white shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#fff] hover:bg-[#54E346] hover:text-black transition-colors">
          <Phone class="w-4 h-4 text-[#54E346] shrink-0" />
          <span class="truncate">{personalInfo.phone}</span>
        </a>
      </div>

      <!-- Action Buttons Row -->
      <div class="flex flex-wrap items-center gap-4 pt-3">
        <a 
          href="#projects" 
          class="neo-btn inline-flex items-center gap-2 bg-[#FFE600] text-black font-black text-sm sm:text-base px-6 py-3.5 tracking-wider uppercase cursor-pointer"
        >
          <span>VIEW PROJECTS</span>
          <ArrowDownRight class="w-5 h-5 stroke-[3]" />
        </a>

        <a 
          href={personalInfo.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="neo-btn inline-flex items-center gap-2 bg-[#00F0FF] text-black font-black text-sm sm:text-base px-5 py-3.5 tracking-wider uppercase cursor-pointer"
        >
          <LinkedinIcon class="w-5 h-5" />
          <span>LINKEDIN</span>
        </a>

        <a 
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="neo-btn inline-flex items-center gap-2 bg-white dark:bg-[#25273C] text-black dark:text-white font-black text-sm sm:text-base px-5 py-3.5 tracking-wider uppercase cursor-pointer"
        >
          <GithubIcon class="w-5 h-5" />
          <span>GITHUB</span>
        </a>
      </div>

    </div>

    <!-- Right Column: Professional Highlights Card -->
    <div class="lg:col-span-5 w-full">
      <div class="bg-white dark:bg-[#151624] border-4 border-black dark:border-white shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#FFE600] overflow-hidden">
        
        <!-- Header Bar -->
        <div class="bg-black text-white px-4 py-3 border-b-3 border-black flex items-center justify-between font-mono text-xs font-bold">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-[#FF5E97] border border-black inline-block"></span>
            <span class="w-3 h-3 bg-[#FFE600] border border-black inline-block"></span>
            <span class="w-3 h-3 bg-[#54E346] border border-black inline-block"></span>
            <span class="ml-2 text-[#FFE600] uppercase tracking-wider">CORE FOCUS & STRENGTHS</span>
          </div>
          <span class="bg-[#54E346] text-black text-[10px] px-2 py-0.5 font-black uppercase">OVERVIEW</span>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-4">
          
          <div class="space-y-3.5">
            <!-- Item 1 -->
            <div class="p-3.5 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700 flex items-start gap-3">
              <div class="w-8 h-8 bg-[#FFE600] text-black border-2 border-black flex items-center justify-center font-bold shrink-0">
                <Server class="w-4 h-4" />
              </div>
              <div class="space-y-0.5">
                <h3 class="font-black text-sm text-black dark:text-white uppercase">High-Performance APIs</h3>
                <p class="text-xs text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                  Building modular RESTful APIs and backend services using Go (Fiber) and Node.js with structured layering.
                </p>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="p-3.5 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700 flex items-start gap-3">
              <div class="w-8 h-8 bg-[#00F0FF] text-black border-2 border-black flex items-center justify-center font-bold shrink-0">
                <Layers class="w-4 h-4" />
              </div>
              <div class="space-y-0.5">
                <h3 class="font-black text-sm text-black dark:text-white uppercase">Enterprise SAP Integration</h3>
                <p class="text-xs text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                  Integrating backend services with SAP to synchronize mission-critical business transactions and data.
                </p>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="p-3.5 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700 flex items-start gap-3">
              <div class="w-8 h-8 bg-[#54E346] text-black border-2 border-black flex items-center justify-center font-bold shrink-0">
                <ShieldCheck class="w-4 h-4" />
              </div>
              <div class="space-y-0.5">
                <h3 class="font-black text-sm text-black dark:text-white uppercase">Observability & Monitoring</h3>
                <p class="text-xs text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                  Implementing centralized logging and automated alerts with Grafana, Loki, Prometheus, and Promtail.
                </p>
              </div>
            </div>

            <!-- Item 4 -->
            <div class="p-3.5 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700 flex items-start gap-3">
              <div class="w-8 h-8 bg-[#FF5E97] text-black border-2 border-black flex items-center justify-center font-bold shrink-0">
                <Cpu class="w-4 h-4" />
              </div>
              <div class="space-y-0.5">
                <h3 class="font-black text-sm text-black dark:text-white uppercase">DevOps & Automation</h3>
                <p class="text-xs text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                  Automating deployments with Docker and CI/CD pipelines to ensure consistent releases with minimal manual effort.
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Summary Strip -->
          <div class="pt-2 border-t-2 border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
            <span>BASED IN JAKARTA, ID</span>
            <a href="#contact" class="text-black dark:text-[#FFE600] hover:underline">CONTACT TEDDY ↗</a>
          </div>

        </div>

      </div>
    </div>

  </div>

</section>
