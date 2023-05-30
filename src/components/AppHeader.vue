<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between pt-3">
            <h2 class="fw-bold text-light">Blog</h2>
            <div>
                <ul class="list-unstyled d-flex gap-4">
                    <li>
                        <router-link :to="{ name: 'home' }" class="text-light text-decoration-none btn">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }" class="text-light text-decoration-none btn">About</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'blog' }" class="text-light text-decoration-none btn">blog</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'type' }" class="text-light text-decoration-none btn">Types</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: #2C3639;
}

h2 {
    text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.54);
}

li:hover {
    text-shadow: -4px 4px 6px rgba(0, 0, 0, 1);
}</style>