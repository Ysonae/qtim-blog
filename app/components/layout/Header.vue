<script lang="ts" setup>
const nav = [
  { label: "Works", href: "#" },
  { label: "About", href: "#" },
];

const isOpen = ref(false);

const route = useRoute();
watch(
  () => route.fullPath,
  () => (isOpen.value = false),
);
</script>

<template>
  <header class="px-10 py-9 flex relative">
    <div class="flex items-center w-full justify-between">
      <NuxtLink to="/articles">
        <img src="~/assets/svg/qtim-logo.svg" alt="Logotype" />
      </NuxtLink>

      <div class="hidden lg:flex items-center gap-x-22.5">
        <nav class="flex items-center gap-x-14.5" aria-label="Main">
          <a
            v-for="item in nav"
            :key="item.href"
            :href="item.href"
            class="text-ink text-xl transition-opacity hover:opacity-60"
            >{{ item.label }}</a
          >
        </nav>

        <div class="flex items-center gap-x-4">
          <button
            type="button"
            class="flex h-13 w-13 items-center justify-center rounded-full border-2 border-surface cursor-pointer"
            aria-label="Change language"
          >
            <img src="~/assets/svg/english-language.svg" alt="English" />
          </button>

          <UiBaseButton to="/articles">Let`s work</UiBaseButton>
        </div>
      </div>

      <button
        type="button"
        class="flex flex-col gap-1.5 lg:hidden cursor-pointer"
        :aria-expanded="isOpen"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
      >
        <span
          class="h-0.5 w-7 bg-ink transition"
          :class="isOpen && 'translate-y-2 rotate-45'"
        />
        <span
          class="h-0.5 w-7 bg-ink transition"
          :class="isOpen && 'opacity-0'"
        />
        <span
          class="h-0.5 w-7 bg-ink transition"
          :class="isOpen && '-translate-y-2 -rotate-45'"
        />
      </button>
    </div>

    <div
      v-show="isOpen"
      class="absolute top-full left-0 w-full px-10 pb-9 flex flex-col gap-y-6 shadow-xl bg-white lg:hidden"
    >
      <nav class="flex flex-col gap-y-4" aria-label="Mobile">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="text-ink text-xl transition-opacity hover:opacity-60"
          >{{ item.label }}</a
        >
      </nav>

      <div class="flex items-center gap-x-4">
        <button
          type="button"
          class="flex h-13 w-13 items-center justify-center rounded-full border-2 border-surface cursor-pointer"
          aria-label="Change language"
        >
          <img src="~/assets/svg/english-language.svg" alt="English" />
        </button>

        <UiBaseButton to="/articles">Let`s work</UiBaseButton>
      </div>
    </div>
  </header>
</template>
