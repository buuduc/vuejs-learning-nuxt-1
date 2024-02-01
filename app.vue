<template>
  <HomeWelcome v-if="state.value === 'welcome'" />
  <button @click="toggleHandler">Toggle</button>
  <p>{{ state.a }}</p>
  <component :is="MyComponent" />
  <!-- <Counter/> -->
</template>

<script setup>
const MyComponent = ref(resolveComponent('Counter'))
const Counter = resolveComponent('Counter')
// const state = shallowRef({a: 1})
let dcm = 1
const toggleHandler = () => {
  MyComponent.value = resolveComponent('HomeWelcome')
  console.log('dcm', state.value.a)
  // state.value.a=state.value.a+1
}
</script>

