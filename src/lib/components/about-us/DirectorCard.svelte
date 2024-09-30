<script lang="ts">
    export let src = '/about-us/the-rasheed-griffith-show.png';
    export let name = 'Rasheed Griffith';
    export let alt = name;
    export let description= ``
    export let linkedin = '';
    export let twitter = '';
    export let website = '';
    
</script>


<div class="grid gap-8 ">
    <div class="grid gap-8 content-start">

        <img {src} {alt} class="hover:scale-[1.02] transition-transform max-w-60 object-contain">
        
        <div class="grid gap-8 items-start text-start md:text-start">
            <h3 class="font-semibold">{name}</h3>
            <p>{description}</p>
        </div>
    </div>

    <div class="grid items-end border-t border-borders-40 self-end min-h-16" >
        <div class="flex gap-4 items-center">
            {#if linkedin}
                <a href={linkedin} target="_blank"> <img src="linkedIn-logo.png" alt="LinkedIn" width=40 height=40></a>
            {:else}
                <img src="linkedIn-logo.png" alt="LinkedIn" width=40 height=40 class="grayscale opacity-50">
            {/if}
            
            {#if twitter}
                <a href={twitter} target="_blank"> <img src="twitter-logo.png" alt="Twitter" width=40 height=40></a>
            {:else}
                <img src="twitter-logo.png" alt="Twitter" width=40 height=40 class="grayscale opacity-50">
            {/if}
                
            
            {#if website}
                <a href={website} target="_blank"> <img src="link-website-logo.png" alt="Website" width=40 height=40></a>
            {/if}
                
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