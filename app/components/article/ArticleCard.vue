<script lang="ts" setup>
import type { Post } from "~/types/post";

const props = defineProps<{
  post: Post;
}>();
</script>

<template>
  <article>
    <NuxtLink
      :to="`/articles/${post.id}`"
      class="flex flex-col gap-y-6"
      :aria-label="post.title"
    >
      <img
        :src="getArticleImage(post.id)"
        loading="lazy"
        class="aspect-square object-cover w-full"
        :alt="post.title"
      />
      <p class="text-ink text-xl">
        {{ post.preview }}
      </p>
    </NuxtLink>
  </article>
</template>
