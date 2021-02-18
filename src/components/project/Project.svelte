<script lang="ts">
  import Image from "./Image.svelte"
  import Tags from "./Tags.svelte"
  import Repository from "./Repository.svelte"
  import Heading from "./Heading.svelte"

  interface Project {
    name: string
    tags: string[]
    "short-description": string
    image: string
    repository?: string
    url?: string
  }

  export let project: Project
  export let isMiddle: boolean
  export let handleClick
  export let duration: number
</script>

<style>
  .project-container {
    @apply rounded-xl bg-white shadow-xl transition-all;
    @apply cursor-pointer hover:shadow-2xl box-border z-0;
    width: 20rem;
    height: 55vh;
  }

  .middle-project {
    @apply cursor-default hover:shadow-xl z-10;
    width: 25rem; 
    height: 75vh;
  }

  .project-contents-container {
    @apply p-5 flex flex-col justify-between h-1/2;
  }

  .project-info-container {
    @apply flex flex-col gap-y-2;
  }

  p {
    @apply mt-1 text-base;
  }
</style>

<div 
  class="project-container" 
  class:middle-project={isMiddle}
  on:click={handleClick}
  style="transition-duration: {duration}"
>
  <Image src={project.image} alt="{project.name}-image" />
  <div class="project-contents-container">

    <div class="project-contents-text">
      <Heading url={project.url}>{project.name}</Heading> 
      <p>{project["short-description"]}</p>
    </div>

    <div class="project-info-container">
      {#if project.repository}
        <Repository repository={project.repository} />
      {/if}
      
      {#if isMiddle}
        <Tags tags={project.tags} /> 
      {/if}
    </div>

  </div>
</div>