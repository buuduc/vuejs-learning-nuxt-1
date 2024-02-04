<template>
    <div>
        <div>
        <h1>There is a list of products</h1>
    </div>
    <button @click="clickHandler">click</button>
    <div>{{ store.counter }}</div>
    <div class="container">
    <ProductItem 
        v-for="item in store.products"
        :key="item.id"
        :price="item.price" 
        class="item-1 item" 
        :title="item.title"
        :imgUrl="item.image"
        :sold="item.rating.count"
        :rating="item.rating.rate"
        :id="item.id"
        @onBuyNow="(id) => console.log(id)"
        @onAddToCart="onAddToCart"
        @onRemoveFromCart="cartStore.removeCart"
    />

    </div>
    </div>
</template>

<script setup>
    const store = useProductStore()
    const cartStore = useCartStore()

    await useAsyncData('products', store.getProducts)
    
    const clickHandler = async () => { 
        store.getProducts()
     }
     const onAddToCart = (id, amount) => { 
        console.log('🚀 🚀 file: index.vue:36 🚀 onAddToCart 🚀 amount:', amount)
        cartStore.addCart(id, amount)
      }

</script>

<style lang="scss" scoped>
.container{
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    // grid-template-rows: repeat(2, 1fr);
    // grid-auto-rows: 200px;
    grid-auto-rows: minmax(60px,auto);
    row-gap: 15px;
    gap: 15px 40px;
}
</style>
