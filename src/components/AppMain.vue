<script>

export default {
    name: 'AppMain',
    props: {
        data: Object
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h2>Main</h2>
            <div class="row">
                <div class="col col-md-4" v-for="project in data">
                    <div class="card">
                        <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text">{{ project.text }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>