<script setup lang="ts">
const imageIds = [1, 2, 3, 4, 5, 6]
const selectId = ref(imageIds[0])
const images: { id: number; src: string }[] = imageIds.map((id) => ({
  id,
  src: new URL(`/src/assets/images/landscape${id}.webp`, import.meta.url).href,
}))
</script>

<template>
  <div class="container flex justify-center items-center h-screen">
    <div class="h-2/5 w-1/2 flex flex-row gap-2 rounded-3xl p-5 shadow-lg">
      <div
        v-for="image of images"
        :class="{
          'basis-7/12': selectId === image.id,
          'basis-1/12': selectId !== image.id,
        }"
        class="transition-all delay-75"
        :key="image.id"
        @click="selectId = image.id"
      >
        <img
          class="object-cover h-full w-full rounded-3xl user-drag"
          :src="image.src"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-drag {
  -webkit-user-drag: none;
}
</style>
