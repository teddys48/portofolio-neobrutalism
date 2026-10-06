<script lang="ts">
  import { onMount } from 'svelte';
  import type { GithubRepo } from '../types/portfolio';
  import { fallbackGithubRepos } from '../data/portfolioData';
  import GithubIcon from './icons/GithubIcon.svelte';
  import { 
    Star, 
    GitFork, 
    ExternalLink, 
    Copy, 
    Check, 
    Search, 
    Filter, 
    ChevronLeft, 
    ChevronRight,
    Terminal,
    RefreshCw,
    FolderGit2
  } from 'lucide-svelte';

  let allRepos = $state<GithubRepo[]>(fallbackGithubRepos);
  let isLoading = $state(true);
  let isLive = $state(false);
  let errorMsg = $state<string | null>(null);

  // Search & Filter & Sort state
  let searchQuery = $state('');
  let selectedLanguage = $state('ALL');
  let sortBy = $state<'updated' | 'stars' | 'name'>('updated');
  
  // Pagination state ("by page github")
  let currentPage = $state(1);
  let pageSize = $state(6);

  // Copied feedback map
  let copiedId = $state<number | null>(null);

  async function fetchGithubRepos() {
    isLoading = true;
    errorMsg = null;
    try {
      const res = await fetch('https://api.github.com/users/teddys48/repos?sort=updated&per_page=100');
      if (!res.ok) {
        throw new Error(`GitHub API HTTP ${res.status}`);
      }
      const data: GithubRepo[] = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        allRepos = data;
        isLive = true;
      } else {
        allRepos = fallbackGithubRepos;
      }
    } catch (err: any) {
      console.warn('Falling back to curated repo catalog:', err);
      errorMsg = err?.message || 'Rate limit / Offline';
      allRepos = fallbackGithubRepos;
      isLive = false;
    } finally {
      isLoading = false;
    }
  }

  onMount(() => {
    fetchGithubRepos();
  });

  // Filtered repositories derived rune
  const filteredRepos = $derived(() => {
    return allRepos.filter(repo => {
      // Language filter
      if (selectedLanguage !== 'ALL') {
        if (selectedLanguage === 'Go' && repo.language !== 'Go') return false;
        if (selectedLanguage === 'TypeScript/JS' && repo.language !== 'TypeScript' && repo.language !== 'JavaScript') return false;
        if (selectedLanguage === 'PHP' && repo.language !== 'PHP') return false;
        if (selectedLanguage === 'Rust' && repo.language !== 'Rust') return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = repo.name.toLowerCase().includes(query);
        const matchDesc = (repo.description || '').toLowerCase().includes(query);
        const matchTopic = repo.topics ? repo.topics.some(t => t.toLowerCase().includes(query)) : false;
        if (!matchName && !matchDesc && !matchTopic) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'stars') {
        return (b.stargazers_count || 0) - (a.stargazers_count || 0);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      // default: updated
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
  });

  // Pagination derived calculations
  const totalItems = $derived(filteredRepos().length);
  const totalPages = $derived(Math.max(1, Math.ceil(totalItems / pageSize)));
  
  // Page slice
  const paginatedRepos = $derived(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRepos().slice(start, start + pageSize);
  });

  // Reset page when search or language changes
  $effect(() => {
    searchQuery;
    selectedLanguage;
    sortBy;
    currentPage = 1;
  });

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      // Smooth scroll to top of project section
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  async function copyCloneCommand(repo: GithubRepo) {
    const cloneCmd = `git clone ${repo.clone_url || `https://github.com/${repo.full_name}.git`}`;
    try {
      await navigator.clipboard.writeText(cloneCmd);
      copiedId = repo.id;
      setTimeout(() => {
        if (copiedId === repo.id) copiedId = null;
      }, 2000);
    } catch {
      // fallback
    }
  }

  function getLangColor(lang: string | null): string {
    switch (lang) {
      case 'Go': return 'bg-[#00ADD8] text-white';
      case 'TypeScript': return 'bg-[#3178C6] text-white';
      case 'JavaScript': return 'bg-[#F7DF1E] text-black';
      case 'PHP': return 'bg-[#777BB4] text-white';
      case 'Rust': return 'bg-[#DEA584] text-black';
      case 'HTML': return 'bg-[#E34F26] text-white';
      default: return 'bg-zinc-800 text-white';
    }
  }
</script>

<section id="projects" class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
  
  <!-- Section Title & Meta Header -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
    <div class="space-y-2">
      <div class="inline-block bg-[#54E346] text-black font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
        // 03. OPEN SOURCE & LABS
      </div>
      <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black dark:text-white flex items-center gap-3">
        <span>PROJECTS BY GITHUB PAGE</span>
        <span class="text-[#00F0FF] text-2xl sm:text-4xl">★</span>
      </h2>
      <p class="text-zinc-600 dark:text-zinc-300 font-medium max-w-2xl text-sm sm:text-base">
        Browse open-source repositories by page, with live sync to GitHub API (<code class="bg-[#FFE600] text-black px-1.5 py-0.5 border border-black font-mono font-bold text-xs">@teddys48</code>), language filters, and instant clone shortcuts.
      </p>
    </div>

    <!-- Live Status Pill / Refresher -->
    <div class="flex items-center gap-2">
      <div class="inline-flex items-center gap-2 bg-white dark:bg-[#1E1F30] text-black dark:text-white px-3.5 py-2 border-2 border-black dark:border-white shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#FFE600] font-mono text-xs font-bold">
        <span class="w-2.5 h-2.5 rounded-full {isLive ? 'bg-[#54E346] animate-pulse-fast' : 'bg-[#FF8A00]'}"></span>
        <span>{isLive ? 'GITHUB API: LIVE SYNC' : 'ARCHIVE REPOSITORIES'}</span>
      </div>
      <button 
        onclick={fetchGithubRepos} 
        disabled={isLoading}
        title="Refresh repositories from GitHub"
        class="neo-btn p-2 bg-[#FFE600] text-black cursor-pointer disabled:opacity-50"
      >
        <RefreshCw class="w-4 h-4 {isLoading ? 'animate-spin' : ''}" />
      </button>
    </div>
  </div>

  <!-- Neobrutalist Controls Bar: Search, Language Filter, Sorting, Items per page -->
  <div class="bg-white dark:bg-[#151624] border-3 border-black dark:border-white shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#FFE600] p-4 sm:p-6 mb-8 space-y-4">
    
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      
      <!-- Search Input -->
      <div class="md:col-span-6 relative">
        <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input 
          type="text" 
          bind:value={searchQuery}
          placeholder="Search by repo name, tech, or topic..."
          class="w-full pl-10 pr-4 py-2.5 bg-[#FFFDF0] dark:bg-[#1C1D2E] text-black dark:text-white border-2 border-black dark:border-zinc-500 font-mono text-xs sm:text-sm focus:outline-none focus:bg-[#FFE600] focus:text-black dark:focus:bg-[#FFE600] dark:focus:text-black transition-colors"
        />
        {#if searchQuery}
          <button 
            onclick={() => searchQuery = ''}
            class="absolute right-3 top-1/2 -translate-y-1/2 font-mono font-bold text-xs bg-black text-white px-1.5 py-0.5"
          >
            ✕
          </button>
        {/if}
      </div>

      <!-- Sorting Select -->
      <div class="md:col-span-3">
        <select 
          bind:value={sortBy}
          class="w-full py-2.5 px-3 bg-[#FFFDF0] dark:bg-[#1C1D2E] text-black dark:text-white border-2 border-black dark:border-zinc-500 font-mono text-xs sm:text-sm font-bold focus:outline-none cursor-pointer"
        >
          <option value="updated">SORT: RECENTLY UPDATED</option>
          <option value="stars">SORT: MOST STARS</option>
          <option value="name">SORT: ALPHABETICAL (A-Z)</option>
        </select>
      </div>

      <!-- Per Page Selector -->
      <div class="md:col-span-3">
        <select 
          bind:value={pageSize}
          class="w-full py-2.5 px-3 bg-[#FFFDF0] dark:bg-[#1C1D2E] text-black dark:text-white border-2 border-black dark:border-zinc-500 font-mono text-xs sm:text-sm font-bold focus:outline-none cursor-pointer"
        >
          <option value={6}>PAGE SIZE: 6 REPOS</option>
          <option value={9}>PAGE SIZE: 9 REPOS</option>
          <option value={12}>PAGE SIZE: 12 REPOS</option>
        </select>
      </div>

    </div>

    <!-- Language Filter Pills -->
    <div class="flex flex-wrap items-center gap-2 pt-2 border-t-2 border-black/10 dark:border-white/10">
      <span class="font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400 mr-2 flex items-center gap-1">
        <Filter class="w-3.5 h-3.5" /> STACK:
      </span>
      {#each ['ALL', 'Go', 'TypeScript/JS', 'PHP', 'Rust'] as lang}
        <button 
          onclick={() => selectedLanguage = lang}
          class="font-mono font-bold text-xs px-3 py-1.5 border-2 border-black transition-all cursor-pointer {selectedLanguage === lang ? 'bg-[#FFE600] text-black shadow-[3px_3px_0_#000] -translate-y-0.5 font-black' : 'bg-white dark:bg-[#1E1F30] text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'}"
        >
          {lang === 'ALL' ? 'ALL REPOSITORIES' : lang.toUpperCase()}
        </button>
      {/each}
    </div>

  </div>

  <!-- Repository Results Meta & Pagination Indicators -->
  <div class="flex flex-wrap items-center justify-between gap-3 mb-6 font-mono text-xs font-bold">
    <div class="text-zinc-600 dark:text-zinc-400">
      SHOWING <span class="text-black dark:text-white font-black">{totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1}</span> - <span class="text-black dark:text-white font-black">{Math.min(currentPage * pageSize, totalItems)}</span> OF <span class="text-black dark:text-[#FFE600] font-black">{totalItems}</span> REPOSITORIES
    </div>
    
    <div class="flex items-center gap-2">
      <span class="bg-[#00F0FF] text-black px-2 py-0.5 border border-black shadow-[2px_2px_0_#000]">
        PAGE {currentPage} OF {totalPages}
      </span>
    </div>
  </div>

  <!-- Repositories Grid -->
  {#if paginatedRepos().length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {#each paginatedRepos() as repo (repo.id)}
        <div class="bg-white dark:bg-[#151624] border-3 border-black dark:border-white shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#FFE600] flex flex-col justify-between group hover:-translate-y-1 transition-all">
          
          <!-- Card Header -->
          <div class="p-5 space-y-3">
            
            <div class="flex items-start justify-between gap-3">
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                class="font-mono font-black text-lg sm:text-xl text-black dark:text-white hover:text-[#00F0FF] dark:hover:text-[#FFE600] transition-colors flex items-center gap-1.5 break-all group-hover:underline underline-offset-4 decoration-2"
              >
                <FolderGit2 class="w-5 h-5 shrink-0 text-[#FF5E97]" />
                <span>{repo.name}</span>
              </a>

              {#if repo.language}
                <span class="shrink-0 font-mono text-[10px] font-black px-2 py-0.5 border border-black shadow-[2px_2px_0_#000] {getLangColor(repo.language)}">
                  {repo.language}
                </span>
              {/if}
            </div>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed min-h-[48px] line-clamp-3">
              {repo.description || "Production-tested software implementation with Docker and microservice patterns."}
            </p>

            <!-- Topic Badges -->
            {#if repo.topics && repo.topics.length > 0}
              <div class="flex flex-wrap gap-1.5 pt-1">
                {#each repo.topics.slice(0, 4) as topic}
                  <span class="bg-[#FFFDF0] dark:bg-[#1E1F30] text-black dark:text-zinc-300 font-mono text-[10px] font-bold px-2 py-0.5 border border-black dark:border-zinc-600">
                    #{topic}
                  </span>
                {/each}
              </div>
            {/if}

          </div>

          <!-- Card Footer & Quick Actions -->
          <div class="bg-zinc-50 dark:bg-[#1C1D2E] border-t-3 border-black dark:border-white p-4 space-y-3">
            
            <!-- Stats Row -->
            <div class="flex items-center justify-between font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400">
              <div class="flex items-center gap-3">
                <span class="flex items-center gap-1">
                  <Star class="w-3.5 h-3.5 text-[#FFE600] fill-[#FFE600]" />
                  <span>{repo.stargazers_count}</span>
                </span>
                <span class="flex items-center gap-1">
                  <GitFork class="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>{repo.forks_count}</span>
                </span>
              </div>
              <span class="text-[10px] text-zinc-500">
                UPDATED {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>

            <!-- Button Bar -->
            <div class="grid grid-cols-2 gap-2 pt-1">
              <a 
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                class="neo-btn inline-flex items-center justify-center gap-1.5 bg-[#FFE600] text-black font-mono font-black text-xs py-2 uppercase"
              >
                <span>OPEN REPO</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>

              <button 
                onclick={() => copyCloneCommand(repo)}
                type="button"
                class="neo-btn inline-flex items-center justify-center gap-1.5 bg-white dark:bg-[#25273C] text-black dark:text-white font-mono font-black text-xs py-2 uppercase cursor-pointer"
              >
                {#if copiedId === repo.id}
                  <Check class="w-3.5 h-3.5 text-[#54E346]" />
                  <span class="text-[#54E346]">COPIED!</span>
                {:else}
                  <Copy class="w-3.5 h-3.5" />
                  <span>GIT CLONE</span>
                {/if}
              </button>
            </div>

          </div>

        </div>
      {/each}
    </div>
  {:else}
    <!-- Empty State -->
    <div class="bg-white dark:bg-[#151624] border-4 border-black dark:border-white shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#FFE600] p-12 text-center space-y-4 mb-10">
      <div class="w-16 h-16 bg-[#FF5E97] text-black border-3 border-black mx-auto flex items-center justify-center shadow-[4px_4px_0_#000]">
        <Terminal class="w-8 h-8" />
      </div>
      <h3 class="text-2xl font-black uppercase text-black dark:text-white">NO MATCHING REPOSITORIES FOUND</h3>
      <p class="text-zinc-600 dark:text-zinc-300 font-mono text-sm max-w-md mx-auto">
        No projects matched the search criteria "{searchQuery}" with filter "{selectedLanguage}".
      </p>
      <button 
        onclick={() => { searchQuery = ''; selectedLanguage = 'ALL'; }}
        class="neo-btn inline-block bg-[#FFE600] text-black font-black font-mono text-xs uppercase px-5 py-2.5 cursor-pointer"
      >
        RESET ALL FILTERS
      </button>
    </div>
  {/if}

  <!-- Neobrutalist Pagination Bar -->
  {#if totalPages > 1}
    <div class="bg-white dark:bg-[#151624] border-3 border-black dark:border-white shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#FFE600] p-4 flex flex-wrap items-center justify-between gap-4 font-mono font-bold">
      
      <!-- Prev Button -->
      <button 
        onclick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        class="neo-btn px-4 py-2 bg-white dark:bg-[#1C1D2E] text-black dark:text-white text-xs uppercase flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronLeft class="w-4 h-4 stroke-[3]" />
        <span>PREV PAGE</span>
      </button>

      <!-- Numeric Page Buttons -->
      <div class="flex flex-wrap items-center gap-1.5">
        {#each Array.from({ length: totalPages }, (_, i) => i + 1) as pageNum}
          <button 
            onclick={() => goToPage(pageNum)}
            class="w-9 h-9 border-2 border-black font-mono font-black text-xs transition-transform cursor-pointer {currentPage === pageNum ? 'bg-[#FFE600] text-black shadow-[3px_3px_0_#000] -translate-y-0.5' : 'bg-white dark:bg-[#1C1D2E] text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'}"
          >
            {pageNum}
          </button>
        {/each}
      </div>

      <!-- Next Button -->
      <button 
        onclick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        class="neo-btn px-4 py-2 bg-[#FFE600] text-black text-xs uppercase flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <span>NEXT PAGE</span>
        <ChevronRight class="w-4 h-4 stroke-[3]" />
      </button>

    </div>
  {/if}

</section>
