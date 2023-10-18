import { Project } from '../models/project.model';
import { ProjectService } from './project.service';

export class ProjectServiceHttp implements ProjectService {
    public constructor() {}

    public getProjects(): Promise<Project[]> {
        return fetch('http://localhost:3000/projects')
            .then((response) => response.json())
            .then((projects) =>
                projects.map((project: any) => ({
                    id: project.id,
                    name: project.name,
                })),
            );
    }
}
