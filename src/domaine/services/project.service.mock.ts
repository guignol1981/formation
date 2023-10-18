import { projectMocks } from '../models/project.mocks';
import { Project } from '../models/project.model';
import { ProjectService } from './project.service';

export class ProjectServiceMock implements ProjectService {
    public constructor(
        private projects: Project[] = projectMocks,
        private latence = 2000,
    ) {}

    public async getProjects(): Promise<Project[]> {
        await new Promise((resolve) => setTimeout(resolve, this.latence));

        return Promise.resolve(this.projects);
    }
}
