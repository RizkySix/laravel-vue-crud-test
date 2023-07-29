import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router"

export default function useProduct() {
    const products = ref([])
    const product = ref([])
    const router = useRouter()
    const errors = ref('')

    const getProducts = async() => {
       let response = await axios.get('/api/products')
       products.value = response.data.data
    }

    const getProduct = async(id) => {
       let response = await axios.get('/api/products/' + id)
       product.value = response.data.data
    }

    const storeProduct = async(data) => {
      
      errors.value = ''
     try {
      await axios.post('/api/products' , data)
      await router.push({name: 'product.view'})
     } catch (e) {
        if (e.response.status === 422) {
           for (const key in e.response.data.errors) {
                errors.value += e.response.data.errors[key][0] + ' '
           }
        }
     }
    }

    const updateProduct = async(id) => {
      
      errors.value = ''
     try {
      await axios.put('/api/products/' + id, product.value)
      await router.push({name: 'product.view'})
     } catch (e) {
        if (e.response.status === 422) {
           for (const key in e.response.data.errors) {
                errors.value += e.response.data.errors[key][0] + ' '
           }
        }
     }
    }
    
    const destroyProduct = async(id) => {
      await axios.delete('/api/products/' + id)
    }


    return {
        products,
        product,
        errors,
        getProducts,
        getProduct,
        storeProduct,
        updateProduct,
        destroyProduct
    }
}