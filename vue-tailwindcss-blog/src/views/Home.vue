<script setup>
    import { store } from '../store.js'
    import supabase from '../supabase'

    const getWordsNum = (str) => (str.split(' '). length)

    const fetchPosts = async () => {

        let { data: posts, error } = await supabase
        .from('posts')
        .select()

        if (error) throw new Error(error)

        store.posts = posts
    }

    fetchPosts()
</script>

<template>
    <div class="Home">
        <main class="container">
            <div v-if="store.posts.length < 1">
                There is no posts.
            </div>
            <div v-else>
                <div class="PostItem" v-for="item, itemIndex in store.posts" :key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </main>
    </div>
</template>