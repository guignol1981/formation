<template>
    <ul v-if="props.projects.length">
        <li v-for="project in props.projects">
            <ProjectListItem :project="project" />
        </li>
    </ul>
    <div v-else>No projects</div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import ProjectListItem from '../project-list-item/ProjectListItem.vue';
import { Project } from '../../domaine/models/project.model';

const props = withDefaults(defineProps<{ projects?: Project[] }>(), {
    projects: () => [],
});
</script>
