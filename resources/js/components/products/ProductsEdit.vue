<template>
   <div class="container mx-auto my-8">
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>

    <form class="max-w-md mx-auto" v-on:submit.prevent="saveProduct">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Edit Product</h2>
      <div class="mb-4">
        <label for="product" class="block text-gray-700 font-medium mb-2">Product Name:</label>
        <input type="text" id="product" name="nama_produk" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Product Name" v-model="product.nama_produk">
      </div>
      <div class="mb-4">
        <label for="price" class="block text-gray-700 font-medium mb-2">Price:</label>
        <input type="text" id="price" name="harga" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Price" v-model="product.harga">
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700 font-medium mb-2">Description:</label>
        <textarea id="description" name="deskripsi" class="w-full px-4 py-2 border rounded-lg resize-none h-40 focus:outline-none focus:ring focus:border-blue-300" placeholder="Product Description" v-model="product.deskripsi"></textarea>
      </div>
      <div>
        <button type="submit" class="bg-red-500 hover:bg-blue-600 text-black py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300">Submit</button>
      </div>
    </form>
  </div>
</template>


<script>

import { onMounted } from "vue"
import useProduct from "../../composables/products.js" 

  export default {

    props : {
        id:{
          required: true,
            type: String
        }
      },

     setup(props) {
     
      const {product , getProduct , updateProduct ,errors} = useProduct()

      onMounted(getProduct(props.id))

      const saveProduct = async() => {
        await updateProduct(props.id)
      }
      console.log(product)
      return {
        product,
        errors,
        saveProduct,
      }

     }
  }

</script>
