<script lang="ts">
	import Circles from "$lib/components/home/Circles.svelte";
    import HighlightCard from "$lib/components/home/HighlightCard.svelte";
	import PlatformCard from "$lib/components/home/PlatformCard.svelte";
	import Waves from "$lib/components/home/Waves.svelte";


    /*
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>

    <link rel="canonical" href={seo.canonical} />
    <meta name="generator" content={Astro.generator} />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta name="description" content={seo.description} />
    <meta property="og:url" content={seo.canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={seo.description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={seo.canonical + seo.image} />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="600" />
    <meta property="og:site_name" content={seo.title} />
    <meta property="og:locale" content={seo.locale} />
*/
</script>

<section class="relative min-h-screen md:min-h-max">
    <div class="stars"></div>
    
    <Waves phase={4} speed={0.005} color="rgba(241, 90, 36, 0.20)"/>
    <Waves phase={4} speed={0.006} color="rgba(41, 171, 226, 0.20)"/>
    <Waves phase={4} speed={0.004} color="rgba(193, 39, 45, 0.20)"/>

    <div class="content grid gap-24 ">
        
        <div class="grid md:grid-cols-4 gap-8 min-h-[72svh]">
            <div class="zorder-2 md:order-none md:col-span-2 grid gap-4 content-center">
                <h1 class="">Restoring <br>Dynamism</h1>
                <h3>The Caribbean Progress Studies Institute (CPSI) is steadfastly committed to re-igniting the once vibrant dynamism and progress that defined the Caribbean in the 20th century.</h3>
            </div>
            <div class="relative zorder-1 md:order-none md:col-span-2 hidden md:block">
                 <Circles/>
            </div>
        </div>
    </div>
</section>

<section class="platforms">
    <div class="content">

        <h2>Platforms</h2>

        <div class="mt-8 grid md:grid-cols-2 gap-24 md:gap-24 justify-between">
            <PlatformCard 
                title="Metagovernance"
                description="Emphasizing international talent recruitment and intra-Caribbean civil services with the aim is to enhance public service delivery, 
                    ultimately elevating governance standards and public sector performance across the region"
                image1="home/metagovernance-1.png"
                image2="home/metagovernance-2.png"
                alt1="Metagovernance 1.png"
                alt2="Metagovernance 2.png"
            />
            <PlatformCard 
                title="Dollarization"
                description="Focusing on retirement of all Caribbean currencies in favor of the US Dollar. The aim is to stabilize fiscal environments, eliminate monetary mismanagement, 
                    promote foreign investment, ultimately providing a robust foundation for rapid development and global economic integration in the region."
                image1="home/dollarization-1.png"
                image2="home/dollarization-2.png"
                alt1="Dollarization 1.png"
                alt2="Dollarization 2.png"
            />

            
            <PlatformCard 
                title="Growth"
                description="Promoting tech entrepreneurship, industrial policy, and classicalliberal principles. The goal is to foster a dynamic, 
                    competitive economic environment, driving prosperity and improved living standards across the Caribbean nations."
                image1="home/growth-1.png"
                image2="home/growth-2.png"
                alt1="Growth 1.png"
                alt2="Growth 2.png"
            />
            <PlatformCard 
                title="China"
                description="Researching and explaining the effects of Chinese investmentswith the aim to provide insightful, data-driven analysis to guide 
                    Caribbean nations in maximizing benefits and strategically navigating their economic relationship with China."
                image1="home/china-1.png"
                image2="home/china-2.png"
                alt1="China 1.png"
                alt2="China 2.png"
            />
        </div>
    </div>

</section>


<section class="highlights">
    <div class="content">

        <h2>Highlights </h2>
        
        <div class="mt-8 grid md:grid-cols-3 gap-12 lg:gap-24 md:justify-between ">
            <HighlightCard 
                title="Jamaica Is Not Doing Ok"
                description="A history of violence and the divergence of social development."
                href="https://cpsi.media/p/jamaica-is-not-doing-ok"
                color="var(--cpsi-orange-transparent)"
            />
            
            <HighlightCard 
                title="Colonialism And Progress"
                description="Exploring the myth of “independence”."
                href="https://cpsi.media/p/colonialism-and-progress-fb9"
                color="var(--cpsi-blue-transparent)"
            />
            
            <HighlightCard 
                title="Why Panama Dollarized"
                description="A monetary success story and lesson for the Caribbean."
                href="https://cpsi.media/p/why-panama-dollarized"
                color="var(--cpsi-red-transparent)"
            />
        </div>
    </div>

</section>


<style lang="scss">
    section {
        margin: auto;
        overflow: hidden;
        
        h1 {
            font-size: 7rem;
            line-height: 100%;
        }
        &.platforms, &.highlights {
            color: var(--primary);
            background: white;
        }
        .stars {
            background-image: url('/bg-grid-transparent.png');
            background-attachment: fixed;
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
        }

        .content {
            margin: 3rem auto 6rem;
            h2 {
                max-width: 60ch;
                font-weight: bold;
            }
        }

    }
    .content {
        margin: 3rem auto 6rem;
        h2 {
            max-width: 60ch;
        }
    }

    @media screen and (max-width: 576px) {
        section {
            
            h1 {
                font-size: 6rem;
            }
        }
    }
</style>