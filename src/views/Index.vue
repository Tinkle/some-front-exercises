<script setup lang="ts">
import { staticRouters } from '@/routers'

const routers = staticRouters.filter((r) => r.path !== '/')
const router = useRouter()

const jumpTo = (name: string) => router.push({ name })
</script>

<template>
  <div class="3xl:container bg-[url('@/assets/bg.jpg')]">
    <div class="w-2/3 mx-auto h-screen tracking-wider">
      <p class="text-3xl font-semibold leading-loose">Examples</p>
      <ul class="list-none">
        <li
          class="transition duration-300 flex justify-center items-center text-xl h-20 mt-5 rounded cursor-pointer bg-yellow-50 hover:bg-yellow-100 hover:scale-105"
          v-for="router in routers"
          @click="() => jumpTo(router.name)"
        >
          <p class="font-medium text-blue-500/75">{{ router.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
