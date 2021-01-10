<script lang="ts">
  import { Alert16, Octoface16, Rocket16 } from "./types";
  import Version24 from "./types/Verified24";
  import * as Octicons from "./types";
</script>

<Alert16 class="icon" />
<Octoface16 style="red" />
<Rocket16 width="20" />
<Version24 />

{#each Object.keys(Octicons) as octicon}
  <div>
    <svelte:component this={Octicons[octicon]} />
    {octicon}
  </div>
{/each}
