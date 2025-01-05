<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="h-screen w-screen bg-slate-800 text-slate-200">
	{@render children()}
</div>
