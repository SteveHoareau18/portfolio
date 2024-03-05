<script lang="ts">
    import type { _Card } from "../entity/_Card";
    export let card : undefined | _Card;
</script>
{#if card !== undefined}
<div class="max-w-sm bg-slate-200 border border-gray-200 rounded-lg shadow mt-5">
    <div class="text-center flex justify-center">
        <a href={card.img.href}>
            <img class="rounded-t-lg" src={card.img.src} alt="" />
        </a>
    </div>
    <div class="p-5">
        <a href={card.title.href}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{card.title.text}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 ">
            {@html card.description}
        </p>
    </div>
    <div class="border-t-2 px-6 py-3 border-neutral-600 text-neutral-50">
        <a href={card.readMore.href} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            {@html card.readMore.text}
        </a>
    </div>
  </div>
{/if}