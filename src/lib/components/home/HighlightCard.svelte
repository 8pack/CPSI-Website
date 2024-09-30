<script lang="ts">

    export let title = 'Jamaica Is Not Doing Ok';
    export let description = 'A history of violence and the divergence of social development.';
    export let href='https://cpsi.media/p/jamaica-is-not-doing-ok';
    export let color='#F7A284';
    
</script>


<a {href} target="_blank"  class="grid gap-8 border-cpsi-orange bordered items-start" style="--color: {color}">
    
    <div class="grid gap-8 ">
        <h3 class="font-semibold text-center md:text-start">{title}</h3>
        <hr class="border-borders-40 self-end">
        <p class="place-self-start">{description}</p>
    </div>

    <p class="font-bold hover:underline cursor-pointer self-end">+ Read more</p>

</a>


<style lang="scss">
    .bordered {
        border: 6px solid var(--color);
        padding: 1.5rem;
        
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;

        &:hover {
            transform: scale(1.02);
        }
    }
</style>