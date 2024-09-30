<script lang="ts">

    import { onMount } from 'svelte';

    let canvas: any;
    let context: any;

    // Sine wave parameters
    let amplitude = 100; // Height of the wave
    let frequency = 0.0025; // Frequency of the wave
    export let phase = 0; // Starting point for phase shift
    export let speed = 0.01; // Speed of phase shift
    export let color = 'rgba(241, 90, 36, 0.56)';

    const drawSineWave = () => {
        const width = canvas.width;
        const height = canvas.height;
        const centerY = height / 1.1;

        context.clearRect(0, 0, width, height);
        context.beginPath();

        context.moveTo(0, centerY);

        for (let x = 0; x < width; x++) {
            const y = centerY + amplitude * Math.sin(frequency * x + phase);
            context.lineTo(x, y);
        }

        context.strokeStyle = color; // Color of the sine wave
        context.lineWidth = 20; // Thickness of the line
        context.stroke();

        // Update the phase to create animation
        phase += speed;

        requestAnimationFrame(drawSineWave); // Animate the wave
    };

    onMount(() => {
        context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        drawSineWave();
    });


</script>

<canvas bind:this={canvas}></canvas>

    

<style lang="scss">


    canvas {
        display: block;
        margin: 0 auto;

		position: absolute;
        width: 100%;
		height: 100%;
		left: 0%;
		top: 0%;
        overflow: visible;
        z-index: -1;
    }
</style>
