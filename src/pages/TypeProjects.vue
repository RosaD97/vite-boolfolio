<script>
import store from '../store';
import axios from 'axios';
import CardProject from '../components/CardProject.vue';

export default {

    name: 'TypeProjects',
    data() {
        return {
            store,
            type: null
        }
    },
    components: {
        CardProject
    },
    methods: {
        getType() {
            axios.get(`${this.store.apiBaseUrl}/types/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    this.type = response.data.results;
                })
        }
    },
    created() {
        this.getType();
    }
}
</script>

<template>
    <div class="container">
        <ul class="d-flex flex-wrap m-4 row">
            <li v-for="project in type.projects" class="list-unstyled col col-md-3 gy-4">
                <div class="card h-100 p-1">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <router-link :to="{ name: 'project', params: { slug: project.slug } }">Vai al Project</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>