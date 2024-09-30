<script lang="ts">
    export let image1 = '/home/metagovernance-1.png';
    export let alt1= 'Metagovernance 1';
    export let image2 = '/home/metagovernance-2.png';
    export let alt2 = 'Metagovernance 2';

    export let title = 'Metagovernance';
    export let description = `Emphasizing international talent recruitment and intra-Caribbeancivil services with the aim is to 
        enhance public service delivery, ultimately elevating governance standards and public sector  performance across the region`;
    // export let website = '';
    
</script>


<div class="grid gap-8">
    <div class="grid gap-1 items-start">
        <h3 class="font-semibold text-center md:text-start">{title}</h3>
        <p>{description}</p>
    </div>

    <div class="flex gap-8 justify-between self-end">
        <div class="h-full"><img src={image1} alt={alt1} class="hover:scale-[1.02] transition-transform mx-auto md:mx-0 md:w-full object-contain h-full"></div>
        <div class="h-full"><img src={image2} alt={alt2} class="hover:scale-[1.02] transition-transform mx-auto md:mx-0 md:w-full object-contain h-full"></div>
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