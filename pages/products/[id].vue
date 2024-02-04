<template>
    <v-container v-if="Boolean(product)">
        <v-row no-gutters justify="center">
            <v-col cols="4">
                <NuxtImg :src="product.image" />
            </v-col>
            <v-col class="flex flex-col justify-items-center items-center mt-[70px]" cols="4">
                <h1 class="text-xl font-bold">{{ product.title }}</h1>
                <h2>${{ product.price }}</h2>
                <p>{{ product.description }}</p>
                <div class="px-0.5 mt-5 self-start flex items-center justify-between w-full pr-15">
                    <span class="text-md mr-2" v-if="product.rating?.count">Sold: {{ product.rating?.count }}</span>
                    <v-rating active-color="red" :model-value="product.rating?.rate" class="float-right text-md" hover half-increments="" v-if="product.rating?.rate"></v-rating>
                </div>
                <v-container>
                    <v-row justify="start">
                        <v-btn class="mr-5" size="large">Buy now</v-btn>
                        <v-btn v-if="cartStore.checkInCart(product.id)" color="yellow"
                            @click="cartStore.removeCart(product.id, product.price)" size="large">Remove Cart</v-btn>
                        <v-btn v-else color="red" @click="cartStore.addCart(product.id, product.price)" size="large">Add to
                            Cart</v-btn>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const route = useRoute()
const productState = useProductStore()
const cartStore = useCartStore()

await useAsyncData('productState', () => productState.getProduct(route.params.id))
const product = productState.product
console.log('🚀 🚀 file: [id].vue:28 🚀 product:', product)

// const { data: product, error, refresh } = await useFetch(`${PRODUCT_URL}/${14}`)

// const product = computed(() =>  productState.product )

// // const id = ref(1)
// const url = computed(()=> `/api/users/${id}`)
// })
// const onClickBtnHandler = () => {
//     id.value++
//     // refresh()
//  }
</script>

<style lang="scss" scoped>
</style>
