<script>
	import { spring } from 'svelte/motion';

	let coords = spring({ x: 400, y: 400 }, {
		stiffness: 0.08,
		damping: 0.5
	});

    
	let coords2 = spring({ x: 395, y: 405 }, {
		stiffness: 0.07,
		damping: 0.7
	});

	let coords3 = spring({ x: 405, y: 400 }, {
		stiffness: 0.06,
		damping: 0.9
	});

	
	let mobile_coords = spring({ x: 400, y: 0 }, {
		stiffness: 0.08,
		damping: 0.5
	});

    
	let mobile_coords2 = spring({ x: 395, y: 5 }, {
		stiffness: 0.07,
		damping: 0.7
	});

	let mobile_coords3 = spring({ x: 405, y: 0 }, {
		stiffness: 0.06,
		damping: 0.9
	});

	let size = spring(60);

	let isHovered = false;

    
    // let deg = Math.floor(Math.random() * 10)+1;
    let deg = 15;
    let range=4
    let offset=range/2
    let stroke_width = 8

    let random1 = Math.floor(Math.random() * range) - offset
    let random2 = Math.floor(Math.random() * range) - offset
    let random3 = Math.floor(Math.random() * range) - offset
    let random4 = Math.floor(Math.random() * range) - offset


</script>


<svg fill="none" class="hidden md:block"
    on:mousemove={(e) => {
        if (!isHovered)
			return

        random1 = Math.floor(Math.random() * range) - offset;
        random2 = Math.floor(Math.random() * range) - offset;
        random3 = Math.floor(Math.random() * range) - offset;
        random4 = Math.floor(Math.random() * range) - offset;
        
        coords.set({ x: e.offsetX, y: e.offsetY });
        coords2.set({ x: e.offsetX+(random1 * deg), y: e.offsetY+(random2 * deg) });
        coords3.set({ x: e.offsetX+(random3 * deg), y: e.offsetY+(random4 * deg) });
    }}
	on:mousedown={() => size.set(120)}
	on:mouseup={() => size.set(60)}
    role="presentation"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<circle class="circle-orange z-[1]"
		on:mouseenter={() => isHovered = true}
		cx={$coords.x}
		cy={$coords.y}
		r={$size}
        stroke="currentColor" stroke-width={stroke_width}
	/>
    
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<circle class="circle-blue-transparent z-0"
		on:mouseenter={() => isHovered = true}
        cx={$coords2.x}
        cy={$coords2.y}
        r={$size}
        stroke="currentColor" stroke-width={stroke_width}
    />
    
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<circle class="circle-red-transparent z-0"
		on:mouseenter={() => isHovered = true}
        cx={$coords3.x}
        cy={$coords3.y}
        r={$size}
        stroke="currentColor" stroke-width={stroke_width}
    />
</svg>


<svg fill="none" class="hidden md:hidden"
    on:mousemove={(e) => {
        if (!isHovered)
			return

        random1 = Math.floor(Math.random() * range) - offset;
        random2 = Math.floor(Math.random() * range) - offset;
        random3 = Math.floor(Math.random() * range) - offset;
        random4 = Math.floor(Math.random() * range) - offset;
        
        mobile_coords.set({ x: e.offsetX, y: e.offsetY });
        mobile_coords2.set({ x: e.offsetX+(random1 * deg), y: e.offsetY+(random2 * deg) });
        mobile_coords3.set({ x: e.offsetX+(random3 * deg), y: e.offsetY+(random4 * deg) });
    }}
	on:mousedown={() => size.set(120)}
	on:mouseup={() => size.set(60)}
    role="presentation"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<circle class="circle-orange z-[1]"
		on:mouseenter={() => isHovered = true}
		cx={$mobile_coords.x}
		cy={$mobile_coords.y}
		r={$size}
        stroke="currentColor" stroke-width={stroke_width}
	/>
    
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<circle class="circle-blue-transparent z-0"
		on:mouseenter={() => isHovered = true}
        cx={$mobile_coords2.x}
        cy={$mobile_coords2.y}
        r={$size}
        stroke="currentColor" stroke-width={stroke_width}
    />
    
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<circle class="circle-red-transparent z-0"
		on:mouseenter={() => isHovered = true}
        cx={$mobile_coords3.x}
        cy={$mobile_coords3.y}
        r={$size}
        stroke="currentColor" stroke-width={stroke_width}
    />
</svg>


<style>
	svg {
		/* background: #ffffff10; */
		position: absolute;
		width: 100%;
		height: 50%;
		left: 0;
		top: 0;
        overflow: visible;
	}

	circle {
		/* fill: #ff3e00; */
	}

	.controls {
		position: absolute;
		top: 1em;
		right: 1em;
		width: 200px;
		user-select: none;
	}

	.controls input {
		width: 100%;
	}
</style>
