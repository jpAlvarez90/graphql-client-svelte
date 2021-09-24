<script>
    import NavBar from '../components/NavBar.svelte';
</script>

<div>
    <NavBar />
    <div class="p-8 mx-auto">
        <slot/>
    </div>
</div>


<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>