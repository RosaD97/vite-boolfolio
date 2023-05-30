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
            projectsPage: 6,
            currentProjectsPage: 6,
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
    computed: {
        showProjects(){
            return this.projects.filter((element, index)=> index < this.currentProjectsPage);

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
                <div class="col col-md-4 d-grid" v-for="project in showProjects">
                    <CardProject :project="project"></CardProject>
                </div>
            </div>
            <div class="text-center my-3"><button @click.prevent="currentProjectsPage += projectsPage" class="btn btn-primary">Carica altri</button></div>
        </div>
    </section>
</template>

<style scoped>

</style>