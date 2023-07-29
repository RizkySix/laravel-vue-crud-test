<template>
    <div class="container mx-auto my-8">
     <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
         {{ errors }}
     </div>
 
     <form class="max-w-md mx-auto" @submit.prevent="savePost">
       <h2 class="text-2xl font-semibold text-gray-800 mb-4">Add Post</h2>
       <div class="mb-4">
         <label for="posts" class="block text-gray-700 font-medium mb-2">Posts Title:</label>
         <input type="text" id="posts" name="judul_post" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Post Name" v-model="form.judul_post">
       </div>
       <div class="mb-4">
         <label for="description" class="block text-gray-700 font-medium mb-2">Description:</label>
         <textarea id="description" name="deskripsi" class="w-full px-4 py-2 border rounded-lg resize-none h-40 focus:outline-none focus:ring focus:border-blue-300" placeholder="Post Description" v-model="form.deskripsi"></textarea>
       </div>
       <div>
         <button type="submit" class="bg-red-500 hover:bg-blue-600 text-black py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300">Submit</button>
       </div>
     </form>
   </div>
 </template>

 <script>
import { onMounted, reactive } from 'vue';
import usePosts from '../../composables/posts';
import axios from 'axios';


 export default {
    setup() {
        const form = reactive({
            'judul_post' : '',
            'deskripsi' : ''
        })
        
        const {errors , storePost} = usePosts()

        const getAuthId = async() => {
            let response = await axios.get('/api/get-token')
        
            let data = response.data
            
            form.token = data.token
        }

        onMounted(getAuthId)

        const savePost = async() => {
            await storePost({...form})
        }

        return {
            errors,
            form,
            savePost
        }
    }
 }

</script>