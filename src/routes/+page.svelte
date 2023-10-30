<script lang="ts" async>
	import Tooltip from '$lib/Tooltip.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { base } from "$app/paths";
	import { OnMount, wait } from "fractils";
	import { onMount } from 'svelte';

	// https://icon-sets.iconify.design/fa6-brands/discord/
	// https://github.com/unplugin/unplugin-icons/blob/main/examples/sveltekit/src/routes/%2Bpage.svelte#L4
	import Github from "~icons/fa6-brands/github-alt"

	const in_picture = 0.7;
	const out_picture = 1.2;

	let classes: HTMLCollectionOf<HTMLElement>;	
	onMount(() => {
		classes = document.getElementsByClassName("images") as any;
		setTimeout(() => { highlightImages(in_picture, out_picture) }, 1000);
	})
	let clock = {
		hour: 0,
		minute: 0,
		second: 0,
	};
	let hover_message = "";
	const quotes: string[] = [
		"Passion are embers of the soul, work is its air.",
		"I hope you a very nice day.",
		"Do not drink alcohol!",
		"Quality > Quantity for artists, the reverse is true for anything else paid."
	];

	async function highlightImages(in_multiplier: number = 1, out_multiplier: number = 1) {
		for (let image of classes) {
			image.classList.remove("alice-filter")
			await wait(100 * in_multiplier);
		}
		for (let image of classes) {
			await wait(100 * out_multiplier);
			image.classList.add("alice-filter")
		}
	}

	function random(min: number, max: number) {
		return Math.floor(
    		Math.random() * (max - min) + min
		)
	}
	function updateClock(): typeof clock {
		const date = new Date();
		return {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds(),
		}
	}
	function padInTime(time: number) {
		return time < 10 ? `0${time}` : time.toString();
	}

	let quote = quotes[random(0, quotes.length)];
	setInterval(() => {
		const date = new Date();
		clock = updateClock();
	}, 1000)
	setInterval(() => {
		quote = quotes[random(0, quotes.length)];
	}, 5000)
</script>

<OnMount>

<div in:fade={{ delay: 100 }} class="flex flex-row my-10 gap-10 h-full justify-center dark:text-neutral-200">
	<div class="flex flex-col justify-center dyn-border text-center p-5 my-5 gap-3 mx-2 w-96">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img on:click={() => { highlightImages(in_picture, out_picture) }} in:fade={{ delay: 300 }} class="images alice-filter" src="{base}/images/comfort.webp" alt="">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img on:click={() => { highlightImages(in_picture, out_picture) }} in:fade={{ delay: 500 }} class="images alice-filter" src="{base}/images/shrineinwinter.webp" alt="">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img on:click={() => { highlightImages(in_picture, out_picture) }} in:fade={{ delay: 700 }} class="images alice-filter" src="{base}/images/cherryblossoms.webp" alt="">
	</div>
	<div class="flex flex-col justify-center text-center py-5 px-3">
		<img class="icon hover:-translate-y-6 hover:-rotate-6 transition-transform ease-in-out duration-500" src="{base}/images/tenshihat.png" alt="Tenshi Hinanawi's Hat" />
		<div class="relative flex flex-row justify-center h-12">
			<div class="relative w-1/3 flex flex-row justify-center">
				{#key clock.hour}
					<h1 
						class="absolute" 
						in:fly={{ y: -70, duration: 1000 }}
						out:fly={{ y: 70, duration: 2000 }}
					>{padInTime(clock.hour)}</h1>
				{/key}
			</div>
			<h1>:</h1>
			<div class="relative w-1/3 flex flex-row justify-center">
				{#key clock.minute}
					<h1 
						class="absolute" 
						in:fly={{ y: -50, duration: 1000 }}
						out:fly={{ y: 50, duration: 2000 }}
					>{padInTime(clock.minute)}</h1>
				{/key}
			</div>
			<h1>:</h1>
			<div class="relative w-1/3 flex flex-row justify-center">
				{#key clock.second}
					<h1 
						class="absolute"
						transition:fade
					>{padInTime(clock.second)}</h1>
				{/key}
			</div>
		</div>
	</div>
	<div class="flex flex-col justify-center text-center gap-3 dyn-border w-72 my-5 mx-2 p-2">	
		<div class="h-1/3">
			
		</div>
		<div class="flex flex-col justify-center items-center h-1/3">
			<button 
				class="relative flex flex-row justify-center" 
				on:click={ () => { quote = quotes[random(0, quotes.length)] } }
			>
			{#key quote}
				<div 
					class="absolute bottom-0 w-60 px-5" 
					in:fade={{ duration: 300, delay: 100 }} 
					out:fade={{ duration: 100 }}
				>
					<p>{quote}</p>
				</div>
			{/key}
			</button>
			<div in:fade={{ duration: 300, delay: 1000 }}>
				<p class="text-sm opacity-30 translate-x-10 mt-1">- Allice</p>
			</div>
		</div>
		<div class="flex flex-col justify-center items-center h-1/3">
			<Tooltip title="Github">
				<a href="https://github.com/DoormatIka/homepage" target="_blank">
					<Github class="text-2xl opacity-40 hover:opacity-100 hover:text-blue-300 transition-colors duration-300" />
				</a>
			</Tooltip>
		</div>
	</div>
</div>
	
</OnMount>



<style lang="postcss">
	.images {
		@apply transition ease-in duration-150 h-1/3 w-auto object-cover;
	}
	.alice-filter {
		filter: grayscale(70%);
	}
	.alice-filter:hover {
		filter: grayscale(10%);
	}
	.dyn-border {
		@apply border border-amber-300 dark:border-gray-400;
	}
	.icon {
		@apply h-auto w-60 object-contain;
	}
	h1 {
		@apply text-5xl;
	}
</style>
