<script>
  import "../app.css";
  import { navigating } from "$app/stores";
  import PageLoadingBar from "$lib/components/PageLoadingBar.svelte";
</script>

{#if $navigating}
  <div>
    <PageLoadingBar />
  </div>
{/if}

<slot />
