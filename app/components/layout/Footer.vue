<script lang="ts" setup>
const contacts = {
  phone: "+7 (920) 278-00-68",
  email: "qtim@agency.com",
};

const offices = [
  {
    city: "Office in Russia",
    address: "139 Ruben Station Lake Drew, NM 52678",
  },
  { city: "Office in Dubai", address: "139 Ruben Station Lake Drew, NM 52678" },
];

const socials = [
  { label: "Facebook", to: "#" },
  { label: "Instagram", to: "#" },
  { label: "Telegram", to: "#" },
];

const bottomLinks = [
  { label: "Behance", to: "#" },
  { label: "Linkedn", to: "#" },
  { label: "Privacy Policy", to: "#" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer
    class="bg-lavender relative flex flex-col overflow-hidden px-7 pt-8 lg:px-28 lg:pt-35"
  >
    <p class="text-ink mb-14">Is there a project?</p>

    <div class="flex mb-34 lg:mb-68 flex-col gap-y-16 lg:flex-row lg:gap-y-0">
      <a
        href="mailto:qtim@agency.com"
        class="text-ink inline-block text-[66px] lg:text-[112px] leading-[0.95] underline underline-offset-4 lg:mr-92"
      >
        Let's work<br />together
      </a>

      <div class="flex flex-col gap-y-9 text-ink">
        <div>
          <p class="mb-3">For all questions</p>
          <a :href="`tel:${contacts.phone}`" class="block">{{
            contacts.phone
          }}</a>
          <a :href="`mailto:${contacts.email}`" class="block">{{
            contacts.email
          }}</a>
        </div>

        <div v-for="office in offices" :key="office.city">
          <p class="mb-3">{{ office.city }}</p>
          <p class="max-w-40">{{ office.address }}</p>
          <button
            type="button"
            class="mt-2 flex h-9 w-9 items-center justify-center rounded-full bg-ink"
            aria-label="Contact office"
          >
            <img src="~/assets/svg/plane.svg" alt="" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- нижняя часть -->
    <div
      class="flex flex-col gap-y-4 items-start lg:flex-row lg:justify-between text-ink mb-7.5 pb-28 lg:pb-0"
    >
      <ul class="flex gap-x-6 lg:justify-normal w-full lg:w-auto">
        <li v-for="s in socials" :key="s.label">
          <a :href="s.to" class="underline underline-offset-8">{{ s.label }}</a>
        </li>
      </ul>
      <ul class="flex gap-x-6 lg:justify-normal w-full lg:w-auto">
        <li v-for="l in bottomLinks" :key="l.label">
          <a :href="l.to" class="underline underline-offset-8">{{ l.label }}</a>
        </li>
      </ul>
    </div>

    <button
      type="button"
      class="bg-ink absolute bottom-0 left-1/2 flex h-45 w-45 lg:h-89.5 lg:w-89.5 -translate-x-1/2 translate-y-1/2 items-start justify-center rounded-full pt-11 lg:pt-30 text-[32px] text-white cursor-pointer"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      Go
    </button>
  </footer>
</template>
