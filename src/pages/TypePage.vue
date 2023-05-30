<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'TypePage',
    data() {
        return {
            store,
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(this.store.apiBaseUrl+this.store.apiUrls.types)
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
        <h2>Type page: </h2>
        <div>
            <ul>
                <li  v-for="item in types">
                    <router-link :to="{name :'type-projects', params:{slug: item.slug}}">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>