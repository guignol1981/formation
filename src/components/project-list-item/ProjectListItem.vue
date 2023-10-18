<template>
    <div class="border bg-red-200 p-2">
        {{ props.project.name }}
    </div>
</template>

<script lang="ts" setup>
import { Project } from '../../domaine/models/project.model';

const props = defineProps<{ project: Project }>();
</script>
