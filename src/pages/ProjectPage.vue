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
            project: '',
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

                    if (error.response.status === 404) {
                        console.log('redirect')
                        this.$router.push({ name: 'not-found' });
                    }

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
    <section class="container my-3 text-light">
        <div>
            <h2 class="my-3">{{ project.title }}</h2>
            <p>{{ project.text }}</p>
            <hr>
            <div class="mt-3 d-flex"> Technologies:
                <div v-for="technology in project.technologies">
                    <span class="mx-3">{{ technology.name }}</span>
                </div>
            </div>
        </div>
        <div v-if="isError">
            <div>{{ errorMessage }}</div>
        </div>
    </section>
</template>

<style scoped></style>