<script lang="ts">
  import type { PersonalInfo } from '../types/portfolio';
  import GithubIcon from './icons/GithubIcon.svelte';
  import LinkedinIcon from './icons/LinkedinIcon.svelte';
  import { 
    Mail, 
    Phone, 
    MapPin, 
    ArrowDownRight, 
    Cpu, 
    Activity, 
    Server, 
    Layers,
    CheckCircle2
  } from 'lucide-svelte';

  let { personalInfo }: { personalInfo: PersonalInfo } = $props();

  let uptimeSeconds = $state(438290);
  $effect(() => {
    const interval = setInterval(() => {
      uptimeSeconds += 1;
    }, 1000);
    return () => clearInterval(interval);
  });

  const uptimeFormatted = $derived(() => {
    const days = Math.floor(uptimeSeconds / 86400);
    const hours = Math.floor((uptimeSeconds % 86400) / 3600);
    const mins = Math.floor((uptimeSeconds % 3600) / 60);
    const secs = uptimeSeconds % 60;
    return `${days}d ${hours}h ${mins}m ${secs}s`;
  });
</script>

<section class="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
  
  <!-- Neo-brutalist decorative background elements -->
  <div class="absolute -top-12 -right-12 w-64 h-64 bg-[#FFE600] rounded-none rotate-12 -z-10 border-4 border-black opacity-30 dark:opacity-10 pointer-events-none"></div>
  <div class="absolute bottom-4 -left-12 w-48 h-48 bg-[#00F0FF] rounded-none -rotate-6 -z-10 border-4 border-black opacity-25 dark:opacity-10 pointer-events-none"></div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    <!-- Left Column: Personal Brand & Intro -->
    <div class="lg:col-span-7 space-y-6">
      
      <!-- Eyebrow Badge Pill -->
      <div class="inline-flex items-center gap-2 bg-[#00F0FF] text-black font-mono font-extrabold text-xs px-3.5 py-1.5 border-3 border-black dark:border-white shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
        <span class="w-2.5 h-2.5 rounded-full bg-black animate-ping"></span>
        <span>PRODUCTION-GRADE DISTRIBUTED SYSTEMS</span>
      </div>

      <!-- Main Brutalist Headline -->
      <div class="space-y-2">
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-black dark:text-white">
          {personalInfo.name}
        </h1>
        <div class="flex flex-wrap items-center gap-3 pt-1">
          <span class="inline-block bg-[#FFE600] text-black font-mono font-black text-xl sm:text-2xl px-3 py-1 border-3 border-black shadow-[3px_3px_0_#000] -rotate-1">
            {personalInfo.role.toUpperCase()}
          </span>
          <span class="bg-[#54E346] text-black font-mono font-bold text-xs sm:text-sm px-2.5 py-1 border-2 border-black rotate-1 shadow-[2px_2px_0_#000]">
            ★ 4+ YEARS EXPERIENCE
          </span>
        </div>
      </div>

      <!-- Bio / Summary -->
      <p class="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed border-l-4 border-black dark:border-[#FFE600] pl-4 bg-white/80 dark:bg-[#181926]/90 p-4 border-2 border-black dark:border-white shadow-[5px_5px_0_#000] dark:shadow-[5px_5px_0_#FFE600]">
        {personalInfo.summary}
      </p>

      <!-- Quick Info Pills (Location, Email, Phone) -->
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
          <span>EXPLORE GITHUB PROJECTS</span>
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

    <!-- Right Column: Interactive Neobrutalist Backend Service Monitor -->
    <div class="lg:col-span-5 w-full">
      <div class="bg-white dark:bg-[#151624] border-4 border-black dark:border-white shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#FFE600] overflow-hidden">
        
        <!-- Terminal Header Bar -->
        <div class="bg-black text-white px-4 py-2.5 border-b-3 border-black flex items-center justify-between font-mono text-xs font-bold">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#FF5E97] border border-black inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-[#FFE600] border border-black inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-[#54E346] border border-black inline-block"></span>
            <span class="ml-2 text-[#FFE600] tracking-wide">SYSTEM-NODE://TEDDY-PROD-01</span>
          </div>
          <span class="bg-[#54E346] text-black text-[10px] px-1.5 py-0.5 font-black uppercase">LIVE</span>
        </div>

        <!-- System Vitals Display -->
        <div class="p-5 space-y-4 font-mono">
          
          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700">
              <div class="text-zinc-500 dark:text-zinc-400 font-bold flex items-center gap-1.5 text-[11px]">
                <Cpu class="w-3.5 h-3.5 text-[#FF5E97]" /> CORE ENGINE
              </div>
              <div class="font-extrabold text-sm text-black dark:text-white mt-1">Go 1.23 + Fiber</div>
              <div class="text-[10px] text-[#54E346] font-bold">● High Concurrency</div>
            </div>

            <div class="p-3 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700">
              <div class="text-zinc-500 dark:text-zinc-400 font-bold flex items-center gap-1.5 text-[11px]">
                <Activity class="w-3.5 h-3.5 text-[#00F0FF]" /> OBSERVABILITY
              </div>
              <div class="font-extrabold text-sm text-black dark:text-white mt-1">Grafana + Loki</div>
              <div class="text-[10px] text-[#00F0FF] font-bold">● Promtail Active</div>
            </div>

            <div class="p-3 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700">
              <div class="text-zinc-500 dark:text-zinc-400 font-bold flex items-center gap-1.5 text-[11px]">
                <Layers class="w-3.5 h-3.5 text-[#FFE600]" /> ENTERPRISE ERP
              </div>
              <div class="font-extrabold text-sm text-black dark:text-white mt-1">SAP Connector</div>
              <div class="text-[10px] text-[#54E346] font-bold">● RFC Sync Online</div>
            </div>

            <div class="p-3 bg-[#FFFDF0] dark:bg-[#1E1F30] border-2 border-black dark:border-zinc-700">
              <div class="text-zinc-500 dark:text-zinc-400 font-bold flex items-center gap-1.5 text-[11px]">
                <Server class="w-3.5 h-3.5 text-[#54E346]" /> UPTIME
              </div>
              <div class="font-extrabold text-sm text-black dark:text-white mt-1">{uptimeFormatted()}</div>
              <div class="text-[10px] text-zinc-500 dark:text-zinc-400">Availability: 99.98%</div>
            </div>
          </div>

          <!-- Architecture Checklist -->
          <div class="space-y-1.5 pt-1 text-xs">
            <div class="font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 text-[11px] mb-1">
              PROVEN PRODUCTION WORKFLOWS:
            </div>
            <div class="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
              <CheckCircle2 class="w-4 h-4 text-[#54E346] shrink-0" />
              <span>CI/CD Automation Pipelines (Zero-Downtime Release)</span>
            </div>
            <div class="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
              <CheckCircle2 class="w-4 h-4 text-[#54E346] shrink-0" />
              <span>Containerized Multi-Service Deployment (Docker Compose)</span>
            </div>
            <div class="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
              <CheckCircle2 class="w-4 h-4 text-[#54E346] shrink-0" />
              <span>PostgreSQL & Redis Caching Layer Optimization</span>
            </div>
          </div>

          <!-- Simulated Log Feed -->
          <div class="bg-black text-[#54E346] p-3 border-2 border-black text-[11px] leading-relaxed font-mono space-y-1 rounded-none overflow-x-auto">
            <div class="text-zinc-500">// Real-time service logs:</div>
            <div><span class="text-[#FFE600]">[INFO]</span> <span>fiber.router:</span> GET /health 200 (0.42ms)</div>
            <div><span class="text-[#00F0FF]">[SYNC]</span> <span>sap.adapter:</span> BAPI entity batch synced (42 records)</div>
            <div><span class="text-[#54E346]">[METR]</span> <span>prom.export:</span> 1,280 samples pushed to Prometheus</div>
            <div><span class="text-[#FF5E97]">[AMQP]</span> <span>rabbit.worker:</span> consumer ack queue='orders' (prefetch=20)</div>
          </div>

        </div>

      </div>
    </div>

  </div>

</section>
