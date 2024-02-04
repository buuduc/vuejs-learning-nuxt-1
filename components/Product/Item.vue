<template>
    <div class="item-container">
        <img class="w-[100%] h-[180px]" :src="imgUrl" :alt="title" >
        <h2 class="text-lg font-medium">{{ title }}</h2>
        <p class="text-base">$ {{ price }}</p>
        <div class="px-0.5">
            <span class="text-sm" v-if="sold">Sold: {{ sold }}</span>
            <span class="float-right text-sm" v-if="rating">Rating: {{ rating }}</span>
        </div>
        <!-- <v-btn>Add to Cart</v-btn> -->
        <!-- <v-row>
            <v-btn>Buy now</v-btn>

        </v-row> -->
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        price: Number,
        imgUrl: String,
        sold: Number,
        rating: String
    })
</script>

<style lang="scss" scoped>
.item-container{
    display: flex;
    flex-flow: column nowrap;
}
</style>
