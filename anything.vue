<template>
  <a  @click="viewHandler('welcome')">Home</a>
  <a @click="viewHandler('Counter')">Counter</a>
  <HomeWelcome v-if="page === 'welcome'" />
  <Counter v-else-if="page === 'Counter'" />
  <!-- <button @click="toggleHandler">Toggle</button>
  <p>{{ state.a }}</p>
  <component :is="MyComponent" /> -->
  <!-- <Counter/> -->
</template>

<script setup>
const page = ref('welcome')
const viewHandler = (view) => {
  page.value = view
}
</script>

