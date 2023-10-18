import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import { ProjectServiceHttp } from './domaine/services/project.service.http';
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .provide('project-service', new ProjectServiceHttp())
    .use(router)
    .mount('#app');
