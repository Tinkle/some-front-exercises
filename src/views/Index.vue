<script setup lang="ts">
import { staticRouters } from '@/routers'

const routers = staticRouters.filter((r) => r.path !== '/')
</script>

<template>
  <div class="content">
    <div class="content-items">
      <h1>Examples</h1>
      <ul>
        <li v-for="router in routers">
          <router-link :to="router.path">{{ router.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  height: inherit;

  &-items {
    background: rgb(226, 226, 226);
    width: 1000px;
    height: 200px;

    a {
      font-size: 24px;
      line-height: 30px;
    }
  }
}
</style>
