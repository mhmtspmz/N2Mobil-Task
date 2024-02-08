
<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script>
import User from './components/User.vue'
import Todos from './components/Todos.vue'
import Posts from './components/Posts.vue'
import Albums from './components/Albums.vue'
import AlbumDetail from './components/AlbumDetail.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
   
    "Albums": Albums,
    "User":User,
    "Todos":Todos,
    "Posts":Posts,
    "AlbumDetail":AlbumDetail,
    "Modal":Modal,
  
}
}
</script>
