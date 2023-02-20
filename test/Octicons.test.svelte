<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import {
    Accessibility16,
    Alert16,
    Rows16,
    Rocket16,
    KeyAsterisk16,
    Duplicate16,
    Stack24,
    Iterations16,
    CodeOfConduct16,
    FeedForked16,
    Cloud16,
    FileRemoved16,
    Copilot16,
    Cache16,
    ShieldSlash16,
    AlertFill16,
    ArrowDownLeft16,
    ClockFill16,
    Goal16,
    SparkleFill16,
    GitMergeQueue24,
  } from "../lib";
  import Version24 from "../lib/Verified24.svelte";
  import GitPullRequestClosed16 from "../lib/GitPullRequestClosed16.svelte";
  import * as Octicons from "../lib";

  let icon: typeof SvelteComponent = FeedForked16;
</script>

{icon}

<Accessibility16 fill="red" />
<Alert16 class="icon" />
<Rows16 style="color: red" />
<Rocket16 width="20" />
<Version24 />
<GitPullRequestClosed16 height="20" />
<KeyAsterisk16 />
<Duplicate16 />
<Stack24 />
<Iterations16 />
<CodeOfConduct16 />
<Cloud16 />
<FileRemoved16 />
<Copilot16 />
<Cache16 />
<ShieldSlash16 />
<AlertFill16 />
<ArrowDownLeft16 />
<ClockFill16 />
<Goal16 />
<SparkleFill16 />
<GitMergeQueue24 />

{#each Object.keys(Octicons) as octicon}
  <div>
    <svelte:component this={Octicons[octicon]} />
    {octicon}
  </div>
{/each}
