import { defineStore } from 'pinia';
import { inject, ref } from 'vue';
import { Project } from '../domaine/models/project.model';
import { ProjectService } from '../domaine/services/project.service';

export const useProjectStore = defineStore('project-store', () => {
    const projects = ref<Project[]>([]);
    const projectsLoading = ref<boolean>(false);

    const projectService = inject<ProjectService>('project-service');

    if (!projectService) {
        throw new Error('project-service non injecté');
    }

    const getProjects = async (): Promise<void> => {
        projectsLoading.value = true;

        projects.value = await projectService.getProjects();

        projectsLoading.value = false;
    };

    return { projects, projectsLoading, getProjects };
});
