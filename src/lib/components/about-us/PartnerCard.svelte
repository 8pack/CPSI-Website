<script lang="ts">
    export let src = '/about-us/mercatus-center.png';
    export let name = 'Mercatus Center';
    export let alt = name;
    export let website = '';
    
</script>


<div class="grid gap-8 ">
    <div class="grid gap-8 content-start">

        <img {src} {alt} class="hover:scale-[1.02] transition-transform mx-auto md:mx-0 md:w-full object-contain">
        
        <div class="grid gap-8 items-start">
            <h3 class="font-semibold text-center md:text-start">{name}</h3>
        </div>

    </div>

    <hr class="border-borders-40 self-end min-h-16">
    <!-- <div class="grid gap-8 border-t border-borders-40 self-end min-h-16" >
        <div class="flex gap-4 items-center self-end">
            {#if linkedin}
                <a href={linkedin} target="_blank"> <img src="linkedIn-logo.png" alt="LinkedIn" width=40 height=40></a>
            {/if}
            
            {#if twitter}
                <a href={twitter} target="_blank"> <img src="twitter-logo.png" alt="Twitter" width=40 height=40></a>
            {/if}
                
        </div>
    </div> -->
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