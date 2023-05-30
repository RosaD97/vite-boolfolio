<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'TypeList',
    data() {
        return {
            store,
            types: [],
            currentType: ''
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
        },
        changePage() {
            // console.log(this.currentType);
            this.$router.push({ name: 'type', params: {slug: this.currentType}
        });
    }
},
created() {
    this.getTypes();
}
}
</script>

<template>
    <div>
        <select class="form-select" @change="changePage" v-model="currentType">
            <option :value="item.slug" v-for="item in types">{{ item.name }}</option>
        </select>
    </div>
</template>

<style scoped></style>