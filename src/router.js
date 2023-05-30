import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import BlogPage from './pages/BlogPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import TypePage from './pages/TypePage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/type',
            name: 'type',
            component: TypePage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        },
    ]
});

export { router };