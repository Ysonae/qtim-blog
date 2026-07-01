<script lang="ts" setup>
import { NuxtLink } from "#components";

withDefaults(
  defineProps<{
    to?: string;
    type?: "button" | "submit";
  }>(),
  {
    type: "button",
  },
);
</script>

<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? undefined : type"
    class="bg-ink inline-flex items-center justify-center rounded-full px-8 py-3 text-white text-xl transition-opacity hover:opacity-80"
  >
    <slot />
  </component>
</template>
