
// const = useFetch()

export const useCartStore = defineStore('useCartStore',{
    state: ()=>({
        productsNumber : 0,
        listCart: new Set(),
        amount: 0
    }),
    getters:{
        listCartSize: (state) => state.listCart.size,
    },
    actions:{
         addCart(id, amount){
           this.listCart.add(id)
           this.amount+=amount
            
        },
         removeCart(id, amount){
           this.listCart.delete(id)
           this.amount-=amount
            
        },
        checkInCart(id){
            return this.listCart.has(id)
        }
    }
})
