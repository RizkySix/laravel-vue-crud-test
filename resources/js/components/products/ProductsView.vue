<template>
   <div class="container mx-auto my-8">

    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="p-4">
        <h2 class="font-semibold text-gray-800 text-xl">Create Products</h2>
        <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, amet!</p>
        <div class="mt-3">
            <router-link :to="{path: '/product/create'}" class="text-blue-500 underline">Make One </router-link>
        </div>
      </div>
    </div>

    <table class="table-auto w-full">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Product</th>
          <th class="px-4 py-2">Price</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
       <template v-for="item in products" :key="item.id">
        <tr>
          <td class="border px-4 py-2">{{ item.nama_produk }}</td>
          <td class="border px-4 py-2">{{ item.harga }}</td>
          <td class="border px-4 py-2">{{ item.deskripsi }}</td>
          <td class="border px-4 py-2">
            <button @click="deleteProduct(item.id)" class="inline-flex items-center px-4 py-2 bg-slate-500 border border-blue-100 font-black">Delete</button>
            <router-link :to="{path: '/product/' + item.id + '/edit'}" class="inline-flex items-center px-4 py-2 bg-slate-500 border border-blue-100 font-black">EDIT</router-link>
          </td>
        </tr>
       </template>
        <!-- Add more rows as needed -->
      </tbody>
    </table>
  </div>
</template>

<script>
import useProduct from '../../composables/products';
import {onMounted} from "vue";

    export default {
        setup() {
            const {products , getProducts , destroyProduct} = useProduct()

            const deleteProduct = async(id) =>{
                if(!window.confirm('Sure Delete?')){
                    return false;
                }

                await destroyProduct(id);
                await getProducts()
            }
            onMounted(getProducts)
            
            return {
                products,
                deleteProduct
            }
        }
    }
</script>