<script>
	import Play from 'lucide-svelte/icons/play';
</script>

<section class="absolute inset-x-0 bottom-0">
	<header class="flex justify-end px-4 py-2 md:px-8">
		<button
			class="flex select-none items-center gap-2 rounded bg-red-700 px-4 py-2
        text-red-200 transition-colors hover:bg-red-800"
		>
			<Play />
			Run
		</button>
	</header>
</section>
