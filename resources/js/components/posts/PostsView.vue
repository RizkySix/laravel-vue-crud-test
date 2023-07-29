<template>
    <div class="container mx-auto my-8">
 
     <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
       <div class="p-4">
         <h2 class="font-semibold text-gray-800 text-xl">Create Posts</h2>
         <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, amet!</p>
         <div class="mt-3">
            <router-link :to="{path: '/posts/create'}" class="text-blue-500 underline">Make One Post </router-link>
          
        </div>
       </div>
     </div>
 
     <table class="table-auto w-full">
       <thead>
         <tr class="bg-gray-200">
           <th class="px-4 py-2">Pemilik</th>
           <th class="px-4 py-2">Posts</th>
           <th class="px-4 py-2">Description</th>
           <th class="px-4 py-2">Action</th>
         </tr>
       </thead>
       <tbody>
        <template v-for="item in posts" :key="item.id">
         <tr>
          <td class="border px-4 py-2">{{ item.pemilik }}</td>
           <td class="border px-4 py-2">{{ item.judul_post }}</td>
           <td class="border px-4 py-2">{{ item.deskripsi }}</td>
           <td class="border px-4 py-2">
            <router-link :to="{path: '/posts/' + item.id + '/edit'}" class="inline-flex items-center px-4 py-2 bg-slate-500 border border-blue-100 font-black">EDIT</router-link>
            <button @click="deletePost(item.id)" class="inline-flex items-center px-4 py-2 bg-slate-500 border border-blue-100 font-black">Delete</button>
           </td>
         </tr>
        </template>
         <!-- Add more rows as needed -->
       </tbody>
     </table>
   </div>
 </template>

 <script>
import { onMounted } from 'vue';
import usePosts from '../../composables/posts';


 export default {
    setup() {
        const {posts , getPosts , destroyPost} = usePosts()
        onMounted(getPosts)

        const deletePost = async(id) => {
            if(!window.confirm('Sure delete?')){
              return false
            }

            await destroyPost(id)
            await getPosts()
        }
      
        return {
            posts,
            deletePost
        }
    }
 }

</script>