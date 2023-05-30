<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'TypePage',
    data() {
        return {
            store,
            types: [],
            currentTypes: ''
        }
    },
    methods: {
        getTypes() {
            axios.get(this.store.apiBaseUrl + this.store.apiUrls.types)
                .then((response) => {
                    console.log(response);
                    this.types = response.data.results;
                })
                .catch((error) => { console.log(error) })
        }
    },
    created() {
        this.getTypes();
    }
}
</script>

<template>
    <div class="container my-4">
        <h2>Lista Tecnologie</h2>
        <ul class="list-unstyled">
            <li v-for="item in types">{{ item.name }}</li>
            <router-link :to="{ name: 'project-types', params: { slug: project.slug } }">Vai al Project</router-link>
        </ul>
    </div>
</template>

<style scoped></style>