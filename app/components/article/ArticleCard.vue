<script lang="ts" setup>
import type { Post } from "~/types/post";

const props = defineProps<{
  post: Post;
}>();
</script>

<template>
  <article class="group">
    <NuxtLink
      :to="`/articles/${post.id}`"
      class="flex relative flex-col gap-y-6 transition-transform duration-300 group-hover:-translate-y-5"
      :aria-label="post.title"
    >
      <img
        :src="getArticleImage(post.id)"
        loading="lazy"
        class="aspect-square object-cover w-full"
        :alt="post.title"
      />
      <p class="text-ink text-xl line-clamp-3">
        {{ post.preview }}
      </p>

      <span
        class="text-blue absolute top-full mt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        Read more
      </span>
    </NuxtLink>
  </article>
</template>
