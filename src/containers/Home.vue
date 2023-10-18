<template>
    <main>
        <h1>Mes projets</h1>
        <div v-if="projectStore.projectsLoading">...loading</div>
        <ProjectList v-else :projects="projectStore.projects" />
        <button @click="onClick">creer projet</button>
    </main>
</template>

<script lang="ts" setup>
import ProjectList from '../components/project-list/ProjectList.vue';
import { useProjectStore } from '../stores/project.store';

const projectStore = useProjectStore();

projectStore.getProjects();

const onClick = () => {
    alert('ouvrir formulaire');
};
</script>
