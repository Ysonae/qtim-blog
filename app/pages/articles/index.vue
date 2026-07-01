<script lang="ts" setup>
const { data: posts, pending, error } = await usePosts();

const route = useRoute();
const router = useRouter();
const perPage = 8;

const page = computed(() => Number(route.query.page) || 1);
const totalPages = computed(() =>
  Math.ceil((posts.value?.length ?? 0) / perPage),
);

const paginated = computed(() => {
  const start = (page.value - 1) * perPage;
  return posts.value?.slice(start, start + perPage) ?? [];
});

const goToPage = (n: number) => {
  router.push({ query: n > 1 ? { page: n } : {} });
};

useSeoMeta({
  title: "Articles",
  description: "QTIM blog — articles about software design",
  ogTitle: "Articles — QTIM",
  ogType: "website",
});
</script>

<template>
  <section class="container max-w-295 mx-auto py-15 lg:py-30 px-4 sm:px-5">
    <h1 class="mb-15 text-ink text-5xl lg:text-[82px]">Articles</h1>
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Failed to load articles</p>

    <ul
      v-else
      class="grid grid-cols-1 gap-x-9 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
    >
      <li v-for="post in paginated" :key="post.id">
        <ArticleCard :post="post" />
      </li>
    </ul>
    <UiBasePagination
      v-if="totalPages > 1"
      class="mt-12.5"
      :total-pages="totalPages"
      :page="page"
      @change="goToPage"
    />
  </section>
</template>
