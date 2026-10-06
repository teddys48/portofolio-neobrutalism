<script lang="ts">
  const items = [
    "GO (FIBER)",
    "NODE.JS",
    "RESTFUL APIS",
    "SAP INTEGRATION",
    "PROMETHEUS & GRAFANA",
    "LOKI & PROMTAIL",
    "RABBITMQ",
    "POSTGRESQL",
    "REDIS CACHING",
    "DOCKER DEPLOYMENTS",
    "CI/CD AUTOMATION",
    "LARAVEL PHP",
    "HIGH AVAILABILITY",
    "DISTRIBUTED SYSTEMS"
  ];
</script>

<div class="relative w-full overflow-hidden bg-[#FFE600] border-y-3 border-black dark:border-white py-3 shadow-[0_4px_0_#000] dark:shadow-[0_4px_0_#fff]">
  <div class="animate-marquee flex items-center whitespace-nowrap">
    {#each [1, 2] as _}
      {#each items as item, idx}
        <div class="flex items-center mx-4 gap-3">
          <span class="inline-block px-3 py-1 font-mono font-black text-xs md:text-sm tracking-wider uppercase bg-black text-[#FFE600] border-2 border-black rotate-[-1deg] shadow-[2px_2px_0_#FFE600]">
            {item}
          </span>
          <span class="text-black text-xl font-black">★</span>
        </div>
      {/each}
    {/each}
  </div>
</div>
