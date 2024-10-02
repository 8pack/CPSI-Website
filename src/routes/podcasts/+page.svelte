<script lang="ts">

    import PodcastCard from "$lib/components/podcasts/PodcastCard.svelte";
</script>
    
<section>
    <div class="stars"></div>

    <div class="content grid gap-24">
        <div>
            <h1>Tune In</h1>
            <h3>
                From weekly commentary and foreign policy updates to in-depth analysis and discussions with policy makers and professionals from across the globe, the CPSI’s 
                growing library of podcasts promises to provide insights on key issues and trends from the region and beyond.
            </h3>
        </div>

        <div class="grid md:grid-cols-3 gap-24 md:gap-8">

            <PodcastCard 
                alt='The Rasheed Griffith Show'
                src='podcasts/the-rasheed-griffith-show.png'
                apple='https://podcasts.apple.com/us/podcast/the-rasheed-griffith-show/id1694396386'
                spotify='https://open.spotify.com/show/7j8e4hPX9fIfdrl2ysGFNh'
                youtube='https://www.youtube.com/playlist?list=PLC7kELgfCjHw_MfKKbBZrbZQBFcAj1lq6'
                description="The most confounding feature of the Caribbean is its rapid decay into stagnation. 
                    Rasheed Griffith interviews industry experts and researchers to figure out how we got here 
                    and how to reverse the trend in favor of accelerating progress in the  Caribbean."
            />
            <PodcastCard 
                alt='Chaufa with Ethan Knecht'
                src='podcasts/chaufa-with-ethan-knecht.png'
                apple='https://podcasts.apple.com/us/podcast/chaufa-with-ethan-knecht/id1727783505'
                spotify='https://open.spotify.com/show/0ySRWx9ovNi3fAs36qf7mq'
                description="News from China’s and Taiwan’s relations with the Caribbean & Latam. Our Taiwan-based correspondent and fellow, 
                    Ethan Knecht, provides detailed analysis and briefings for the latest in Beijing’s foreign policy and interactions with the West."
            />
            <PodcastCard 
                alt='Disgruntled Musings with Shem Best'
                src='podcasts/disgruntled-musings-with-shem-best.png'
                apple='https://podcasts.apple.com/us/podcast/disgruntled-musings-with-shem-best/id1761922778'
                spotify='https://open.spotify.com/show/5DlQ0m5qAgInoFTAJ85KbU'
                youtube='https://www.youtube.com/playlist?list=PLC7kELgfCjHzg9DvsM_IgKsD2CPg-XiqW'
                description="Cathartic rants from a Caribbean native on news, socio-political  trends and more. Join 
                    Shem Best for a weekly jaunt through the latest infrastructural, economic and political 
                    drama in the region. What’s on the mind of the discerning West Indian? Find out here."
            />


        </div>
    </div>
</section>
    
    
<style lang="scss">
    section {
        margin: auto;
        .stars {
            background: url('/bg-grid-transparent.png');
            min-height: 10rem;
            width: 100%;
            background-attachment: fixed;
        }

        .content {
            margin: 3rem auto 6rem;
            h2 {
                max-width: 60ch;
            }
            h3 {
                max-width: 75%;
            }
        }
    }

    @media screen and (max-width: 768px) {
        section {
            .content {
                h3 {
                    max-width: 100%;
                }
            }
        }
    }
</style>