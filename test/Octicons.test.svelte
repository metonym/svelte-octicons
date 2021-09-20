<script lang="ts">
  import {
    Alert16,
    Rows16,
    Rocket16,
    KeyAsterisk16,
    Duplicate16,
    Stack24,
  } from "../lib";
  import Version24 from "../lib/Verified24.svelte";
  import GitPullRequestClosed16 from "../lib/GitPullRequestClosed16.svelte";
  import * as Octicons from "../lib";
</script>

<!-- svelte-ignore missing-declaration -->
<Alert16 class="icon" />
<!-- svelte-ignore missing-declaration -->
<Rows16 style="red" />
<!-- svelte-ignore missing-declaration -->
<Rocket16 width="20" />
<!-- svelte-ignore missing-declaration -->
<Version24 />
<!-- svelte-ignore missing-declaration -->
<GitPullRequestClosed16 height="20" />
<!-- svelte-ignore missing-declaration -->
<KeyAsterisk16 />
<!-- svelte-ignore missing-declaration -->
<Duplicate16 />
<!-- svelte-ignore missing-declaration -->
<Stack24 />

{#each Object.keys(Octicons) as octicon}
  <div>
    <svelte:component this={Octicons[octicon]} />
    {octicon}
  </div>
{/each}
