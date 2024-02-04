<template>
    <div>
        <h1>There is list of products</h1>
    </div>
    <div class="container">
    <ProductItem 
        v-for="item in data"
        :price="item.price" 
        class="item-1 item" 
        :title="item.title"
        :imgUrl="item.image"
        :sold="item.rating.count"
        :rating="item.rating.rate"
    />

    <!-- <ProductItem class="item-2 item" />
<ProductItem class="item-3 item" />
<ProductItem class="item-4 item" />
<ProductItem class="item-5 item" /> -->
    </div>
</template>

<script setup>
import { PRODUCT_URL } from '~/utils/constant';

    const {data, error} = useFetch(PRODUCT_URL)

</script>

<style lang="scss" scoped>
.item{
    background-color: gold;
    border: 1px solid grey;
    // min-height: 50px;
}
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
