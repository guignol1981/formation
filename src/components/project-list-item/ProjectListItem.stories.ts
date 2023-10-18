import type { Meta, StoryObj } from '@storybook/vue3';
import ProjectListItem from './ProjectListItem.vue';
import { projectMocks } from '../../domaine/models/project.mocks';

const meta = {
    title: 'components/ProjectListItem',
    component: ProjectListItem,
    tags: ['autodocs'],
} satisfies Meta<typeof ProjectListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        project: projectMocks[0],
    },
};
