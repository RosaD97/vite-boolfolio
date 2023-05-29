import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import BlogPage from './pages/BlogPage.vue';
import ProjectPage from './pages/ProjectPage.vue';

const  router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectPage
        }
    ]
});

export { router };