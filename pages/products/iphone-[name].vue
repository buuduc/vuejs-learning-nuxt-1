<template>
    <div>
        <h1>Iphone {{ name }}</h1>
        <button @click="onClickBtnHandler">click here</button>
        <div>{{ id }}</div>
    </div>
</template>

<script setup>
    const route = useRoute()
    const name =  route.params.name
    const id = ref(1)
    const url = computed(()=> `/api/users/${id.value}`) 
    const { data, error, refresh } = await useFetch(url,{
        immediate: false,
        watch: [id],
        params :{ test: id }
    })
    const onClickBtnHandler = () => { 
        id.value++
        // refresh()
     }
</script>

<style lang="scss" scoped>

</style>
