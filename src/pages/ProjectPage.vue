<script>
import axios from 'axios';
export default {
    name: 'ProjectPage',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrl: {
                projects: '/project'
            },
            project: null,
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        getProgect() {
            axios.get(this.apiBaseUrl + this.apiUrl.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.results;
                }).catch((error) => {
                    console.log(error);
                    this.isError = true,
                    this.errorMessage = error.message;
                })
        }
    },
    created() {
        this.getProgect();
    }
}
</script>

<template>
    <div>
        <h2>{{ project.title }}</h2>
        <p>{{ project.text }}</p>
        <div class="mt-3"> Technologies:
                    <div v-for="technology in project.technologies">
                        <span>{{ technology.name }}</span>
                    </div>
                </div>
    </div>
    <div v-if="isError">
        <div>{{ errorMessage }}</div>
    </div>
</template>

<style scoped></style>