<script lang="ts">
  import {
    Alert16,
    Rows16,
    Rocket16,
    Duplicate16,
    KeyAsterisk16,
  } from "../lib";
  import Version24 from "../lib/Verified24.svelte";
  import GitPullRequestClosed16 from "../lib/GitPullRequestClosed16.svelte";
  import * as Octicons from "../lib";
</script>

<Alert16 class="icon" />
<Rows16 style="red" />
<Rocket16 width="20" />
<Version24 />
<Duplicate16 />
<GitPullRequestClosed16 height="20" />
<KeyAsterisk16 />

{#each Object.keys(Octicons) as octicon}
  <div>
    <svelte:component this={Octicons[octicon]} />
    {octicon}
  </div>
{/each}
