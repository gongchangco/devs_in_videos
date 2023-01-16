import { reactive } from 'vue';

const store = reactive({
    posts: [
        {
            id: 1,
            title: 'How To Do JavaScript',
            description: 'This is JavaScript post.',
            date: new Date()
        }, {
            id: 2,
            title: 'Is it a good idea to create an app with Vue?',
            description: 'This is React post.',
            date: new Date()
        }, {
            id: 3,
            title: 'How To Do TailwindCSS',
            description: 'This is Tailwind post.',
            date: new Date()
        }
    ]
})

export default store;