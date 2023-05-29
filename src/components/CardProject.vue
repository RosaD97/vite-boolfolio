<script>

export default {
    name: 'CardProject',
    props: {
        project: Object
    }
}
</script>

<template>
    <div>
        <div class="card h-100 p-1">
            <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p>{{ project.text }}</p>
                <div class="mt-3">
                    <div v-if="project.type">{{ project.type.name }}</div>
                </div>
                <router-link :to="{ name: 'project', params: { slug: project.slug } }">Vai al Project</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped></style>