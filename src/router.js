import { createRouter, createWebHashHistory } from "vue-router"

import User from './components/User.vue'
import Todos from './components/Todos.vue'
import Posts from './components/Posts.vue'
import Albums from './components/Albums.vue'
import AlbumDetail from './components/AlbumDetail.vue'
import Modal from './components/Modal.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: "User", component: () => import("./components/User.vue") },
        { path: '/todos', name: "Todos", component: () => import("./components/Todos.vue") },
        {path: '/posts', name: "Posts", component: () => import("./components/Posts.vue")},
        {path: '/albums', name: "Albums", component: () => import("./components/Albums.vue") },
        {path: '/albumDetail', name: "AlbumDetail", component: () => import("./components/AlbumDetail.vue") },
        { path: '/modal', name: "Modal", component: () => import("./components/Modal.vue")},
    
    ]
});

export default router