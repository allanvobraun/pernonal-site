<script>

  import { onMount } from "svelte";
  let rndInt = 0;
  console.log("oi");

  onMount(() => {
    console.log("oi");
    setInterval(() => {
      rndInt = Math.floor(Math.random() * 999) + 1;
    }, 100);
  });
</script>

<h1>
  OI
  {rndInt}
</h1>
