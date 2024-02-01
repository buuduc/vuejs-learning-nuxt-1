<template>
    <div>Hello World</div>
    <p>{{ count }}</p>
    <button @click="incrementHandler">Increment</button>
    <button @click="decrementHandler" >Decrement</button>
  </template>
  
  <script setup>
    const count = ref(0)
    const incrementHandler = () => { 
      count.value++
    }
    const decrementHandler = () => { 
      count.value--
    }
  </script>
  
  