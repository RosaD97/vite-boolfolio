<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrl: {
                projects: '/dbprojects'
            },
            projects: []
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {
        getProjects(){
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
    <AppHeader></AppHeader>
    <AppMain :data="projects"></AppMain>
    <AppFooter></AppFooter>
</template>

<style scoped></style>
