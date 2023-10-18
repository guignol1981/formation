import { setup, type Meta, type StoryObj } from '@storybook/vue3';
import Home from './Home.vue';
import { ProjectServiceMock } from '../domaine/services/project.service.mock';
import { projectMocks } from '../domaine/models/project.mocks';
import { userEvent } from '@storybook/testing-library';

const meta = {
    title: 'containers/Home',
    component: Home,
    tags: ['autodocs'],
} satisfies Meta<typeof Home>;

setup((app) => {
    app.provide('project-service', new ProjectServiceMock([], 10000));
});

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
