<script lang="ts">
  import { fly } from "svelte/transition"
  import ChevronLeft from "../icons/ChevronLeft.svelte"
  import ChevronRight from "../icons/ChevronRight.svelte"
  import { flip } from "svelte/animate"
  import Project from "./project/Project.svelte"

  interface Project {
    name: string
    tags: string[]
    "short-description": string
    image: string
    description?:string
    repository?: string
    url?: string
  }

  export let projects: Project[]
  projects = projects.map((project, id) => ({...project, id}))
  let projectsToShow = projects

  $: getHandleClick = (direction: "forward" | "backward") => {
    if (direction == "forward") {
      return () => {
        const newProjectsToShow = projectsToShow
        const firstProject = newProjectsToShow.splice(0, 1)[0]
        newProjectsToShow.push(firstProject)
        projectsToShow = newProjectsToShow
      }
    }

    if (direction == "backward") {
      return () => {
        const newProjectsToShow = projectsToShow
        const lastProject = newProjectsToShow.pop()
        newProjectsToShow.unshift(lastProject)
        projectsToShow = newProjectsToShow
      }
    }
  }
  $: currentProjects = projectsToShow.slice(0,3)

  const getX = (direction: "left" | "right") => direction == "left" ? -300 : 300
  const duration = 400
</script>

<style>
  .projects {
    @apply p-7 mt-2;
  }

  .projects-container {
    @apply w-10/12 mx-auto mt-8;
    @apply flex justify-between items-center;
    height: 80vh;
  }

  .navigation-icon {
    @apply cursor-pointer h-8 w-8 opacity-60 hover:opacity-100;
  }

  a {
    @apply no-underline;
  }
  
  h1 {
    @apply text-5xl font-bold text-center text-black;
  }
</style>

<div id="#projects" class="projects">
  <a href="#projects"><h1>My Projects</h1></a>
  <div class="projects-container">
    <div class="navigation-icon" on:click={getHandleClick("backward")}>
      <ChevronLeft />
    </div>
    {#each currentProjects as project, i (project.name)}
      <div 
        transition:fly={{x: getX(i === 0 ? "left" : "right"), duration }} 
        animate:flip={{duration}}
      >
        <Project 
          isMiddle={i === 1} 
          handleClick={i === 0 ? getHandleClick("backward") : i === 1 ? undefined : getHandleClick("forward")}
          {duration}
          {project}
        />
      </div>
    {/each}
    <div class="navigation-icon" on:click={getHandleClick("forward")}>
      <ChevronRight />
    </div>
  </div>
</div>