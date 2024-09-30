<script>
	import { page } from "$app/stores";
    $: console.log($page.url.pathname)
</script>

<nav>
    <div class="content">
        <a href="/"><img src="CPSI-Logo.webp" alt="CPSI Logo"></a>

        <div class="flex gap-12 links">
            <a href="https://cpsi.media/" class="" class:active="{$page.url.pathname === '/newsletters'}">
                <svg class="circle-orange" width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="16" fill="white"/>
                    <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="4"/>
                </svg>
                
                <span>Newsletters</span>
            </a>

            <a href="podcasts" class="" class:active="{$page.url.pathname === '/podcasts'}">
                <svg class="circle-blue" width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="16" fill="white"/>
                    <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="4"/>
                </svg>
                
                <span>Podcasts</span>
            </a>

            <a href="about-us" class=" transition scale-110" class:active="{$page.url.pathname === '/about-us'}">
                <svg class="circle-red" width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="16" fill="white"/>
                    <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="4"/>
                </svg>
                
                <span>About Us</span>
            </a>
        </div>
    </div>
</nav>


<style lang="scss">
    nav {
        background-color: white;
        box-shadow: (0px 4px 20px 23px rgba(0, 0, 0, 0.03));
        font-size: 1.5rem;
        color: black;

        .content {
            min-height: 5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            
            .links {

                a {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    font-weight: bold;

                    svg {
                        transition-property: transform;
                        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                        transition-duration: 150ms;
                    }
                    &:hover svg {
                        transform: scale(1.1);

                        circle {
                            fill: currentColor;
                        }
                    }
                    
                    &.active svg {
                        circle {
                            fill: currentColor;
                        }
                    } 
                }
                
            }
        }
    }
</style>