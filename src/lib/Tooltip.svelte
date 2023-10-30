<script lang="ts">
	import { fade, fly } from "svelte/transition";

	export let title: string;
	let isHovered = false;
	let x: number;
	let y: number;
	
	function mouseOver(event: MouseEvent) {
		isHovered = true;
		x = event.pageX + 10;
		y = event.pageY + 10;
	}
	function mouseMove(event: MouseEvent) {
		x = event.pageX + 10;
		y = event.pageY + 10;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:mouseover={mouseOver}
  	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
	>
	<slot />
</div>

{#if isHovered}
	<div out:fly={{ duration: 300, y: -80 }} in:fly={{ duration: 300, y: -20 }} style="top: {y}px; left: {x}px;" class="tooltip">{title}</div>
{/if}

<style lang="postcss">
	.tooltip {
		@apply absolute border-2 border-white dark:bg-neutral-800 bg-neutral-100 shadow-md dark:shadow-gray-400 shadow-gray-800 px-2 py-1;
		z-index: 1;
	}
</style>
