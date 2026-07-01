<script lang="ts" setup>
const props = defineProps<{
  page: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  change: [page: number];
}>();

const VISIBLE = 7;

const items = computed<(number | "...")[]>(() => {
  const total = props.totalPages;
  const current = props.page;

  // страниц мало - показываем все, без многоточий
  if (total <= VISIBLE) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const showLeftDots = current > 3;
  const showRightDots = current < total - 2;

  // близко к началу: 1 2 3 4 5 … 11
  if (!showLeftDots && showRightDots) {
    const left = Array.from({ length: VISIBLE - 2 }, (_, i) => i + 1);
    return [...left, "...", total];
  }

  // близко к концу: 1 … 7 8 9 10 11
  if (showLeftDots && !showRightDots) {
    const count = VISIBLE - 2;
    const right = Array.from(
      { length: count },
      (_, i) => total - count + 1 + i,
    );
    return [1, "...", ...right];
  }

  // середина: 1 … 3 4 5 … 11
  return [1, "...", current - 1, current, current + 1, "...", total];
});

const goNext = () => {
  if (props.page < props.totalPages) emit("change", props.page + 1);
};
</script>

<template>
  <nav class="flex items-center gap-2" aria-label="Pagination">
    <button
      v-for="(item, i) in items"
      :key="i"
      :disabled="item === '...'"
      :aria-current="item === page ? 'page' : undefined"
      class="flex h-11 w-11 items-center justify-center rounded-xl transition cursor-pointer"
      :class="
        item === page
          ? 'bg-ink text-white'
          : item === '...'
            ? 'cursor-default text-gray'
            : 'bg-surface text-ink hover:bg-ink hover:text-white'
      "
      @click="typeof item === 'number' && emit('change', item)"
    >
      {{ item }}
    </button>

    <button
      class="flex h-11 w-11 items-center justify-center rounded-xl border border-surface bg-white cursor-pointer hover:bg-surface disabled:opacity-30 disabled:cursor-auto"
      :disabled="page === totalPages"
      aria-label="Next page"
      @click="goNext"
    >
      <img src="~/assets/svg/chevron-right.svg" alt="" />
    </button>
  </nav>
</template>
