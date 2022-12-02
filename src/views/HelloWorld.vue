<script setup lang="ts">
const router = useRouter()
const currentRoute = computed(() => router.currentRoute.value)
const routeMeta = computed<RouterMeta>(() => currentRoute.value.meta)

const toBack = () => router.push({ name: 'Index' })
</script>

<template>
  <div class="container flex flex-col h-screen font-medium">
    <div class="h-30 bg-slate-100 p-8">
      <span class="text-3xl text-lime-700">{{ currentRoute.name }}</span>
    </div>
    <div class="flex-center grow">
      <router-view />
    </div>
    <div class="flex justify-center h-40 bg-slate-100">
      <div>
        <button
          class="btn bg-transparent active:bg-blue-500 text-blue-700 active:text-white border border-blue-500 m-6"
          @click="toBack"
        >
          Back
        </button>
        <button
          class="btn bg-indigo-500 active:bg-indigo-600 text-white m-6"
          v-if="!!routeMeta.prevName"
          @click="router.push({ name: routeMeta.prevName })"
        >
          Prev
        </button>
        <button
          class="btn bg-emerald-500 active:bg-emerald-600 text-white m-6"
          v-if="!!routeMeta.nextName"
          @click="router.push({ name: routeMeta.nextName })"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  @apply rounded-md px-6 py-2;
}
</style>
