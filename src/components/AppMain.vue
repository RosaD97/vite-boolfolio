<script>
export default {
    name: 'AppMain',
    props: {
        data: Object
    }
}
</script>

<template>
    <header>
        <h2>Main</h2>

        Titoli
        <div v-for="project in data">
            <div>{{project.title}}</div>
        </div>
    </header>
</template>

<style scoped>
</style>