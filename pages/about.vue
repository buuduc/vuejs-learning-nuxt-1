<template>
  <div>
    <section>
        <p>This page will be displayed at the /about route.</p>
    </section>
    <ul>
    <template v-for="todo in todos">
        <li>
            {{ todo.name }}
        </li>
    </template>
</ul>
  </div>
</template>


<script setup lang="ts">
// definePageMeta({
//   layout: 'custom'
// })

definePageMeta({
    layout: false
})
  const todos = ref([
        {
            name: 'go shopping',
            isComplete: true
        },
        {
            name: 'go school',
            isComplete: false
        }
    ])
</script>
