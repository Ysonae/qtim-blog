<script lang="ts" setup>
const route = useRoute();

const { data: post, error } = await usePost(() => route.params.id as string);

if (error.value || !post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
    fatal: true,
  });
}

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.preview,
});
</script>

<template>
  <article
    v-if="post"
    class="container max-w-295 mx-auto py-15 lg:py-30 px-4 sm:px-5 flex flex-col"
  >
    <h1 class="text-ink text-5xl lg:text-[82px]">
      {{ post.title }}
    </h1>
    <img
      :src="getArticleImage(post.id)"
      :alt="post.title"
      class="mb-10 mt-9 lg:mb-20 lg:mt-18 aspect-video w-full object-cover"
    />
    <div class="max-w-173.75 flex flex-col gap-y-8">
      <p class="text-ink">About</p>
      <p class="text-ink text-2xl lg:text-4xl">
        {{ post.description }}
      </p>
    </div>
  </article>
</template>
