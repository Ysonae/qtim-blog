<script lang="ts" setup>
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const handleBack = () => clearError({ redirect: "/articles" });

useSeoMeta({
  title: () => `${props.error.statusCode} — Page not found`,
});
</script>

<template>
  <NuxtLayout>
    <section
      class="container max-w-295 mx-auto flex flex-col items-center justify-center gap-y-8 px-4 py-40 text-center"
    >
      <h1 class="text-ink text-3xl leading-none lg:text-5xl">
        {{ error.statusCode }}
      </h1>
      <p class="text-ink text-2xl">
        {{
          error.statusCode === 404
            ? "Article not found"
            : "Something went wrong"
        }}
      </p>
      <UiBaseButton @click="handleBack">Back to articles</UiBaseButton>
    </section>
  </NuxtLayout>
</template>
