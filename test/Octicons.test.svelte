<script lang="ts">
  import { Alert16, Rows16, Rocket16, Duplicate16 } from "../types";
  import Version24 from "../types/Verified24";
  import GitPullRequestClosed16 from "../types/GitPullRequestClosed16";
  import * as Octicons from "../types";
</script>

<Alert16 class="icon" />
<Rows16 style="red" />
<Rocket16 width="20" />
<Version24 />
<Duplicate16 />
<GitPullRequestClosed16 height="20" />

{#each Object.keys(Octicons) as octicon}
  <div>
    <svelte:component this={Octicons[octicon]} />
    {octicon}
  </div>
{/each}
