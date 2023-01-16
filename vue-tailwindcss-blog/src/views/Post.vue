<script setup>
    import { useRoute } from 'vue-router'
    import store from '../store'

    const route = useRoute()

    const post = store.posts.find(x => x.id === parseInt(route.params.id))
</script>

<template>
    <div class="Post">
        
        <h1>{{ post.title }}</h1>
        <p>{{ post.date }}</p>
        <p>{{ post.description }}</p>        
    </div>
</template>