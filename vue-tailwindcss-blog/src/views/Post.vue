<script setup>
    import { reactive } from 'vue'
    import { useRoute } from 'vue-router'
    import { store } from '../store'
    import supabase from '../supabase';

    const route = useRoute()

    let post = reactive({})

    const fetchPost = async (id) => {
        const found = store.posts.find(x => x.id === parseInt(route.params.id))

        if (found) {
            return
        }

        let { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

        if (error) throw new Error(error)

        Object.assign(post, data)
    }

    fetchPost(route.params.id)
</script>

<template>
    <div class="Post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.date }}</p>
        <p>{{ post.description }}</p>        
    </div>
</template>