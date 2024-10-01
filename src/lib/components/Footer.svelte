<script lang="ts">

</script>

<footer>
    <div class="content">
        <a href="/" class="inline-block"><img src="CPSI-Logo.webp" alt="CPSI Logo" class="ml-0 mr-auto w-min"></a>
        
        <div class="narrow">
            
            <div>
                <div class="font-bold">Email us at</div>
                <a href="mailto:progress@cpsi.com" class="hover:underline">progress@cpsi.com</a>
            </div>

            <div class="flex gap-6 items-center border-t border-borders pt-8">
                <div class="grid">
                    <div class="font-semibold">See more at</div>
                    <div>@CPSIorg on</div>
                </div>

                <a href="https://x.com/CPSIorg" target="_blank"><img src="/twitter-logo.png" alt="Twitter Logo"></a>
                <a href="https://www.linkedin.com/company/caribbeanprogress/" target="_blank"><img src="/linkedIn-logo.png" alt="LinkedIn logo"></a>
                <a href="https://substack.com/@cpsi" target="_blank"><img src="/substack-logo.png" alt="Substack Logo "></a>
            </div>
        </div>
        
    </div>
</footer>


<style lang="scss">
    footer {
        position: relative;
        
        // background-color: #fefefe;
        padding: 2rem 0 2rem;
        background-image: url('/bg-grid-transparent.png');
        background-attachment: fixed;

        .content {
            .narrow {
            display: grid;
            gap: 2rem;
                max-width: 30rem;
                >div {
                    margin-left: 70px;
                }
            }

            img {
                transition-property: transform;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 150ms;
                
                &:hover {        
                    transform: scale(1.05);
                }
            }
        }
    }
</style>