<script>
	import { spring } from 'svelte/motion';

	let coords = spring({ x: 50, y: 50 }, {
		// stiffness: 0.1,
		stiffness: 0.08,
		// damping: 0.25
		damping: 0.5
	});

    
	let coords2 = spring({ x: 45, y: 55 }, {
		stiffness: 0.07,
		damping: 0.7
	});

	let coords3 = spring({ x: 55, y: 50 }, {
		stiffness: 0.06,
		damping: 0.9
	});

	let size = spring(60);

    
    // let deg = Math.floor(Math.random() * 10)+1;
    let deg = 15;
    let range=4
    let offset=range/2

    let random1 = Math.floor(Math.random() * range) - offset
    let random2 = Math.floor(Math.random() * range) - offset
    let random3 = Math.floor(Math.random() * range) - offset
    let random4 = Math.floor(Math.random() * range) - offset


</script>


<svg fill="none"
    on:mousemove={(e) => {
        
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
	<circle class="circle-orange z-[1]"
		cx={$coords.x}
		cy={$coords.y}
		r={$size}
        stroke="currentColor" stroke-width="4"
	/>
    
	<circle class="circle-blue-transparent z-0"
        cx={$coords2.x}
        cy={$coords2.y}
        r={$size}
        stroke="currentColor" stroke-width="4"
    />
    
	<circle class="circle-red-transparent z-0"
        cx={$coords3.x}
        cy={$coords3.y}
        r={$size}
        stroke="currentColor" stroke-width="4"
    />
</svg>

<!-- <svg class="circle-blue" fill="none" xmlns="http://www.w3.org/2000/svg"
    on:mousemove={(e) => {
        coords2.set({ x: e.offsetX-5, y: e.offsetY+5 });
    }}
	on:mousedown={() => size.set(70)}
	on:mouseup={() => size.set(35)}
    role="presentation"
>
	<circle
		cx={$coords2.x}
		cy={$coords2.y}
		r={$size}
        stroke="currentColor" stroke-width="4"
	/>
</svg> -->

<!-- <div class="controls">
	<label>
		<h3>stiffness ({coords.stiffness})</h3>
		<input
			bind:value={coords.stiffness}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>

	<label>
		<h3>damping ({coords.damping})</h3>
		<input
			bind:value={coords.damping}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>
</div> -->

<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
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
