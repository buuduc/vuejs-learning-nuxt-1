<template>
    <div class="item-container p-3">
        <NuxtLink :to="`/products/${id}`">
            <NuxtImg class="w-[100%] h-[180px] rounded-[10px]" :src="imgUrl" :alt="title" />
        </NuxtLink>
        <h2 class="text-lg font-medium h-[60px] line-clamp-2">{{ title }}</h2>
        <p class="text-base">$ {{ price }}</p>
        <div class="px-0.5">
            <span class="text-sm" v-if="sold">Sold: {{ sold }}</span>
            <span class="float-right text-sm" v-if="rating">Rating: {{ rating }}</span>
        </div>
        <v-container>
            <v-row justify="space-between">
                <v-btn @click="emit('onBuyNow', id, price)" size="x-small">Buy now</v-btn>
                <v-btn v-if="cartStore.checkInCart(id)" color="yellow" @click="emit('onRemoveFromCart', id, price)" size="x-small">Remove Cart</v-btn>
                <v-btn v-else color="red" @click="emit('onAddToCart', id, price)" size="x-small">Add to Cart</v-btn>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        price: Number,
        imgUrl: String,
        sold: Number,
        rating: Number, 
        id: Number,
    })
    const emit = defineEmits(['onBuyNow', 'onAddToCart', 'onRemoveFromCart'])
    const cartStore = useCartStore()

    // const onBuyNow = () => { 
    //     emit('buyNow')
    //  }
</script>

<style lang="scss" scoped>
.item-container{
    display: flex;
    flex-flow: column nowrap;
    box-shadow: 1px 2px 54px -8px rgba(0,0,0,0.66);
    border-radius: 10px;

}
</style>
