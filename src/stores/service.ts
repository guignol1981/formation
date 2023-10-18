import { inject } from 'vue';

export const useService = <T>(serviceIdentifier: string) => {
    const service = inject<T>(serviceIdentifier);

    if (!service) {
        throw new Error(`${serviceIdentifier} non injecté`);
    }

    return service;
};
