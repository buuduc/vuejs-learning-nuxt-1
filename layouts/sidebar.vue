<template>
    <main class="'user-layout bg-gray-100 '">
        <article class="sidebar">
            <p>Dashboard</p>
            <p>Settings</p>
            <p>Custom</p>
        </article>
        <section>
            <slot />
        </section>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.sidebar {
    display: flex;
    flex-direction: column;
}
.user-layout {
    display: flex;
}
</style>
