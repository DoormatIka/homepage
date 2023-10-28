<script lang="ts">
	import { base } from "$app/paths";

	function updateClock() {
		const date = new Date();
		return `${padInTime(date.getHours())}:${padInTime(date.getMinutes())}:${padInTime(date.getSeconds())}`;
	}
	function padInTime(time: number) {
		return time < 10 ? `0${time}` : time;
	}

	let clock: string = updateClock();
	setInterval(() => {
		const date = new Date();
		clock = updateClock();
	}, 1000)
</script>

<div class="flex flex-row my-10 gap-10 h-full justify-center dark:text-neutral-200">
	<div class="flex flex-col justify-center dyn-border text-center p-5 my-5 gap-3 mx-2 w-96">
		<img class="h-1/3 w-auto object-cover alice-filter" src="{base}/images/comfort.jpg" alt="">
		<img class="h-1/3 w-auto object-cover alice-filter" src="{base}/images/shrineinwinter.jpg" alt="">
		<img class="h-1/3 w-auto object-cover alice-filter" src="{base}/images/youmuwinterlandscape.jpg" alt="">
	</div>
	<div class="flex flex-col justify-center text-center py-5 px-3">
		<img class="icon" src="{base}/images/tenshihat.png" alt="Tenshi Hinanawi's Hat"/>
		<h1>{clock}</h1>
	</div>
	<div class="flex flex-col justify-center text-center dyn-border w-1/3 my-5 mx-2 p-2">
		<p>Have you taken your meds yet?</p>
		<p class="text-sm half-opacity">- Allice</p>
	</div>
</div>

<style lang="postcss">
	.alice-filter {
		@apply transition ease-in duration-150;
		filter: grayscale(50%);
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
	a {
		@apply bg-red-100;
	}
</style>
