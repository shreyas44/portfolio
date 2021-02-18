<script lang="ts">
  import Tag from "./Tag.svelte";

  export let tags: string[]
</script>

<style>
  div {
    @apply flex flex-wrap gap-1;
  }
</style>

<div>
  {#each tags as tag}
    <Tag {tag} />
  {/each}
</div>