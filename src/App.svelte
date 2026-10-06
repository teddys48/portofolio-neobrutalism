<script lang="ts">
  import { defaultPortfolioData } from './data/portfolioData';
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import Marquee from './components/Marquee.svelte';
  import Experience from './components/Experience.svelte';
  import Skills from './components/Skills.svelte';
  import ProjectsGitHub from './components/ProjectsGitHub.svelte';
  import EducationCertifications from './components/EducationCertifications.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';
</script>

<div class="min-h-screen bg-[#FFFDF0] dark:bg-[#0C0D15] text-[#121212] dark:text-[#F3F4F6] transition-colors duration-200">
  <!-- Top Navigation -->
  <Navbar />

  <!-- Hero Section -->
  <Hero personalInfo={defaultPortfolioData.personalInfo} />

  <!-- Infinite Strip Marquee -->
  <Marquee />

  <!-- Experience Section -->
  <Experience experiences={defaultPortfolioData.experiences} />

  <!-- Skills & Architecture Matrix -->
  <Skills skillCategories={defaultPortfolioData.skillCategories} />

  <!-- GitHub Projects by Page Section -->
  <ProjectsGitHub />

  <!-- Education & Certifications Bento -->
  <EducationCertifications 
    education={defaultPortfolioData.education} 
    certifications={defaultPortfolioData.certifications} 
  />

  <!-- Contact & Inquiry Dispatcher -->
  <Contact personalInfo={defaultPortfolioData.personalInfo} />

  <!-- Footer -->
  <Footer personalInfo={defaultPortfolioData.personalInfo} />
</div>
