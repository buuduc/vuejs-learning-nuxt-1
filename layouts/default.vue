<template>
  <v-app>
    <div>
      <!-- <AppHeader /> -->
      <div >
        <!-- <h1> this is default Layout</h1> -->
        <nav class="bg-purple-700 text-white text-lg shadow-lg px-2 py-2 flex justify-between">
            <div class="flex justify-center items-center">
                <LayoutNavItem to="/">
                    <img src="/favicon.ico" alt="" srcset="">
                  </LayoutNavItem>
              <span>
                <LayoutNavItem to="/">Home</LayoutNavItem>
                <LayoutNavItem to="/about">About</LayoutNavItem>
                <LayoutNavItem to="/products">Products</LayoutNavItem>
              </span>
  
              </div>
            <span>
              <span class="mr-5">Cart: {{ cartStore.listCartSize }}</span>
              <span class="mr-5">Amount: ${{ Math.round(cartStore.amount, 2) }}</span>
              <LayoutNavItem to="/profile">Profile</LayoutNavItem>
              <!-- <LayoutNavItem to="/login">Login</LayoutNavItem> -->
            </span>
          </nav>
        </div>
      <slot />
      <!-- <AppFooter /> -->
    </div>
  </v-app>
</template>

<script setup>
    const cartStore = useCartStore()

</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
