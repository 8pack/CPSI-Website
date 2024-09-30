<script lang="ts">
    export let src = '/podcasts/the-rasheed-griffith-show.png';
    export let alt = 'the rasheed griffith show';
    export let description = `The most confounding feature of the Caribbean is its rapid decay into 
        stagnation. Rasheed Griffith interviews 
        industry experts and researchers to  
        figure out how we got here and how to
        reverse the trend in favor of accelerating
        progress in the  Caribbean.`

    export let apple = '';
    export let spotify = '';
    export let youtube = '';
    
</script>


<div class="grid gap-8">
    <img {src} {alt} class="hover:scale-105 transition-transform mx-auto md:mx-0">

    <p>{description}</p>

    <div>
        
        <hr class="grid gap-8 border-borders-40 place-self-end">
        <!-- <div class="border border-borders-40"></div> -->

        <div class="flex gap-4 items-center place-self-end">
            <strong>Listen on</strong>

            <div class="flex gap-4">
                {#if apple}
                    <a href={apple} target="_blank"> <img src="podcasts/apple-podcasts-icon.png" alt="Apple Podcasts"></a>
                {/if}
                
                {#if spotify}
                    <a href={spotify} target="_blank"> <img src="podcasts/spotify-icon.png" alt="Spotify"></a>
                {/if}
                
                {#if youtube}
                    <a href={youtube} target="_blank"> <img src="podcasts/youtube-icon.png" alt="Youtube"></a>
                {/if}
            </div>
        </div>
    </div>
</div>


<style lang="scss">
    a {
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;

        &:hover {
            transform: scale(1.1);

        }
    }
</style>