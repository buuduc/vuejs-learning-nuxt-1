<template>
    <div>
      <!-- <AppHeader /> -->
      <div>
        <h1> this is default Layout</h1>
      </div>
      <slot />
      <!-- <AppFooter /> -->
    </div>
  </template>

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
