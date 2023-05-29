<script>
import axios from 'axios';
import CardProject from '../components/CardProject.vue';

export default {
    name: 'BlogPage',
    components: {
        CardProject
    },
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrl: {
                projects: '/projects'
            },
            projects: []
        }
    },
    methods: {
        getProjects() {
            axios.get(this.apiBaseUrl + this.apiUrl.projects)
                .then((response) => {
                    this.projects = response.data.results;
                })
                .catch((error) => { console.log(error) })
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <section class="container">
        <h2 class="text-light m-3">Projects</h2>
        <div>
            <div class="row gy-4">
                <div class="col col-md-4 d-grid" v-for="project in projects">
                    <CardProject :project="project"></CardProject>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>