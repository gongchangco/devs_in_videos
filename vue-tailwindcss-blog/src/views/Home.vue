<script setup>
    import store from '../store.js'

</script>

<template>
    <div class="Home">
        <main class="container">
            <div class="PostItem" v-for="item, itemIndex in store.posts" :key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                <h1>{{ item.title }}</h1>
                <p>{{ item.description }}</p>
            </div>
        </main>
    </div>
</template>