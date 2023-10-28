<script lang="ts">
	import { fade } from 'svelte/transition';
	import { base } from "$app/paths";
	import { OnMount, wait } from "fractils";
    import {onMount} from 'svelte';

	const in_picture = 0.7;
	const out_picture = 1.2;

	let classes: HTMLCollectionOf<HTMLElement>;	
	onMount(() => {
		classes = document.getElementsByClassName("images") as any;
		setTimeout(() => { highlightImages(in_picture, out_picture) }, 1000);
	})

	const quotes: string[] = [
		"Have you taken your meds yet?",
		"I hope you a very nice day.",
		"Do not drink alcohol!"
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
	function updateClock() {
		const date = new Date();
		return `${padInTime(date.getHours())}:${padInTime(date.getMinutes())}:${padInTime(date.getSeconds())}`;
	}
	function padInTime(time: number) {
		return time < 10 ? `0${time}` : time;
	}

	let quote = quotes[random(0, quotes.length)];
	let clock: string = updateClock();
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
		<img on:click={() => { highlightImages(in_picture, out_picture) }} in:fade={{ delay: 300 }} class="images alice-filter" src="{base}/images/comfort.jpg" alt="">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img on:click={() => { highlightImages(in_picture, out_picture) }} in:fade={{ delay: 500 }} class="images alice-filter" src="{base}/images/shrineinwinter.jpg" alt="">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img on:click={() => { highlightImages(in_picture, out_picture) }} in:fade={{ delay: 700 }} class="images alice-filter" src="{base}/images/cherryblossoms.jpg" alt="">
	</div>
	<div class="flex flex-col justify-center text-center py-5 px-3">
		<a href="https://github.com/DoormatIka">
			<img class="icon hover:-translate-y-3 transition-transform ease-in duration-300" src="{base}/images/tenshihat.png" alt="Tenshi Hinanawi's Hat" />
		</a>
		<h1>{clock}</h1>
	</div>
	<div class="flex flex-col justify-center text-center dyn-border w-72 my-5 mx-2 p-2">
		<OnMount>
			<button 
				class="relative" 
				on:click={ () => { quote = quotes[random(0, quotes.length)] } }
			>
			{#key quote}
				<div 
					class="absolute bottom-0 w-60 left-1/2 -translate-x-1/2" 
					in:fade={{ duration: 300, delay: 100 }} 
					out:fade={{ duration: 100 }}
				>
					<p>{quote}</p>
				</div>
			{/key}
			</button>
			<div in:fade={{ duration: 300, delay: 1000 }}>
				<p class="text-sm half-opacity">- Allice</p>
			</div>
		</OnMount>
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
	.half-opacity {
		filter: opacity(40%);
	}
	.icon {
		@apply h-auto w-60 object-contain;
	}
	h1 {
		@apply text-5xl;
	}
</style>
