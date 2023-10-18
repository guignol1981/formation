import { Project } from '../models/project.model';

export interface ProjectService {
    getProjects(): Promise<Project[]>;
}
