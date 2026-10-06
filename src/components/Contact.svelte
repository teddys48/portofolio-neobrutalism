<script lang="ts">
  import type { PersonalInfo } from '../types/portfolio';
  import GithubIcon from './icons/GithubIcon.svelte';
  import LinkedinIcon from './icons/LinkedinIcon.svelte';
  import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    Copy, 
    Check
  } from 'lucide-svelte';

  let { personalInfo }: { personalInfo: PersonalInfo } = $props();

  let subject = $state('');
  let message = $state('');
  let emailCopied = $state(false);
  let phoneCopied = $state(false);

  function copyEmail() {
    navigator.clipboard.writeText(personalInfo.email);
    emailCopied = true;
    setTimeout(() => emailCopied = false, 2000);
  }

  function copyPhone() {
    navigator.clipboard.writeText(personalInfo.phone);
    phoneCopied = true;
    setTimeout(() => phoneCopied = false, 2000);
  }

  function handleSend(e: Event) {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || 'Inquiry: Backend Engineering Opportunity')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  }
</script>

<section id="contact" class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
  
  <div class="mb-10 space-y-2">
    <div class="inline-block bg-[#FF5E97] text-black font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
      CONTACT
    </div>
    <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white flex items-center gap-3">
      <span>GET IN TOUCH</span>
      <span class="text-[#FFE600] text-2xl sm:text-4xl">★</span>
    </h2>
    <p class="text-zinc-600 dark:text-zinc-300 font-medium max-w-2xl text-sm sm:text-base">
      Open for backend engineering roles, system architecture discussions, and technical collaborations.
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    <!-- Left Column: Direct Info -->
    <div class="lg:col-span-5 space-y-4">
      
      <!-- Contact Cards -->
      <div class="bg-white dark:bg-[#151624] border-4 border-black dark:border-white shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#FFE600] p-6 space-y-5">
        
        <div class="flex items-center gap-2 bg-[#FFE600] text-black font-mono font-bold text-xs px-3 py-1 border-2 border-black">
          <span>DIRECT CONTACT DETAILS</span>
        </div>

        <!-- Email Box -->
        <div class="p-4 bg-[#FFFDF0] dark:bg-[#1C1D2E] border-2 border-black dark:border-zinc-700 space-y-2">
          <div class="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span class="flex items-center gap-1.5"><Mail class="w-4 h-4 text-[#FF5E97]" /> EMAIL</span>
            <button 
              onclick={copyEmail}
              class="text-black dark:text-white hover:text-[#00F0FF] flex items-center gap-1 cursor-pointer font-bold"
            >
              {#if emailCopied}
                <Check class="w-3.5 h-3.5 text-[#54E346]" />
                <span class="text-[#54E346] text-[10px]">COPIED</span>
              {:else}
                <Copy class="w-3.5 h-3.5" />
                <span class="text-[10px]">COPY</span>
              {/if}
            </button>
          </div>
          <a href="mailto:{personalInfo.email}" class="block font-mono font-extrabold text-base text-black dark:text-white hover:text-[#00F0FF] break-all">
            {personalInfo.email}
          </a>
        </div>

        <!-- Phone / WhatsApp Box -->
        <div class="p-4 bg-[#FFFDF0] dark:bg-[#1C1D2E] border-2 border-black dark:border-zinc-700 space-y-2">
          <div class="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span class="flex items-center gap-1.5"><Phone class="w-4 h-4 text-[#54E346]" /> PHONE / WHATSAPP</span>
            <button 
              onclick={copyPhone}
              class="text-black dark:text-white hover:text-[#00F0FF] flex items-center gap-1 cursor-pointer font-bold"
            >
              {#if phoneCopied}
                <Check class="w-3.5 h-3.5 text-[#54E346]" />
                <span class="text-[#54E346] text-[10px]">COPIED</span>
              {:else}
                <Copy class="w-3.5 h-3.5" />
                <span class="text-[10px]">COPY</span>
              {/if}
            </button>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-mono font-extrabold text-base text-black dark:text-white">
              {personalInfo.phone}
            </span>
            <a 
              href="https://wa.me/6289638947001" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-[#54E346] text-black font-mono font-black text-[11px] px-2 py-0.5 border border-black hover:-translate-y-0.5 transition-transform"
            >
              WHATSAPP ↗
            </a>
          </div>
        </div>

        <!-- Location Box -->
        <div class="p-4 bg-[#FFFDF0] dark:bg-[#1C1D2E] border-2 border-black dark:border-zinc-700 space-y-1">
          <div class="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
            <MapPin class="w-4 h-4 text-[#00F0FF]" /> LOCATION
          </div>
          <div class="font-mono font-extrabold text-base text-black dark:text-white">
            {personalInfo.location}
          </div>
        </div>

        <!-- Social Links -->
        <div class="grid grid-cols-2 gap-3 pt-2">
          <a 
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn p-3 bg-[#00F0FF] text-black font-mono font-black text-xs uppercase flex items-center justify-center gap-2"
          >
            <LinkedinIcon class="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>

          <a 
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="neo-btn p-3 bg-white dark:bg-[#25273C] text-black dark:text-white font-mono font-black text-xs uppercase flex items-center justify-center gap-2"
          >
            <GithubIcon class="w-4 h-4" />
            <span>GITHUB</span>
          </a>
        </div>

      </div>

    </div>

    <!-- Right Column: Message Form -->
    <div class="lg:col-span-7">
      <form 
        onsubmit={handleSend}
        class="bg-white dark:bg-[#151624] border-4 border-black dark:border-white shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#FFE600] p-6 sm:p-8 space-y-5"
      >
        <div class="flex items-center justify-between border-b-3 border-black pb-3">
          <div class="flex items-center gap-2">
            <span class="w-3.5 h-3.5 bg-[#FF5E97] inline-block border border-black"></span>
            <h3 class="font-mono font-black text-base uppercase text-black dark:text-white">
              SEND A MESSAGE
            </h3>
          </div>
          <span class="font-mono text-xs bg-[#FFE600] text-black px-2 py-0.5 border border-black font-bold">
            DIRECT
          </span>
        </div>

        <div class="space-y-4 font-mono text-xs">
          <div>
            <label for="contact-subject" class="block font-black uppercase text-zinc-700 dark:text-zinc-300 mb-1.5">
              SUBJECT:
            </label>
            <input 
              id="contact-subject"
              type="text" 
              bind:value={subject}
              placeholder="e.g. Backend Engineering Opportunity / Project Discussion"
              class="w-full p-3 bg-[#FFFDF0] dark:bg-[#1C1D2E] text-black dark:text-white border-2 border-black dark:border-zinc-500 font-mono text-xs sm:text-sm focus:outline-none focus:bg-[#FFE600] focus:text-black dark:focus:bg-[#FFE600] dark:focus:text-black transition-colors"
            />
          </div>

          <div>
            <label for="contact-message" class="block font-black uppercase text-zinc-700 dark:text-zinc-300 mb-1.5">
              MESSAGE:
            </label>
            <textarea 
              id="contact-message"
              rows={5}
              bind:value={message}
              placeholder="Hello Teddy, we would like to get in touch regarding..."
              class="w-full p-3 bg-[#FFFDF0] dark:bg-[#1C1D2E] text-black dark:text-white border-2 border-black dark:border-zinc-500 font-mono text-xs sm:text-sm focus:outline-none focus:bg-[#FFE600] focus:text-black dark:focus:bg-[#FFE600] dark:focus:text-black transition-colors"
            ></textarea>
          </div>
        </div>

        <div class="pt-2">
          <button 
            type="submit"
            class="neo-btn w-full py-4 bg-[#FFE600] text-black font-black font-mono text-sm uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[5px_5px_0_#000]"
          >
            <Send class="w-4 h-4 stroke-[3]" />
            <span>SEND MESSAGE</span>
          </button>
          <p class="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 text-center mt-2">
            Opens your email client to send directly to <code class="text-black dark:text-white font-bold">{personalInfo.email}</code>
          </p>
        </div>

      </form>
    </div>

  </div>

</section>
