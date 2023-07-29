<template>
   <div class="container mx-auto my-8">
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>

    <form class="max-w-md mx-auto" @submit.prevent="saveProduct">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Add Product</h2>
      <div class="mb-4">
        <label for="product" class="block text-gray-700 font-medium mb-2">Product Name:</label>
        <input type="text" id="product" name="nama_produk" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Product Name" v-model="form.nama_produk">
      </div>
      <div class="mb-4">
        <label for="price" class="block text-gray-700 font-medium mb-2">Price:</label>
        <input type="number" id="price" name="harga" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Price" v-model="form.harga">
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700 font-medium mb-2">Description:</label>
        <textarea id="description" name="deskripsi" class="w-full px-4 py-2 border rounded-lg resize-none h-40 focus:outline-none focus:ring focus:border-blue-300" placeholder="Product Description" v-model="form.deskripsi"></textarea>
      </div>
      <div>
        <button type="submit" class="bg-red-500 hover:bg-blue-600 text-black py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
    import {reactive} from "vue"
    import useProduct from '../../composables/products';

    export default {
        setup() {
          const form = reactive({
                'nama_produk' : '',
                'harga' : '',
                'deskripsi' : ''
            })

           const {errors, storeProduct} = useProduct()
            
            const saveProduct = async() => {
                await storeProduct({...form})
            }
           
            return {
                form,
                errors,
                saveProduct
            }
        }
    }
</script>