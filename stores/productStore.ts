
// const = useFetch()

export const useProductStore = defineStore('productStore',{
    state: ()=>({
        products : [],
        product: null,
        counter: 0
    }),
    // getters:{
    //     get_products: (state) => state.product,
    //     get_product: (state)=> state.products
    // },
    actions:{
        async getProducts(){
            const response = await $fetch(PRODUCT_URL)
            this.products = response as any
            return this.products 
            
        },
        async getProduct(productId: number){
            const response = await $fetch(`${PRODUCT_URL}/${productId}`)
            this.product = response as any
            return this.product
        },
        increment() {
            this.counter++
          },
    }
})
