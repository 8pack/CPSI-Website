<script>
    import "../app.scss";
    import Navigation from "$lib/components/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>


<div class="wrapper">
    <div class="flex flex-col grow">
        <Navigation/>
        <div class="grow">
            <slot />
        </div>
    </div>
    <Footer/>
</div>

