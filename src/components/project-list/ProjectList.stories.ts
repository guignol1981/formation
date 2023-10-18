import type { Meta, StoryObj } from '@storybook/vue3';
import ProjectList from './ProjectList.vue';
import { projectMocks } from '../../domaine/models/project.mocks';

const meta = {
    title: 'components/ProjectList',
    component: ProjectList,
    tags: ['autodocs'],
} satisfies Meta<typeof ProjectList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PropProjectsWithProjects: Story = {
    args: {
        projects: projectMocks,
    },
};
