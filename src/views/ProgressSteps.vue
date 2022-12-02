<script setup lang="ts">
const steps = [1, 2, 3, 4, 5, 6]
const currentStepIndex = ref(2)

const addStep = () => {
  if (currentStepIndex.value < steps.length - 1) {
    currentStepIndex.value++
  }
}

const minusStep = () => {
  if (currentStepIndex.value >= 0) {
    currentStepIndex.value--
  }
}
</script>
<template>
  <div class="flex-center">
    <div class="flex-center" v-for="(step, index) in steps">
      <div
        class="flex-center h-16 w-16 border-4 rounded-full transition duration-500"
        :class="
          currentStepIndex >= index ? 'border-green-400' : 'border-gray-300'
        "
      >
        {{ step }}
      </div>
      <div class="h-1 w-10 bg-gray-300" v-if="index !== steps.length - 1">
        <div
          class="h-1 bg-green-400 transition-width duration-200"
          :class="currentStepIndex > index ? 'w-10' : 'w-0'"
        ></div>
      </div>
    </div>
    <button
      class="rounded-md h-10 px-4 py-2 border border-blue-500 ml-28"
      @click="addStep"
    >
      Add
    </button>
    <button
      class="rounded-md h-10 px-4 py-2 border border-blue-500 ml-4"
      @click="minusStep"
    >
      Minus
    </button>
  </div>
</template>

<style scoped></style>
