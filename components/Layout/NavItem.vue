<template>
    <NuxtLink class="mr-2" :to="to">
        <slot/> 
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        to: String
    })
</script>

<style lang="scss" scoped>

</style>
