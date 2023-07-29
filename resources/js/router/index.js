import { createRouter , createWebHistory } from "vue-router";

import ProductView from  '../components/products/ProductsView.vue'
import ProductCreate from  '../components/products/ProductsCreate.vue'
import ProductEdit from  '../components/products/ProductsEdit.vue'
import PostView from  '../components/posts/PostsView.vue'
import PostCreate from  '../components/posts/PostsCreate.vue'
import PostEdit from  '../components/posts/PostsEdit.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'product.view',
        component: ProductView
    },
    {
        path: '/product/create',
        name: 'product.create ',
        component: ProductCreate
    },
    {
        path: '/product/:id/edit',
        name: 'product.edit ',
        component: ProductEdit,
        props: true
    },
    //posts
    {
        path: '/posts',
        name: 'posts.view',
        component: PostView
    },
    {
        path: '/posts/create',
        name: 'posts.create',
        component: PostCreate
    },
    {
        path: '/posts/:id/edit',
        name: 'posts.edit',
        component: PostEdit,
        props: true
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
})