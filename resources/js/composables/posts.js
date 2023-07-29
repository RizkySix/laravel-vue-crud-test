import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";


export default function usePosts() {
    const posts = ref([])
    const post = ref([])
    const router = useRouter()
    const errors = ref('')

    const getPosts = async() => {
        let response = await axios.get('/api/posts')
        posts.value = response.data.data
    }

    const showPost = async(id) => {
        let response = await axios.get('/api/posts/' + id)
        post.value = response.data.data
    }

    const storePost = async(data) => {
        errors.value = ''
        try {
            await axios.post('/api/posts' , data)
            await router.push({name: 'posts.view'})
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' '       
                }
            }
        }
    }


    const updatePost = async(id) => {
        errors.value = ''
        try {
            await axios.put('/api/posts/' + id , post.value)
            await router.push({name: 'posts.view'})
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' '       
                }
            }
        }
    }

    const destroyPost = async(id) => {
        await axios.delete('/api/posts/' + id)
    }

    return {
        posts,
        post,
        errors,
        getPosts,
        showPost,
        storePost,
        updatePost,
        destroyPost
    }
}