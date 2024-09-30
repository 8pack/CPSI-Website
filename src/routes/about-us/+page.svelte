<script lang="ts">
    import DirectorCard from "$lib/components/about-us/DirectorCard.svelte";
	import PartnerCard from "$lib/components/about-us/PartnerCard.svelte";
import PodcastCard from "$lib/components/podcasts/PodcastCard.svelte";


</script>

<section>
    <div class="stars"></div>

    <div class="content grid gap-24">
        <div class="grid grid-cols-4 gap-8">

            <div class="col-span-3 grid gap-4">
                <h1>A Dedicated Fellowship</h1>
                <h3>
                    The CPSI envisions a Caribbean where the economic and social policies are not only forward-thinking 
                    but also deeply rooted in the region’s rich cultural heritage and demographic realities. We believe 
                    that by promoting classical liberal economic principles alongside a nuanced understanding of the 
                    region’s socio-political landscape, we can foster an  environment where free markets, reduced import 
                    taxes, and private sector involvement in public  services thrive, ultimately benefiting the 
                    region’s people.
                </h3>

                <h3>
                    In essence, our vision is not just about policy reform; it’s about inspiring a movement. 
                    It’s about empowering Caribbean societies to envision a future where their unique blend of intellectual mixing, 
                    cultural vibrancy, and economic  potential is not only recognized but also fully realized. We are committed 
                    to being at the forefront of this transformation, catalysing change, and ushering in a new era of Caribbean progress.    
                </h3>
                <a href="https://cpsi.media/p/what-should-a-caribbean-think-tank " target="_blank"><h3 class="font-bold hover:underline cursor-pointer">+  Read Our Mission</h3></a>
            </div>
            <div>
                <!-- <img src="about-us/hero-rasheed-griffith.png" alt="" class="h-full object-cover"> -->
            </div>
        </div>


        <div class="grid gap-16">
            <h2 class="font-bold">Directors</h2>

            <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-24 md:gap-8">
                <DirectorCard 
                    src="about-us/rasheed-griffith.png"
                    name="Rasheed Griffith"
                    description="Rasheed is the Director of Emergent Ventures Africa & the Caribbean at the Mercatus Center of George Mason University,
                        a non-resident Senior Fellow at  the Inter-American Dialogue, and an  Innovation Fellow with Schmidt Futures. He cofounded Merkle Hedge, 
                        a high-frequency trading firm. Previously, he was the Head of  Compliance of a hyper-growth FinTech firm in the Philippines. 
                        He has testified before the US-China Economic and Security Review Commission (USCC)."
                    linkedin="https://www.linkedin.com/in/rasheed-j-griffith-74b501206/"
                    twitter="https://x.com/rasheedguo/"
                />
                <DirectorCard 
                    src="about-us/shane-glynn.png"
                    name="Shane Glynn"
                    description="Shane is an adjunct professor at UC Law, San Francisco and an advisor to advanced technology startup companies including MobileCoin Inc., 
                        which he co-founded in 2018. Prior to working with startups, he was a product counsel at Google providing legal oversight for a range of telecommunications 
                        products including Google Fiber, and Google’s Pixel line of smartphones. He has a law degree from UC Hastings College of the Law, 
                        and has worked at the law firms of Perkins Coie LLP and King & Spalding LLP."
                    linkedin="https://www.linkedin.com/in/shane-glynn-069132140/"
                    twitter=""
                />
                <DirectorCard 
                    src="about-us/dr-delisle-worrell.png"
                    name="Dr. Delisle Worrell"
                    description="Delisle is a member of the Bermuda Financial Policy Council, the Bretton Woods Committee, Washington DC, and the College of Central Bankers, 
                        Federal Reserve  Bank of Philadelphia. He was Governor of  the Central Bank of Barbados 2009–17. He founded the Bank’s Research Department in 1973, 
                        and he subsequently oversaw the establishment of its Banking Supervision and Information Technology Departments. He spent a decade on the staff of the International Monetary Fund from 1997."
                    linkedin=""
                    twitter=""
                    website="http://www.delisleworrell.com/"
                />
                <DirectorCard 
                    src="about-us/dr-ria-persad.png"
                    name="Dr. Ria Persad"
                    description="Ria is the founding CEO of StatWeather. She studied mathematics and physics at  Harvard, Princeton, and Cambridge Universities. 
                        She performed earth and solar  system modeling at NASA and went on to  model geophysical systems at Bell Geospace. 
                        She developed long-range weather prediction systems, peer-reviewed  among academia and U.S. Department of  Defense scientists. 
                        She models complex  systems for the U.S. Space Program and is  an innovative Subject Matter Expert."
                    linkedin="https://www.linkedin.com/in/riapersad/"
                    twitter=""
                />
            </div>
        </div>

        
        <div class="grid gap-16">
            <h2 class="font-bold">Senior Fellows </h2>

            <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-24 md:gap-8">
                <DirectorCard 
                    src="about-us/dr-karsten-müller.png"
                    name="Dr. Karsten Müller"
                    description="Karsten is an Assistant Professor in  Finance at the National University of Singapore Business School. 
                        Karsten’s work is frequently cited by media outlets such as The New York Times, The Economist, Financial Times, Time Magazine, Bloomberg, 
                        Huffington Post, CNN, The Guardian, and many others. He received his Ph.D. in Business and Management from the University  of Warwick in 2018"
                    linkedin="https://www.linkedin.com/in/krstnmllr/"
                    twitter=""
                />
                <DirectorCard 
                    src="about-us/neil-harper.png"
                    name="Niel Harper"
                    description="Neil was previously a Member of the United Nations Information Security Special  Interest Group (UNISSIG) and is 
                        currently a Member of the World Economic Forum’s Cyber Risk & Corporate Governance Working Group. Niel also serves on the 
                        Professional Standards Working Group of the UK Cyber Security Council and as a Board Director and Vice-Chair, Audit Committee at ISACA."
                    linkedin="https://linkedin.com/in/nielharper"
                    twitter="https://x.com/noaharper"
                />
                <DirectorCard 
                    src="about-us/dr-justin-ram.png"
                    name="Dr. Justin Ram"
                    description="Justin was previously Director of the Economics Department at the Caribbean Development Bank. Before joining the CDB, 
                        Justin’s experiences included: Senior Global Economist with Worley Parsons, Supervisory economist with the Mayor of London and 
                        the Greater London Authority, Technical Director with Jacobs Engineering and as an economist with the UK government’s Department for Transport."
                    linkedin="https://www.linkedin.com/in/justin-ram-79942a2/"
                    twitter="https://x.com/justinram2"
                />
                <DirectorCard 
                    src="about-us/dr-tarron-khemraj.png"
                    name="Dr. Tarron Khemraj"
                    description="Tarron is the William and Marie Selby Chair and Professor of Economics and International Studies at New College of Florida. 
                        Khemraj has two primary research areas: the political economy of development with special emphasis on the English-speaking 
                        Caribbean and the Guianas (Guyana and  Suriname); and monetary macroeconomics with focus on the United States and other developing economies."
                    linkedin=""
                    twitter="https://x.com/Tarronkhemraj"
                />
            </div>
        </div>

        
        <div class="grid gap-16">
            <h2 class="font-bold">Fellows </h2>

            <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-24 md:gap-8">
                <DirectorCard 
                    src="about-us/tianyu-fang.png"
                    name="Tianyu Fang"
                    description="Tianyu, currently at Standford University, is a MacArthur Tech and Democracy Fellow at New America. Previously, he was a co-founder of Chaoyang Trap, 
                        a newsletter about life on the Chinese internet. He  covered Chinese technology, politics, and culture as a freelance journalist in Beijing."
                    linkedin="http://linkedin.com/in/tianyufang"
                    twitter="https://x.com/tianyuf"
                />
                <DirectorCard 
                    src="about-us/sebastian-naranjo.png"
                    name="Sebastian Naranjo"
                    description="Sebastian is a Foreign Services Officer at  the Ministry of Foreign Affairs of Panama. He is a PhD candidate at Renmin University of China 
                        with a dissertation focusing on China’s political relations with Central America and the Caribbean. He was the host of the Chinomania Podcast."
                    linkedin="http://linkedin.com/in/sebastian1993"
                    twitter=""
                />
                <DirectorCard 
                    src="about-us/kenidi-prescod.png"
                    name="Kenidi Prescod"
                    description="Kenidi is an Attorney-at-Law based in Barbados with a focus on criminal law and intellectual property law.
                        She has also served in various People Operations and Human Resource Management roles in the FinTech industry and agribusiness industry."
                    linkedin="https://www.linkedin.com/in/kenidi-prescod-94b5a31b6"
                    twitter=""
                />
                <DirectorCard 
                    src="about-us/ethan-knecht.png"
                    name="Ethan Knecht"
                    description="Ethan was previously a government relations counselor and deputy director of the Washington International Business Council. 
                        He is currently in graduate school in  =Taiwan and is the author of the Chaufa Newsletter."
                    linkedin="https://www.linkedin.com/in/ethan-knecht-179b9317b"
                    twitter="https://x.com/knecht_ethan"
                />
            </div>
        </div>

        
        <div class="grid gap-16">
            <h2 class="font-bold">Partners </h2>

            <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-24 md:gap-8">
                <PartnerCard 
                    src="about-us/mercatus-center.png"
                    name="Mercatus Center"
                    website=""
                />
                <PartnerCard 
                    src="about-us/schmidt-futures.png"
                    name="Schmidt Futures"
                    website=""
                />
                <PartnerCard 
                    src="about-us/university-of-the-west-indies.png"
                    name="University of the West Indies"
                    website=""
                />
                <PartnerCard 
                    src="about-us/atlas-network.png"
                    name="Atlas Network"
                    website=""
                />
                <PartnerCard 
                    src="about-us/open-foundation-society.png"
                    name="Open Society Foundation"
                    website=""
                />
            </div>
        </div>
    </div>
</section>


<style lang="scss">
    section {
        margin: auto;
        .stars {
            background: url('bg-grid-transparent.png');
            min-height: 10rem;
            width: 100%;
        }

        .content {
            margin: 3rem auto 6rem;
            h2 {
                max-width: 60ch;
            }
        }
    }
</style>