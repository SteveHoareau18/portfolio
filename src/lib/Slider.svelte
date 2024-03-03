<script lang="ts">
    import { onMount } from "svelte";
    import { type Language } from "../entity/Language";
    import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
    export let languagesIcon : Language[];
    import '@splidejs/svelte-splide/css';
    export let showIconsPerPage : number;
</script>
<Splide aria-label="..." options={{
        type   : 'loop',
        perPage: showIconsPerPage,
        pagination: false,
        autoplay:true,
        interval: 2500 }}
    >
    {#each languagesIcon as languageIcon}
        <SplideSlide>
            <div class="slide">
                <div class="text-center flex justify-center">
                    <a href={languageIcon.url}><img src={languageIcon.icon.url} class="h-{languageIcon.icon.height} w-{languageIcon.icon.width}" alt=""></a>
                </div>
                <div class=text-center>
                    <a href={languageIcon.url}>{languageIcon.name}</a>
                </div>
            </div>
        </SplideSlide>
    {/each}
</Splide>