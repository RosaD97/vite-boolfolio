<script>
import store from '../store';
import axios from 'axios';
import CardProject from '../components/CardProject.vue';

export default {

    name: 'TypeProjects',
    data(){
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
    <div>
        <ul class="d-flex" v-for="project in type.projects">
            <li class="list-unstyled">
                <CardProject :project="project"></CardProject>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>