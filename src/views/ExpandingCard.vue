<script setup lang="ts">
const imageIds = [1, 2, 3, 4, 5, 6]
const selectId = ref(imageIds[0])
const images: { id: number; src: string }[] = imageIds.map((id) => ({
  id,
  src: new URL(`/src/assets/images/landscape${id}.webp`, import.meta.url).href,
}))
</script>

<template>
  <div
    class="h-4/6 max-h-128 max-w-5xl md:w-12 flex flex-row gap-2 rounded-3xl p-5 shadow-2xl"
  >
    <div
      v-for="image of images"
      :key="image.id"
      :class="`basis-${selectId === image.id ? '7' : '1'}/12`"
      class="transition-all delay-75"
      @click="selectId = image.id"
    >
      <img
        class="object-cover h-full w-full rounded-3xl user-drag"
        :src="image.src"
        alt=""
      />
    </div>
  </div>
</template>
