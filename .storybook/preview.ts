import { setup, type Preview } from '@storybook/vue3';
import '../src/style.css';
import { createPinia } from 'pinia';
import { ProjectServiceMock } from '../src/domaine/services/project.service.mock';

const pinia = createPinia();

setup((app) => {
    app.use(pinia);
});

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
