<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="h-screen w-screen bg-neutral-800">
	{@render children()}
</div>
